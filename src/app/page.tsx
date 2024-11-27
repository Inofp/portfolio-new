import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-4 sm:mt-14 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Hi, I'm Aleksey Khvalko
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences.
        </p>

        <div className="flex mt-5 justify-between gap-x-16">
          <Link
            href='https://cv-poland.vercel.app/'
            className="border-2 text-wrap text-2xl border-black px-4 py-2 text-black hover:opacity-70 font-semibold rounded-md shadow-md"
          >
            VIEW MY CV
          </Link>

          <Link
            href='https://cv-poland.vercel.app/'
            className="border-2 text-wrap text-2xl border-black px-4 py-2 text-black hover:opacity-70 font-semibold rounded-md shadow-md"
          >
            VIEW ALL PROJECTS
          </Link>


        </div>


      </MaxWidthWrapper>

      {/*value proposition section*/}
      <div>
        <div className="relative isolate">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>

        </div>
      </div>

      {/* About section */}
    </>
  )
}
