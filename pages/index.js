import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'

/*  Hey! Just a reminder, we have a page on the docs (Editing the default pages) to help
  you with customising your website. So, if you ever get stuck or need a hand with anything,
  the docs are your best friend! However, if you're unable to find anything to help you on the 
  docs, just open an issue on github- and we'll try and help you. Happy coding!
 */

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to conifer!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Home page" />
        <link rel="icon" href="/conifer.png" />
      </Head>
        <Header></Header>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome to conifer!
        </h1>

    <div className={styles.imageContainer}>
      <Image src="/conifer.png" alt="Evergreen tree" width="100%" height="100%" layout="responsive" objectFit="contain" />
    </div>

        <p className={styles.description}>
          Navigate to <code>pages/index.js</code> to edit this page.
        </p>
        <p className={styles.help}>Need a hand? Check out <a href="https://conifer-docs.notion.site/60bf9d62f5924a32a0a67ca7f25b124a?v=2fd3563198484fb1a94f218a8ffec31b">the docs</a>.</p>
        
        </main>
    </div>
  )
}
