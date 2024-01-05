import { CARDS_SERVICE, TEXT_SERVICES } from "@/constants"
import MaxWidthContainer from "../common/maxWidthContainer"
import Image from "next/image"
import Link from "next/link"
import { Card } from "./card"

// ASSETS





export const SectionServices = () => {
    return (
        <section>
            <MaxWidthContainer className="flex flex-col gap-6">
                <div className="w-full gap-10 md:flex justify-between ">
                    <div className="flex flex-col items-center gap-4 md:items-start">
                        <h2 className="uppercase text-white font-bold text-2xl">WHY BUILD</h2>
                        <h3 className="uppercase font-light text-white">WITH HYDRA?</h3>
                    </div>
                    <div className="hidden md:block max-w-[652px]">
                        <p className="text-xs text-white md:text-base">{TEXT_SERVICES[0].onlyDesktopText}.</p>
                    </div>
                </div>


                <div className="flex gap-3 justify-center flex-wrap items-center">
                    {CARDS_SERVICE.map((item) => <Card
                        image={item.image}
                        alt={item.alt}
                        description={item.description}
                        href={item.href}
                        title={item.title} />

                    )}
                </div>
            </MaxWidthContainer>
        </section>
    )
}