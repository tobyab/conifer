import Header from "../components/header"
import Button from "../components/button"
import Meta from "../components/meta"
import Link from "next/link"

function Card({ name, link, description, button, icon }) {
    return (
        <div>
            <div className="mb-8 pb-4 border-b flex justify-between">
                <div>
                    <h2 className="text-xl mb-2">{name}</h2>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>
                <Link href={link}>
                    <Button icon={icon} className="">
                        {button}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div>
            <Meta/>
            <Header/>
            <div className="place-items-center justify-center grid mt-32">
                <h1 className="text-4xl font-semibold">About me</h1>
                <div className="mt-24 max-w-xl px-8">
                    <h2 className="font-medium text-gray-600 mb-2">Who am I?</h2>
                    <p className="text-xl">
                        Nulla non sit laboris voluptate amet consectetur.
                        Lorem consequat officia eiusmod amet et aliquip dolore.
                        Non laboris reprehenderit esse mollit deserunt nostrud laborum eiusmod duis aute deserunt.
                        Veniam occaecat in ea amet enim qui nostrud commodo ut exercitation nulla reprehenderit velit consequat dolore.
                        Officia ad officia Lorem aliquip quis irure nulla consequat adipisicing mollit. Ad anim esse ad anim incididunt aute aliqua occaecat aute et velit. Lorem cillum amet exercitation in. Et dolor occaecat incididunt sint nostrud dolor.
                    </p>
                    <h2 className="font-medium text-gray-600 mb-2 mt-8">My career</h2>
                    <p className="text-xl">
                        Nulla non sit laboris voluptate amet consectetur.
                        Lorem consequat officia eiusmod amet et aliquip dolore.
                        Non laboris reprehenderit esse mollit deserunt nostrud laborum eiusmod duis aute deserunt.
                        Veniam occaecat in ea amet enim qui nostrud commodo ut exercitation nulla reprehenderit velit consequat dolore.
                        Officia ad officia Lorem aliquip quis irure nulla consequat adipisicing mollit. Ad anim esse ad anim incididunt aute aliqua occaecat aute et velit. Lorem cillum amet exercitation in. Et dolor occaecat incididunt sint nostrud dolor.
                    </p>
                    <h2 className="font-medium text-gray-600 mb-2 mt-8">Contact</h2>
                    <Card
                        name="Mail"
                        link="mailto:hi@tobyb.dev"
                        description="Shoot me an email!"
                        button="Compose"
                        icon="/icons/at-sign.svg"
                    />
                    <Card
                        name="Twitter"
                        link="https://twitter.com/developedbytoby"
                        description="Send me a DM on Twitter."
                        button="DM"
                        icon="/icons/twitter.svg"
                    />
                    <Card
                        name="Book a time"
                        link="https://cal.com/developedbytoby"
                        description="Want a longer chat? Book a time"
                        button="Book"
                        icon="/icons/calendar.svg"
                    />
                </div>
            </div>
        </div>
    )
}
