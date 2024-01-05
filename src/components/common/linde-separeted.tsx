import { twMerge } from "tailwind-merge"




interface LineSeparetedProps {
    className?: string
}

export const LineSepareted = ({className}: LineSeparetedProps) => {

    const classDefault = "w-5 bg-zinc-600 h-[1px]"
    const classMerge = twMerge(classDefault, className)

    return (
        <div className={classMerge}></div>
    )
}