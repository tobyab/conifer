import Link from "next/link"
import Image from "next/image"

import mail from "../public/icons/mail.svg"
import github from "../public/icons/github.svg"
import twitter from "../public/icons/twitter.svg"

function Item({ text, href }) {
    return (
        <Link href={href}>
            {text}
        </Link>
    )
}

function Social({ image, href, alt }) {
    return (
        <Link
            href={href}
            target="_blank"
        >
            <Image
                src={image}
                alt={alt}
                className="cursor-pointer"
            />
        </Link>
    )
}

export default function Header() {
    return (
        <div className="m-8 flex text-xl justify-center">
            <p className="fixed mx-8 left-0">
                Conifer template
            </p>
            <div className="fixed space-x-8 bottom-0 m-8 md:top-0">
                <Item href="/" text="Home"/>
                <Item href="/about" text="About"/>
                <Item href="/projects" text="Projects"/>
            </div>
            <div className="fixed right-0 mx-8 flex gap-4">
                <Social
                    href="mailto:hi@tobyb.dev"
                    image={mail}
                    alt="Mail icon"
                />
                <Social
                    href="https://github.com/developedbytoby"
                    image={github}
                    alt="GitHub icon"
                />
                <Social
                    href="https://twitter.com/developedbytoby"
                    image={twitter}
                    alt="Twitter icon"
                />
            </div>
        </div>
    )
}
