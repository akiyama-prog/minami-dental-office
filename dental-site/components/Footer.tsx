import styles from '../src/styles/Home.module.scss'
import Link from 'next/link'

export default function Footer({ children }) {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.info}>
                    <div>
                        <address>
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
                                <i className="fas fa-phone fa-rotate-90"></i> <span className={styles.tel}>052-0123-4567</span>
                                <Link href="/form"><a className={styles.form}><i className="fas fa-envelope"></i> <span className={styles.borderBottom}>お問い合わせフォーム</span></a></Link>
                            </p>
                        </address>
                        <div className={styles.officeHours}>
                            <table>
                                <tbody>
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
                                </tbody>
                            </table>
                            <div className={styles.closedDays}>
                                <p>休診日/ 土曜午後・日・祝</p>
                                <p>※当院は完全予約制です</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6528.85001207716!2d136.91670649715837!3d35.096096920953116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037bc714c909a1%3A0x9e51a3cae5d2fd81!2z44CSNDU3LTA4MzMg5oSb55-l55yM5ZCN5Y-k5bGL5biC5Y2X5Yy65p2x5Y-I5YW144Ox55S6!5e0!3m2!1sja!2sjp!4v1616322772605!5m2!1sja!2sjp" style={{ width: "100%", height: "100%", border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <p className={styles.small}><small>©️２０２１ Minami Orthodontic Dental Clinic</small></p>
        </footer>
    )
}