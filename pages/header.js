import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.links}>
            <p>
                <a href="/about">About</a> ∙ &nbsp;
                <a href="/projects">Projects</a> ∙ &nbsp;
                <a href="/contact">Contact</a>
            </p>
        </div>
    )
}