import styles from '../src/styles/Form.module.scss'
import Link from 'next/link'
import Info from '../components/Info'

export default function Header({ children }) {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.info}>
                    <Link href="/"><a className={styles.logo}><img src="/logo.png" alt="みなみ矯正歯科" /></a></Link>
                    <div className={styles.isPC}>
                        <Info></Info>
                    </div>
                    <div className={styles.infoItem}>
                        <a className={styles.telLink} href="tel:05201234567"><i className="fas fa-phone fa-rotate-90"></i></a>
                    </div>
                </div>
            </div>
        </header>
    );
}