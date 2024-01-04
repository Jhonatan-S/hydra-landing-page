import { twMerge } from "tailwind-merge"

interface GradientButtonProps {
    text: string
    href?: string
}

 const GradientButton = ({text, href}: GradientButtonProps) => {

    const classDefault = "uppercase py-3 px-7 text-sm linear-gradient rounded-full font-bold"

    return (
        <div>
            <a href={href} className={classDefault}>{text}</a>
        </div>
    )
}
export default GradientButton