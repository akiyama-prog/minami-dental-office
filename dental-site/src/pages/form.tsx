import styles from '../styles/Form.module.scss'
import Head from '../../components/Head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Form() {
    return (
        <div className={styles.container}>
            <Head title={'みなみ矯正歯科|お問い合わせフォーム'}></Head>
            <Header></Header>
            <main>
                <div className={styles.contact}>
                    <div className={styles.title}>
                        <p className={styles.titelEn}>CONTACT</p>
                        <img src="/ttl-deco.png" className={styles.ttlDeco} />
                        <p className={styles.titleJp}>お問い合わせ</p>
                    </div>
                    <p className={styles.attention}><span className={styles.required}>＊</span>は必須項目です。</p>

                </div>

            </main>
            <Footer></Footer>
        </div >
    )
}