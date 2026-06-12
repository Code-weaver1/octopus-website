// Cloudflare Pages Function — POST /api/waitlist
// Stores waitlist signups in a KV namespace (binding name: WAITLIST).
// Same-origin, so the deployed site needs no external backend.
//
// One-time activation (see WAITLIST_SETUP.md):
//   1. Create a KV namespace (dashboard or `wrangler kv namespace create WAITLIST`)
//   2. Bind it to the Pages project as `WAITLIST` (Settings → Functions → KV bindings)
// Until bound, the endpoint returns 503 (never silently drops a signup).

interface Env {
  WAITLIST?: KVNamespace
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let email = ''
  try {
    const body = (await context.request.json()) as { email?: string }
    email = (body.email || '').trim().toLowerCase()
  } catch {
    return json({ detail: 'Invalid request.' }, 400)
  }

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ detail: 'Please enter a valid email address.' }, 400)
  }

  const kv = context.env.WAITLIST
  if (!kv) {
    // Fail loudly rather than pretend — a dropped signup is worse than an error.
    return json({ detail: 'The waitlist is warming up — please try again shortly.' }, 503)
  }

  try {
    const key = `email:${email}`
    const existing = await kv.get(key)
    if (!existing) {
      await kv.put(
        key,
        JSON.stringify({
          email,
          at: new Date().toISOString(),
          ref: context.request.headers.get('referer') || '',
          ua: context.request.headers.get('user-agent') || '',
          country: (context.request as any).cf?.country || '',
        }),
      )
      const count = parseInt((await kv.get('meta:count')) || '0', 10) + 1
      await kv.put('meta:count', String(count))
    }
    return json({ ok: true })
  } catch {
    return json({ detail: 'Something went wrong saving your spot. Please try again.' }, 500)
  }
}

// Friendly GET → live count (handy for a "N people waiting" badge later)
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const kv = context.env.WAITLIST
  if (!kv) return json({ count: 0 })
  const count = parseInt((await kv.get('meta:count')) || '0', 10)
  return json({ count })
}
