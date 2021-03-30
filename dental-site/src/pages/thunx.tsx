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
                <h1>thenk you</h1>
            </main>
            <Footer></Footer>
        </div>
    )
}