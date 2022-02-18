import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Header from './header'
import title from '../styles/Title.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header></Header>

        <h1 className={title.title}>About</h1>
        <p className={title.subtitle}>This is the perfect place to write a description of yourself. Edit this page in <code>pages/about.js</code>.</p>

        <div className={styles.paragraph}>
        <p>
        Lorem labore aliquip dolore dolor voluptate aute non. 
        Cupidatat labore exercitation aliqua reprehenderit 
        mollit elit velit mollit tempor non ex ea consectetur magna.
        </p>
        <p>
        Velit commodo nulla nisi laboris ea do aute Lorem et sint qui sit quis. 
        Pariatur velit tempor officia cillum eu sunt qui ut id aliquip nulla est nulla. 
        Laborum adipisicing nisi minim veniam Lorem magna minim officia. 
        </p>
        <p>
        Pariatur commodo labore exercitation commodo minim eu excepteur velit. 
        Magna minim eu ad nostrud ex laborum amet in dolor eiusmod. Et aliqua commodo quis veniam nisi irure minim irure. 
        Magna ullamco aliquip pariatur minim nostrud consectetur veniam voluptate ex exercitation pariatur. 
        </p>
        </div>
    </div>
  )
}