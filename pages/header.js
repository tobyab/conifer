import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.links}>
            <p>
                <a href="/">Home</a> ∙ &nbsp;
                <a href="/about">About</a> ∙ &nbsp;
                <a href="/contact">Contact</a>
            </p>
            <p className={styles.notice}>Psst! Try pressing cmd+K or ctrl+K on your keyboard!</p>
        </div>
    )
}