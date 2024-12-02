import Link from "next/link"

const Homepage = () => {
    return (
        <>
            <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                Hi, I'm Aleksey Khvalko
            </h1>
            <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
                Web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences.
            </p>

            <div className="flex mt-5 justify-between gap-x-16">
                <Link
                    href='https://cv-poland.vercel.app/'
                    className="border-2 text-wrap text-xl border-black px-4 py-2 text-black hover:opacity-70 font-semibold rounded-md shadow-md"
                >
                    VIEW MY CV
                </Link>

                <Link
                    href='https://cv-poland.vercel.app/'
                    className="border-2 text-wrap text-xl border-black px-4 py-2 text-black hover:opacity-70 font-semibold rounded-md shadow-md"
                >
                    VIEW ALL PROJECTS
                </Link>
            </div>
        </>
    )
}

export default Homepage