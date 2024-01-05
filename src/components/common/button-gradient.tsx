import { twMerge } from "tailwind-merge"
import Link from "next/link"

interface GradientButtonProps {
    text: string
    href?: string
}

 const GradientButton = ({text, href}: GradientButtonProps) => {

    const classDefault = "uppercase py-3 px-7 text-xs linear-gradient rounded-full font-bold"

    return (
        <button>
            <Link href={`${href}`} className={classDefault}>{text}</Link>
        </button>
    )
}
export default GradientButton