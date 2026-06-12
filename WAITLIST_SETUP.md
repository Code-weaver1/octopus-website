# Waitlist — one-time activation (Cloudflare KV)

The waitlist form posts to a same-origin Cloudflare Pages Function
(`functions/api/waitlist.ts`) that stores signups in a **KV namespace** bound as
`WAITLIST`. Until that binding exists, the endpoint returns **503** on purpose —
so a signup is never silently dropped. Do this once:

## 1. Create the KV namespace

Dashboard: **Workers & Pages → KV → Create namespace** → name it `octopus_waitlist`.

Or CLI:
```bash
npx wrangler kv namespace create WAITLIST
```

## 2. Bind it to the Pages project

Dashboard: **Workers & Pages → (your Pages project: `octopus-web`) → Settings →
Functions → KV namespace bindings → Add binding**
- **Variable name:** `WAITLIST`   ← must be exactly this
- **KV namespace:** the one you just created
- Add it for **Production** (and Preview if you want).

Then **redeploy** (any push triggers it, or use the "Retry deployment" button).

## 3. Verify

```bash
curl -X POST https://theoctopusapp.com/api/waitlist \
  -H 'content-type: application/json' -d '{"email":"you@example.com"}'
# → {"ok":true}

curl https://theoctopusapp.com/api/waitlist
# → {"count": 1}
```

## Reading the signups

Dashboard → KV → your namespace → entries are keyed `email:<address>` with a JSON
value (`email`, `at`, `ref`, `country`). The running total is in `meta:count`.

Export with the CLI:
```bash
npx wrangler kv key list --binding WAITLIST | jq -r '.[].name' | grep '^email:'
```

> When you later move to a real ESP (email service) or the Octopus Cloud backend,
> only `functions/api/waitlist.ts` changes — the frontend form stays as-is.
