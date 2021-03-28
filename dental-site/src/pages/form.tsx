import Head from 'next/head'
import styles from '../styles/Form.module.scss'
import Footer from '../../components/layout'
import Link from 'next/link'

export default function Form() {
    return (
        <div className={styles.container}>
            <Head>
                <title>みなみ矯正歯科|お問い合わせフォーム</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"></link>
            </Head>
            <main>
                <h1>hello</h1>
            </main>
        </div>
    )
}