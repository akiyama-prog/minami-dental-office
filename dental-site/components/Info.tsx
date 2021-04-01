import styles from '../src/styles/Home.module.scss'

export default function Info() {
    return (
        <div>
            <p className={styles.tel}><i className="fas fa-phone fa-rotate-90"></i> 052-0123-4567</p>
            <p>受付時間　10:00〜18:00　＊日・祝休業</p>
        </div>
    )
}