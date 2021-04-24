import styles from '../styles/Form.module.scss'
import Head from '../../components/Head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'

export default function Form() {
    const isPC: boolean = useMediaQuery({ query: '(min-width: 769px)' })
    const isMobile: boolean = useMediaQuery({ query: '(max-width: 768px)' })
    return (
        <div className={styles.container}>
            <Head title={'みなみ矯正歯科'}></Head>
            <Header></Header>
            <main>
                <div className={styles.thunx}>
                    <h2>送信完了</h2>
                    <hr className={styles.hr}></hr>
                    {isPC && (
                        <p>この度はお問い合わせ及びご予約いただき誠にありがとうございました。<br />
                            改めて担当者よりご連絡をさせていただきます。
                        </p>
                    )}
                    {isMobile && (
                        <p>この度はお問い合わせ及びご予約いただき<br />誠にありがとうございました。<br />
                            改めて担当者よりご連絡をさせていただきます。
                        </p>
                    )}
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}