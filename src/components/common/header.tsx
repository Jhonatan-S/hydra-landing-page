"use client"

import Image from "next/image";
import Logo from "/public/logo.svg";
import HydraText from "/public/hydra-text.svg";
import MaxWidthContainer from "./maxWidthContainer";
import Link from "next/link";
import hamburguerButton from "/public/hamburger-button.svg"
import { useState } from "react";
import { setDefaultAutoSelectFamilyAttemptTimeout } from "net";
import GradientButton from "./button-gradient";
import { ITEM_NAV } from "@/constants";

const classOpenMenu = ""
const Header = () => {
    const [isOpen, setisOpen] = useState(false)
    const toogleMenu = () => {
        setisOpen(!isOpen)
    }
    return (
        <header className="fixed top-0 right-0 left-0 z-10">
            <MaxWidthContainer className="flex justify-between items-center">
                <div >
                    <Link href={"/"} className="flex gap-4">
                        <Image src={Logo} alt="Logo Hydra" className="md:w-[5rem]"
                            width={40}
                            height={40}
                        />
                        <Image src={HydraText} alt="Logo Hydra" className="md:w-[4rem]"
                            width={40}
                        />
                    </Link>

                </div>

                {/* MENU DESKTOP */}
                <nav className="hidden lg:flex items-center">
                    <ul className="flex gap-10">
                        {ITEM_NAV.map((item) =>
                            <Link onClick={toogleMenu} key={item.key} href={item.href} className="text-white text-xs uppercase font-bold hover:text-purple-300">
                                {item.label}
                            </Link>
                        )}
                    </ul>
                </nav>

                <div className="hidden text-[0.75rem] lg:flex items-center gap-9">
                    <Link href={""} className="uppercase border py-3 px-7 rounded-full text-white">Contact us</Link>
                    <GradientButton text="Join Hyndra" />
                </div>

                {/* MENU MOBILE */}
                <button onClick={toogleMenu} className={`lg:hidden ${isOpen ? "hidden" : "block"} `}>
                    <Image src={hamburguerButton} alt="Menu Hamburguer icon"
                        width={25}
                        height={25}
                    />
                </button>

                <div className={`lg:hidden ${isOpen
                    ? 'linear-gradient fixed top-0 left-[0] w-full h-full flex flex-col py-6 px-5 justify-center=transition-all ease-in-out duration-1000 md:py-8 rounded-[0]'
                    : "fixed top-[-100%] left-[-100%] w-full h-full flex flex-col py-6 px-5 justify-center linear-gradient transition-all ease-in-out duration-1000 rounded-[100%] md:py-8"} `}>
                    <div className="w-full flex justify-end">
                        <button onClick={toogleMenu}>
                            <span className="text-white text-4xl sm:text-5xl">X</span>
                        </button>
                    </div>
                    <nav className="my-auto">
                        <ul className="flex flex-col items-center gap-10">
                            {ITEM_NAV.map((item) => <Link onClick={toogleMenu} key={item.key} href={item.href} className="text-black uppercase font-bold text-base hover:text-purple-300">{item.label}</Link>)}
                        </ul>
                    </nav>
                </div>
            </MaxWidthContainer>

        </header>
    )
}

export default Header 