import { twMerge } from "tailwind-merge"

interface GradientButtonProps {
    text: string
    href?: string
    className?: string
}

 const GradientButton = ({text, href, className}: GradientButtonProps) => {

    const classDefault = "uppercase py-3 px-7 text-sm linear-gradient rounded-full font-bold"
    const classMerge = twMerge(classDefault, className)
    return (
        <div>
            <a href={href} className={classMerge}>{text}</a>
        </div>
    )
}
export default GradientButton