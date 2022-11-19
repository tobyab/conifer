import Image from "next/image"

export default function Button({ children, onClick, className, icon }: any) {
    return (
        <button
            className={`border rounded-xl text-sm p-2 self-center flex gap-2 ${className}`}
            onClick={onClick}
        >
            <Image
                src={icon}
                alt="An icon for a button"
                height="20"
                width="20"
            />
            {children}
        </button>
    )
}

export function NoIcon({ children, onClick, className }: any) {
    return (
        <button
            className={`border rounded-xl text-sm p-2 self-center ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
