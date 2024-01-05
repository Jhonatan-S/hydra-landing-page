import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";


interface MaxWidthContainerProps {
    children: ReactNode
    className?: string
}

 const MaxWidthContainer = ({ className, children }: MaxWidthContainerProps) => {

    const defaultClass = "mx-auto w-full py-6 px-4 w-full md:max-w-max-width"
    const classMerge = twMerge(defaultClass, className)

    return (
        <div className={classMerge}>
            {children}
            
        </div>
    )
}

export default MaxWidthContainer