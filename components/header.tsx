import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

import mail from "../public/icons/mail.svg"
import github from "../public/icons/github.svg"
import twitter from "../public/icons/twitter.svg"

function Item ({ children, href }) {
    const router = useRouter()
    const active = router.asPath === href

    return (
        <Link href={href} className={`bg-red-400 p-2 hover:bg-red-500 ${active ? "bg-white" : null}`}>
            {children}
        </Link>
    )
}

export default function Header() {
    return (
        <div className="m-8 flex text-xl justify-center">
            <p className="mx-8 fixed left-0">
                Conifer template
            </p>
            <div className="flex py-3 px-12 rounded-full bg-gray-100 space-x-10">
                <Item href="/">Home</Item>
                <Item href="/about">About</Item>
                <Item href="/projects">Projects</Item>
            </div>
            <div className="fixed right-0 mx-8 flex gap-4">
                <Link
                    href="mailto:hi@tobyb.dev"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <Image
                        src={mail}
                        alt="Mail icon"
                    />
                </Link>
                <Link
                    href="https://github.com/developedbytoby"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <Image
                        src={github}
                        alt="GitHub icon"
                    />
                </Link>
                <Link
                    href="https://twitter.com/developedbytoby"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <Image
                        src={twitter}
                        alt="Twitter icon"
                    />
                </Link>
            </div>
        </div>
    )
}