"use client"

import Image from "next/image"
import { RECTANGLE_HERO } from "@/constants"
import { useState } from "react"
import arrowRight from "/public/arrow-circle-right.svg"
import arrowLeft from "/public/arrow-circle-left.svg"



export const RectangleRounded = () => {
    let [translate, setTranslate] = useState(0)
    let translateString;

    const nextSlide = () => {
        if (translate < 300) {
            setTranslate(translate + 100);
            console.log("Somando")
            console.log(translate)
        }
        translateString = translate.toString()
    }

    const previousSlide = () => {
        if (translate > 0) {
            setTranslate(translate - 100);
            console.log("Subtraindo")
            console.log(translate)
        }
        translateString = translate.toString()
    }
    return (
        <>
            {/* DESKTOP */}
            <div className="hidden  w-full rounded-full radial-gradient py-11 px-10 md:flex justify-between">
                {RECTANGLE_HERO.map((item) => (
                    <div className="flex gap-4">
                        <div >
                            <Image src={item.icon} alt={item.alt}
                                width={45}
                                height={45}
                            />
                        </div>
                        <div>
                            <h2 className="lg:text-2xl text-white font-bold md:text-lg">{item.title}</h2>
                            <p className="text-sm font-normal text-white">{item.info}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* MOBILE */}

            <div className="relative overflow-hidden rounded-full radial-gradient py-5 px-8 md:hidden">
                <button className="absolute top-8 left-1" onClick={previousSlide}>
                    <Image src={arrowLeft} alt="" />
                </button>
                <div className="w-[400%] flex ">
                    {RECTANGLE_HERO.map((item, index) => (
                        <div key={index} className={`flex gap-1 w-[100%] justify-center items-center transition-all duration-200 `}>
                            <div>
                                <Image
                                    src={item.icon}
                                    alt={item.alt}
                                    width={45}
                                    height={45}
                                />
                            </div>
                            <div className="pr-12">
                                <h2 className="text-sm text-white font-bold">{item.title}</h2>
                                <p className="text-xs font-normal text-white">{item.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="absolute top-8 right-1" onClick={nextSlide}>
                    <Image src={arrowRight} alt="" />
                </button>
            </div>

        </>

    )
}


