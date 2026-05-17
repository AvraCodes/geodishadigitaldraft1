import { Navigation } from '@/components/sections/navigation'
import { Hero } from '@/components/sections/hero'
import { TheGap } from '@/components/sections/the-gap'
import { CoreBelief } from '@/components/sections/core-belief'
import { IntelligenceModel } from '@/components/sections/intelligence-model'
import { Services } from '@/components/sections/services'
import { Nurturing } from '@/components/sections/nurturing'
import { WhoWeWork } from '@/components/sections/who-we-work'
import { Credibility } from '@/components/sections/credibility'
import { Engagement } from '@/components/sections/engagement'
import { FinalCTA } from '@/components/sections/final-cta'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <Hero />
      
      <TheGap />
      
      <CoreBelief />
      
      <IntelligenceModel />
      
      <Services />
      
      <Nurturing />
      
      <WhoWeWork />
      
      <Credibility />
      
      <Engagement />
      
      <FinalCTA />
      
      <Footer />
    </main>
  )
}
