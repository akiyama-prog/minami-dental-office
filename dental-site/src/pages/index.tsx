import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>みなみ矯正歯科</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
      </Head>
      <main>
        <div className={styles.eyecache}>
          <img src="/img_main.jpg" alt="医院内の写真" />
          <div className={styles.officeInfo}>
            <div>
              <p className={styles.tel}><i className="fas fa-phone fa-rotate-90"></i> 052-0123-4567</p>
              <p>受付時間　10:00〜18:00　＊日・祝休業</p>
            </div>
            <a href="" className={styles.form}><i className="fas fa-envelope"></i>　お問い合わせ</a>
          </div>
          <p className={styles.explaine}>
            治療期間も快適にお過ごしいただきたいから<br />
            患者様ひとりひとりに合った<br />
            最適な治療法をご提案
          </p>
        </div>
      </main >

      <footer className={styles.footer}>

      </footer>
    </div >
  )
}
