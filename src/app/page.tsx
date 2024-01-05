import Image from 'next/image'
import SectionHero from '@/components/section-hero/hero'
import SectionAbout from '@/components/section-about/about'
import { SectionServices } from '@/components/section-services/services'
import { LineSepareted } from '@/components/common/linde-separeted'

export default function Home() {
  return (
    <main className="overflow-hidden flex flex-col gap-5 lg:gap-20">
      <SectionHero/>
      <LineSepareted className='w-max-width mx-auto'/>
      <SectionAbout/>
      <LineSepareted className='w-max-width mx-auto'/>
      <SectionServices/>
      <LineSepareted className='w-max-width mx-auto'/>
    </main>
  )
}
