import styles from '../src/styles/Home.module.scss'

export default function Header({ children }) {
    return (
        <header>
            <div className={styles.header}>
                <img className={styles.logo} src="/logo.png" alt="みなみ矯正歯科" />
                <div>
                    <p className={styles.tel}><i className="fas fa-phone fa-rotate-90"></i> 052-0123-4567</p>
                    <p>受付時間　10:00〜18:00　＊日・祝休業</p>
                </div>
            </div>
        </header>
    );
}