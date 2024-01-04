import MaxWidthContainer from "../common/maxWidthContainer"
import Image from "next/image"
import { RectangleRounded } from "./rectangle-rounded"


import girlVirtualGlasses from "/public/girl-virtual-glasses.svg"
import GradientButton from "../common/button-gradient"
import bigArrowRight from "/public/arrow-right-big.svg"



const SectionHero = () => {
    return (
        <section className="mt-12 md:mt-32">
            <MaxWidthContainer className="flex flex-col gap-20">
                <div className="flex flex-col gap-[2rem] items-center md:flex-row-reverse justify-between">
                    <div className="flex items-center justify-center w-full md:justify-end lg:w-[50%] lg:justify-end">
                        <Image src={girlVirtualGlasses} alt=""
                            width={320}
                            height={280}
                        />
                    </div>
                    <div className="flex flex-col  w-full items-center md:items-start  lg:w-[50%] ">
                        <h1 className="mb-9 text-center text-2xl font-bold text-white md:text-4xl md:text-left"><span className="texto-gradient">Dive</span> into the Depths <br /> of<span className="texto-gradient"> Virtual Reality</span></h1>
                        <p className="mb-14 hidden text-white text-center text-[1rem] w-[25rem] sm:block md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                        <div className="flex gap-1 items-center">
                            <GradientButton text="BUILD YOUR WORLD" href="#"></GradientButton>
                            <Image className="hidden md:block" src={bigArrowRight} alt="Arrow Right"/>
                        </div>
                    </div>
                </div>
                <RectangleRounded/>
            </MaxWidthContainer>
        </section>
    )
}

export default SectionHero