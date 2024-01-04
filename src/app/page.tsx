import Image from 'next/image'
import SectionHero from '@/components/section-hero/hero'
import SectionAbout from '@/components/section-about/about'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SectionHero/>
      <SectionAbout/>
    </main>
  )
}
