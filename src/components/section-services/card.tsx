import Image from "next/image"
import GradientButton from "../common/button-gradient"

interface CardProps {
    image: string
    alt: string
    title: string
    description: string  
    href: string
}

// DESCKTOP
export const Card = ({image, title, description, alt, href}: CardProps) => {
    return (
        <div className="h-[32rem] rounded-[2.5rem] radial-gradient flex flex-col items-center px-5 py-10 max-w-[19rem] gap-5 justify-between">
            <div className="border-[1rem] rounded-full border-border-color overflow-hidden ">
                <Image src={image} alt={alt} width={200} height={200}/>
            </div>
            <div className="flex flex-col items-center gap-5">
                <h2 className="uppercase font-bold text-2xl text-white">{title}</h2>
                <p className="text-sm text-white">{description}</p>
                <GradientButton href={href} text="TRY IT NOW" />
            </div>
        </div>
    )
}