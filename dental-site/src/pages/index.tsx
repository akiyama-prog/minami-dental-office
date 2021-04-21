
import styles from '../styles/Home.module.scss'
import Footer from '../../components/Footer'
import Head from '../../components/Head'
import Info from '../../components/Info'
import Link from 'next/link'
import { info } from 'console'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isPC: boolean = useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile: boolean = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <div className={styles.container}>
      <Head title={'みなみ矯正歯科'}></Head>
      <main>
        {isMobile && (
          <div className={styles.spHeader}>
            <img className={styles.logo} src="/logo.png" alt="みなみ矯正歯科" />
            <div className={styles.infoItem}>
              <a className={styles.telLink} href="tel:05201234567"><i className="fas fa-phone fa-rotate-90"></i></a>
              <Link href="/form"><a className={styles.formLink}><i className="fas fa-envelope"></i></a></Link>
            </div>
          </div>
        )}

        <div className={styles.eyecache}>
          {isPC && (
            <div>
              <div className={styles.bgImg}>
                <img src="/img_main.jpg" alt="医院内の写真" />
              </div>
              <div className={styles.officeInfo}>
                <Info></Info>
                <Link href="/form"><a className={styles.formLink}><i className="fas fa-envelope"></i>　お問い合わせ</a></Link>
              </div>
              <p className={styles.explaine}>
                治療期間も快適にお過ごしいただきたいから<br />
                患者様ひとりひとりに合った<br />
                最適な治療法をご提案
              </p>
              <img className={styles.logo} src="/logo.png" alt="みなみ矯正歯科" />
            </div>
          )}
          {isMobile && (
            <p className={styles.explaine}>
              治療期間も快適に<br />お過ごしいただきたいから<br />
            患者様ひとりひとりに合った<br />
            最適な治療法をご提案
            </p>
          )}
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
          <p className={styles.titleJp}>当院の３つのポイント</p>
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
          <p className={styles.titelEn}>TYPE</p>
          <img src="/ttl-deco.png" className={styles.ttlDeco} />
          <p className={styles.titleJp}>矯正の種類</p>
          <div className={styles.types}>
            <div className={styles.typeItem}>
              <img src="/ico_type01.png" alt="表面矯正" />
              <p>表面矯正</p>
            </div>
            <div className={styles.typeItem}>
              <img src="/ico_type02.png" alt="裏側矯正" />
              <p>裏側矯正</p>
            </div>
            <div className={styles.typeItem}>
              <img src="/ico_type03.png" alt="小児矯正" />
              <p>小児矯正</p>
            </div>
            <div>
              <img src="/ico_type04.png" alt="マウスピース矯正" />
              <p>マウスピース矯正</p>
            </div>
          </div>
          <div className={styles.forBeginner}>
            <img src="/bg_fukidashi.png" alt="吹き出し" className={styles.bgFukidashi} />
            <div className={styles.contents}>
              <p className={styles.title}><img src="ico_beginner.png" alt="初心者マーク" /> 初めての方へ<br />
                <span className={styles.titleEn}>for beginner</span></p>
              <p className={styles.counseling}><img src="/item_beginner-l.png" /> 初めての方はまず無料カウンセリングから！<img src="/item_beginner-r.png" /></p>
              <div className={styles.worry}>
                <img src="/item_arrow.png" /><p>矯正したいけれど迷ってる…。話だけ聞きたい！</p>
              </div>
              <div className={styles.worry}>
                <img src="/item_arrow.png" /><p>費用がどれくらいかかるか分からなくて不安…。</p>
              </div>
              <div className={styles.worry}>
                <img src="/item_arrow.png" /><p>どんな治療になる？どれくらい痛い？</p><p className={styles.
                  etc}>etc…</p>
              </div>
              <p>歯列矯正は治療法に納得してから始めるのがベストです。何でもお気軽にご相談ください！</p>
            </div>
          </div>
        </div>
      </main >
      <Footer></Footer>
    </div >
  )
}