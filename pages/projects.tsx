import Header from "../components/header"
import Image from "next/image"
import Button from "../components/button"
import Meta from "../components/meta"

function Card({ name, description, image }) {
    return (
        <div className="flex mb-8 justify-between">
            <Image
                src={image}
                alt={name}
                height={50}
                width={50}
                className="rounded-lg"
            />
            <div className="border-b flex ml-4 pb-4">
                <div>
                    <h1 className="text-xl mb-2">{name}</h1>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>
                <Button icon="/icons/arrow-up-right.svg">
                    Check it out!
                </Button>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div>
            <Meta/>
            <Header/>
            <div className="place-items-center justify-center grid mt-32">
                <h1 className="text-4xl font-semibold">Projects</h1>
                <div className="mt-24">
                    <h2 className="font-medium text-gray-600 mb-2 mt-8">Contact</h2>
                    <Card
                        name="Project one"
                        description="This is the first of three projects!"
                        image="/projects/one.svg"
                    />
                    <Card
                        name="Project two"
                        description="This is the second of three projects!"
                        image="/projects/two.svg"
                    />
                    <Card
                        name="Project three"
                        description="This is the final project!"
                        image="/projects/three.svg"
                    />
                </div>
            </div>
        </div>
    )
}

/*
<div>
            <Header/>
            <div className="place-items-center justify-center grid mt-32">
                <h1 className="text-4xl font-semibold">Projects</h1>
                <div className="mt-24 w-1/4 mx-auto">
                    <Card
                        name="Project one!"
                        description="This is the first of three projects!"
                        image="/projects/one.svg"
                    />
                    <Card
                        name="Project two!"
                        description="This is the second of three projects!"
                        image="/projects/two.svg"
                    />
                    <Card
                        name="Project three!"
                        description="This is the final project!"
                        image="/projects/three.svg"
                    />
                </div>
            </div>
        </div>
 */

/*<div className="flex mb-8">
            <Image
                src={image}
                alt={name}
                height={50}
                width={50}
                className="rounded-full border self-center"
            />
            <div className="border-b ml-4 pb-4 flex">
                <div>
                    <h2 className="text-xl mb-2">{name}</h2>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>
                <Button icon="/icons/arrow-up-right.svg">
                    Check it out
                </Button>
            </div>
        </div>*/