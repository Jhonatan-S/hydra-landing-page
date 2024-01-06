import GradientButton from "@/components/common/button-gradient"

const NotFoundPage = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col gap-10">
            <h1 className="text-white">Poxa!! Infelizmente não encontramos essa página</h1>
            <GradientButton href="/" text="Voltar à página inicial"/>
        </div>
    )
}

export default NotFoundPage