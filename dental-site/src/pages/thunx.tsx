import styles from '../styles/Form.module.scss'
import Head from '../../components/Head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Form() {
    return (
        <div className={styles.container}>
            <Head title={'みなみ矯正歯科'}></Head>
            <Header></Header>
            <main>
                <div className={styles.thunx}>
                    <h2>送信完了</h2>
                    <hr className={styles.hr}></hr>
                    <p>この度はお問い合わせ及びご予約いただき誠にありがとうございました。<br />
                        改めて担当者よりご連絡をさせていただきます。
                    </p>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}