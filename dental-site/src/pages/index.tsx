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
                <p><span className={styles.pointNumber}>point1</span> 清潔な院内</p>
                <img src="/ttl-bg.png" className={styles.ttlBg1} />
              </div>
              <p className={styles.describe}>診療室だけでなく、受付・待合・洗面スペース・お手洗いなども清潔感を大切にし、患者様に気持ちよく通っていただけるよう心がけています。</p>
            </div>
            <div className={styles.pointItem}>
              <img src="/img_point02.png" alt="治療の様子" className={styles.insidePhoto} />
              <div className={styles.smTitle}>
                <p><span className={styles.pointNumber}>point2</span> 丁寧なカウンセリング</p>
                <img src="/ttl-bg.png" className={styles.ttlBg2} />
              </div>
              <p className={styles.describe}>毎回、治療の経過の説明や相談時間を設け、疑問や悩みがある場合も相談しやすい環境を整えております。どんな小さな悩みでもお気軽にご相談ください。</p>
            </div>
            <div className={styles.pointItem}>
              <img src="/img_point03.png" alt="ユニット写真" className={styles.insidePhoto} />
              <div className={styles.smTitle}>
                <p><span className={styles.pointNumber}>point3</span> 半個室の診療室</p>
                <img src="/ttl-bg.png" className={styles.ttlBg3} />
              </div>
              <p className={styles.describe}>診察台ごとにパーテーションで区切られた半個室で、患者様のプライバシーを守ります。完全な個室は苦手という方にもおすすめです。</p>
            </div>
          </div>
          <img src="/item02-l.png" className={styles.item2l} />
        </div>

        <div className={styles.type}>

        </div>
      </main >

      <footer>
        <div className={styles.footer}>
          <div className={styles.info}>
            <div>
              <p className={styles.address}>
                〒457-0833<br />
                愛知県名古屋市南区東又兵ヱ町8-21<br />
              </p>
              <div className={styles.station}>
                <img src="/ico_train.png" alt="電車マーク" />
                <p>JR東海道本線「笠寺駅」徒歩5分</p>
              </div>
              <p className={styles.formInfo}>
                ご予約・お問い合わせ<br />
                <i className="fas fa-phone fa-rotate-90"></i> <span className={styles.tel}>052-0123-4567</span>　<a href="" className={styles.form}><i className="fas fa-envelope"></i> <span className={styles.borderBottom}>お問い合わせフォーム</span></a>
              </p>
              <div className={styles.officeHours}>
                <table>
                  <tr>
                    <td className={styles.firstCell}>診察時間</td>
                    <td>月</td>
                    <td>火</td>
                    <td>水</td>
                    <td>木</td>
                    <td>金</td>
                    <td className={styles.borderRNone}>土</td>
                  </tr>
                  <tr>
                    <td className={styles.firstCell}>10:00 - 12:30</td>
                    <td>●</td>
                    <td>●</td>
                    <td>●</td>
                    <td>●</td>
                    <td>●</td>
                    <td className={styles.borderRNone}>●</td>
                  </tr>
                  <tr>
                    <td className={`${styles.borderBNone} ${styles.firstCell}`}>13:30 - 18:00</td>
                    <td className={styles.borderBNone}>●</td>
                    <td className={styles.borderBNone}>●</td>
                    <td className={styles.borderBNone}>●</td>
                    <td className={styles.borderBNone}>●</td>
                    <td className={styles.borderBNone}>●</td>
                    <td className={`${styles.borderBNone} ${styles.borderRNone}`}>●</td>
                  </tr>
                </table>
                <div className={styles.closedDays}>
                  <p>休診日/ 土曜午後・日・祝</p>
                  <p>※当院は完全予約制です</p>
                </div>
              </div>
            </div>
            <div className={styles.map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6528.85001207716!2d136.91670649715837!3d35.096096920953116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037bc714c909a1%3A0x9e51a3cae5d2fd81!2z44CSNDU3LTA4MzMg5oSb55-l55yM5ZCN5Y-k5bGL5biC5Y2X5Yy65p2x5Y-I5YW144Ox55S6!5e0!3m2!1sja!2sjp!4v1616322772605!5m2!1sja!2sjp" style={{ width: "100%", height: "100%", border: 0 }} allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}