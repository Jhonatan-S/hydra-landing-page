import Image from "next/image"

// COMPONENTS
import MaxWidthContainer from "../common/maxWidthContainer"

// ASSETS
import ManVirtualGlasses from "/public/man-virtual-glasses.svg"
import { TEXT_ABOUT } from "@/constants"
import GradientButton from "../common/button-gradient"


const SectionAbout = () => {
    return (
        <section id="about">
            <MaxWidthContainer className="flex flex-col items-center md:items-start gap-16" >
            
                <div className="w-full gap-10 md:flex justify-between ">
                    <div className="flex flex-col items-center gap-4 md:items-start">
                        <h2 className="uppercase text-white font-bold text-2xl">Introduction</h2>
                        <h3 className="uppercase font-light text-white">To Hydra Vr</h3>
                    </div>
                    <div className="hidden md:block max-w-[652px]">
                        <p className="text-xs text-white md:text-base">{TEXT_ABOUT[0].onlyDesktopText}.</p>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between gap-6 md:flex-row items-center md:gap-[6.75rem]">
                    <Image src={ManVirtualGlasses} alt=""  />
                    <div className="flex flex-col items-center gap-6 max-w-[652px] md:gap-10 md:items-start">
                        <div>
                            <h2 className="hidden uppercase text-white font-bold text-2xl md:block">ABOUT</h2>
                            <h3 className="hidden uppercase font-light text-white md:block">HYDRA VR</h3>
                        </div>
                        <p className="text-xs text-white md:text-base">{TEXT_ABOUT[0].desktopAndMobileText}</p>
                        <GradientButton href="" text="LET’S GET IN TOUCH"></GradientButton>
                    </div>
                </div>
            </MaxWidthContainer>
        </section>
    )
}

export default SectionAbout