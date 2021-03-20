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
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <div className={styles.eyecache}>
          <img className={styles.bgImg} src="/img_main.jpg" alt="医院内の写真" />
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
          <img className={styles.logo} src="/logo.png" alt="みなみ矯正歯科" />
        </div>

        <div className={styles.about}>
          <div className={styles.title}>
            <img src="/item01.png" className={styles.item1} />
            <p className={styles.jpAbout}>当院について</p>
            <p className={styles.ABOUT}>ABOUT</p>
          </div>
          <p className={styles.describe}>
            「歯並びが気になる!!」<br />
            そんな時、気軽に来ていただけるクリニックでありたい。<br />
            みなみ矯正歯科では、このような思いから無料矯正診断を行っております。<br />
            皆様の口内環境を整えることを通して、心身ともに健康的な身体づくりを目指します。<br />
            子どもから大人まで、全ての年齢の方の治療が可能です。スタッフ一同お待ちしております。
          </p>
          <img src="/img_about.jpg" alt="スタッフ写真" className={styles.staffPhoto} />
        </div>

        <div className={styles.point}>
          <img src="/item02-r.png" className={styles.item2r} />
          <p className={styles.titelEn}>POINT</p>
          <img src="/ttl-deco.png" className={styles.ttlDeco} />
          <p className={styles.pointJp}>当院の３つのポイント</p>
          <div className={styles.points}>
            <div className={styles.pointItem}>
              <img src="/img_point01.png" alt="院内写真" className={styles.insidePhoto} />
              <div className={styles.smTitle}>
                <p><span className={styles.pointNumber}>point1</span>　清潔な院内</p>
                <img src="/ttl-bg.png" />
              </div>
              <p>診療室だけでなく、受付・待合・洗面スペース・お手洗いなども清潔感を大切にし、患者様に気持ちよく通っていただけるよう心がけています。</p>
            </div>
            <div className={styles.pointItem}>
              <img src="/img_point02.png" alt="治療の様子" className={styles.insidePhoto} />
              <div className={styles.smTitle}>
                <p><span className={styles.pointNumber}>point2</span>　丁寧なカウンセリング</p>
                <img src="/ttl-bg.png" />
              </div>
              <p>毎回、治療の経過の説明や相談時間を設け、疑問や悩みがある場合も相談しやすい環境を整えております。どんな小さな悩みでもお気軽にご相談ください。</p>
            </div>
            <div className={styles.pointItem}>
              <img src="/img_point03.png" alt="ユニット写真" className={styles.insidePhoto} />
              <div className={styles.smTitle}>
                <p><span className={styles.pointNumber}>point3</span>　半個室の診療室</p>
                <img src="/ttl-bg.png" />
              </div>
              <p>診察台ごとにパーテーションで区切られた半個室で、患者様のプライバシーを守ります。完全な個室は苦手という方にもおすすめです。</p>
            </div>

          </div>
        </div>
      </main >

      <footer className={styles.footer}>

      </footer>
    </div >
  )
}
