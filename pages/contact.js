import Head from 'next/head'
import Header from './header'
import title from '../styles/Title.module.css'
import styles from '../styles/Contact.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site kit</title>
        <meta name="description" content="Contact page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header></Header>

      <main className={styles.main}>
        <h1 className={title.title}>
        Contact
        </h1>

        <p className={title.subtitle}>
          Here&apos;s somewhere for your users to contact you. Edit this page in <code>pages/contact.js</code>.
        </p>

    <div className={styles.options}>
        <div className={styles.email}>
            <a href="mailto:mail.toby@icloud.com">
                <p className={styles.emailAddress}>mail.toby@icloud.com</p>
                <h1 className={styles.mail}>Email</h1>
                <p className={styles.mailDescription}>Email is the perfect way to get in contact. So, here&apos;s mine.</p>
            </a>
        </div>

        <div className={styles.discord}>
            <p className={styles.discordUsername}>Toby_#8552</p>
                <h1 className={styles.discordName}>Discord</h1>
                <p className={styles.discordDescription}>Discord is another amazing platform to contact people on.</p>
        </div>

        <div className={styles.twitter}>
            <a href="https://twitter.com/developedbytoby">
                <p className={styles.twitterUsername}>@DevelopedByToby</p>
                <h1 className={styles.twitterName}>Twitter</h1>
                <p className={styles.twitterDescription}>This is just a placeholder, my DMs aren&apos;t actually open.</p>
            </a>
        </div>
    </div>

        </main>
    </div>
  )
}
