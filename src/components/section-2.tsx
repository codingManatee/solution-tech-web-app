import Image from "next/image"

const Section2 = () => {
    return (
        <section id='section2' className="px-5 md:px-10 lg:px-20 min-h-screen w-full items-center grid md:grid-cols-2">
            <div className="">
                <h2 className="text-6xl text-shadow-lg text-center md:text-start font-extrabold text-main-indigo">WHAT WE DO</h2>
                <p className="mt-6 text-lg text-main-indigo">
                    We design and manufacture our own <span className="text-main-turquoise font-bold">membraneless electrolyzer.</span>
                    <br />
                    By changing core materials and internal architecture, we cut productuion costs by <span className="text-2xl font-bold text-main-turquoise">{'>'}2X </span>versus typical green H2 approaches.
                </p>
                <p className="mt-6 text-lg text-main-indigo">
                    We are on track to become
                    <span className="text-main-turquoise block font-bold">Thailand’s lowest-cost green hydrogen supplier in Thailand.</span>
                </p>
            </div>
            <div className="flex items-center justify-center">
                <Image
                    src="/item-with-border.png"
                    alt="Green hydrogen electrolyzer"
                    width={350}
                    height={350}
                />
            </div>
        </section>
    )
}

export default Section2