import Image from 'next/image'
import SectionHero from '@/components/section-hero/hero'
import SectionAbout from '@/components/section-about/about'
import { SectionServices } from '@/components/section-services/services'

export default function Home() {
  return (
    <main className="overflow-hidden flex flex-col gap-5 lg:gap-20">
      <SectionHero/>
      <SectionAbout/>
      <SectionServices/>
    </main>
  )
}
