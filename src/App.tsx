import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Features from '@/components/Features'
import AgentNetwork from '@/components/AgentNetwork'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import WhyOctopus from '@/components/WhyOctopus'
import Pricing from '@/components/Pricing'
import Download from '@/components/Download'
import Careers from '@/components/Careers'
import SignUp from '@/components/SignUp'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="relative bg-octopus-void text-octopus-cream min-h-screen">
      {/* Film grain overlay */}
      <div className="grain-overlay" />

      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <AgentNetwork />
      <HowItWorks />
      <Stats />
      <WhyOctopus />
      <Pricing />
      <Download />
      <Careers />
      <SignUp />
      <Footer />
    </div>
  )
}
