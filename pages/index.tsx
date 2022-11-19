import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/header"
import Meta from "../components/meta"

import hero from "../public/hero.png"

const Home: NextPage = () => {
  return (
      <div>
          <Meta/>
          <Header/>
          <div className="mt-64 place-items-center justify-center md:grid mx-4">
              <Head>
                <title>Conifer</title>
                <meta name="description" content="A personal website generated from Conifer!" />
              </Head>
              <div className="md:flex gap-x-20">
                <div className="self-center mb-8">
                    <h1 className="text-4xl font-semibold">Welcome to Conifer!</h1>
                    <p className="text-xl mt-4">Navigate to <code className="p-1 bg-gray-200 rounded-lg">pages/index.tsx</code> to start hackin&apos;</p>
                </div>
                <Image
                    src={hero}
                    alt="Conifer"
                    width={500}
                    height={500}
                    className="rounded-xl"
                />
            </div>
        </div>
      </div>
  )
}

export default Home
