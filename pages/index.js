import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Homepage</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
    <div>
      <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text} style={{textAlign: 'justify'}>Hello everyone, in this website you can find some professional ninjas and thier personal details. If you want to assassinate your enemies please contact us. We will hire you the best ninja for completing your job. </p>
      <p className={styles.text}>Click the button down below to visit our ninjas</p>
      <Link href="/ninjas/">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </div>
    </>
  )
}
