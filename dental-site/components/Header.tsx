import styles from '../src/styles/Form.module.scss'
import Link from 'next/link'
import Info from '../components/Info'

export default function Header({ children }) {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.info}>
                    <Link href="/"><a className={styles.logo}><img src="/logo.png" alt="みなみ矯正歯科" /></a></Link>
                    <Info></Info>
                </div>
            </div>
        </header>
    );
}