import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <div className={styles.links}>
            <p>
                <Link href="/">Home</Link> ∙ &nbsp;
                <Link href="/about">About</Link> ∙ &nbsp;
                <Link href="/contact">Contact</Link>
            </p>
            <p className={styles.notice}>Psst! Try pressing cmd+K or ctrl+K on your keyboard!</p>
        </div>
    )
}