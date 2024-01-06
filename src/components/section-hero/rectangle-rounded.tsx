"use client"

import Link from "next/link"
import Image from "next/image"
import { RECTANGLE_HERO } from "@/constants"
import arrowRight from "/public/arrow-circle-right.svg"
import arrowLeft from "/public/arrow-circle-left.svg"
import locationIcon from "/public/location-icon.svg"


// THIS COMPONENT IS THE RECTANGLE CONTAINER WITH LOCATION, PHONE NUMBER AND EMAIL ADRESSS
export const RectangleRounded = () => {

    return (
        <>
            {/* DESKTOP */}
            <div className="hidden  w-full rounded-full radial-gradient py-11 px-10 lg:flex justify-between">
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
                            <Link href={item.href} className="text-sm font-normal text-white">{item.info}</Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* MOBILE */}

            <div className="flex items-center justify-center gap-2 w-full rounded-full max-w-[500px] mx-auto radial-gradient py-5 px-8 relative lg:hidden">
                <button className="flex items-center">
                    <Image src={arrowLeft} alt="Arrow Left " className="absolute t-5 left-1" />
                </button>
                <div >
                    <Image src={locationIcon} alt={"Location Icon"}
                        width={45}
                        height={45}
                    />
                </div>
                <div>
                    <Link href={"#"} className="text-sm font-normal text-white">Union St, Seattle, WA 98101, United States</Link>
                </div>
                <button className="flex items-center">
                    <Image src={arrowRight} alt="Arrow Left " className="absolute t-5 right-1" />
                </button>
            </div>
        </>

    )
}


