import styles from '../src/styles/Form.module.scss'
import Link from 'next/link'

export default function Header({ children }) {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.info}>
                    <Link href="/"><a className={styles.logo}><img src="/logo.png" alt="みなみ矯正歯科" /></a></Link>
                    <div>
                        <p className={styles.tel}><i className="fas fa-phone fa-rotate-90"></i> 052-0123-4567</p>
                        <p>受付時間　10:00〜18:00　＊日・祝休業</p>
                    </div>
                </div>
            </div>
        </header>
    );
}