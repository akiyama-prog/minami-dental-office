import styles from '../styles/Form.module.scss'
import Head from '../../components/Head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Router from 'next/router';
import { useState } from 'react';

export default function Form() {
    const [contact, setContact] = useState({
        subject: '',
        name: '',
        kana: '',
        date: '',
        time: '',
        email: '',
        phone: '',
        message: '',
        replyTo: 'autumn56y@gmail.com',
        accessKey: process.env.access_key,
    });
    const [response, setResponse] = useState({
        type: '',
        message: '',
    });
    const handleChange = e =>
        setContact({ ...contact, [e.target.name]: e.target.value });
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: { 'Content-Type': 'application/json' },
            });

            const json = await res.json();

            if (json.success) {
                //成功したらサンクスページへ
                Router.push('/thunx');
            } else {
                setResponse({
                    type: 'error',
                    message: json.message,
                });
            }
        } catch (e) {
            console.log('An error occurred', e);
            setResponse({
                type: 'error',
                message: 'An error occured while submitting the form',
            });
        }
    };
    return (
        <div className={styles.container}>
            <Head title={'みなみ矯正歯科|お問い合わせフォーム'}></Head>
            <Header></Header>
            <main>
                <div className={styles.contact}>
                    <div className={styles.title}>
                        <p className={styles.titelEn}>CONTACT</p>
                        <img src="/ttl-deco.png" className={styles.ttlDeco} />
                        <p className={styles.titleJp}>お問い合わせ</p>
                    </div>
                    <p className={styles.attention}><span className={styles.required}>＊</span>は必須項目です。</p>
                    <form action="https://api.staticforms.xyz/submit" method="post" onSubmit={handleSubmit}>
                        {/* スパム対策 */}
                        <input type="text" name="honeypot" style={{ display: "none" }} />
                        <div className={styles.field}>
                            <p className={styles.label}><span className={styles.required}>＊</span>お問い合わせ内容</p>
                            <div className={styles.radioButton}>
                                <div class='form-check'>
                                    <input type="radio" name="subject" id='subject1' value="お問い合わせ" class="form-check-input" onChange={handleChange} required />
                                    <label class='form-check-label' for='subject1'>お問い合わせ</label>
                                </div>
                                <div class='form-check'>
                                    <input type="radio" name="subject" id='subject2' value="無料カウンセリング予約" class="form-check-input" onChange={handleChange} />
                                    <label class='form-check-label' for='subject2'>無料カウンセリング予約</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label}>ご希望日時</label>
                            <p className={styles.dateNtime}>
                                <input type="date" name="$date" className="form-control" onChange={handleChange} />
                                <select name="$time" className="form-control" required onChange={handleChange}>
                                    <option value="">▼時間を選択</option>
                                    <option value="10:00~10:30">10:00~10:30</option>
                                    <option value="10:30~11:00">10:30~11:00</option>
                                    <option value="11:00~11:30">11:00~11:30</option>
                                    <option value="11:30~12:00">11:30~12:00</option>
                                    <option value="12:00~12:30">12:00~12:30</option>
                                    <option value="13:30~14:00">13:30~14:00</option>
                                    <option value="14:00~14:30">14:00~14:30</option>
                                    <option value="14:30~15:00">14:30~15:00</option>
                                    <option value="15:00~15:30">15:00~15:30</option>
                                    <option value="15:30~16:00">15:30~16:00</option>
                                    <option value="16:00~16:30">16:00~16:30</option>
                                    <option value="16:30~17:00">16:30~17:00</option>
                                    <option value="17:00~17:30">17:00~17:30</option>
                                    <option value="17:30~18:00">17:30~18:00</option>
                                </select>
                            </p>
                        </div>
                        <div className={styles.field} class='form-group'>
                            <label className={styles.label} for="name"><span className={styles.required}>＊</span>氏名(漢字)</label>
                            <p>
                                <input type="text" name="name" onChange={handleChange} id='name' className="form-control" required />
                            </p>
                        </div>
                        <div className={styles.field} class='form-group'>
                            <label className={styles.label} for="kana"><span className={styles.required}>＊</span>氏名(カナ)</label>
                            <p>
                                <input type="text" name="$kana" id='kana' onChange={handleChange} className="form-control" required />
                            </p>
                        </div>
                        <div className={styles.field} class='form-group'>
                            <label className={styles.label} for="phone"><span className={styles.required}>＊</span>電話番号</label>
                            <p>
                                <input type="text" name="phone" id='phone' onChange={handleChange} className="form-control" required />
                            </p>
                        </div>
                        <div className={styles.field} class='form-group'>
                            <label className={styles.label} for="email"><span className={styles.required}>＊</span>メールアドレス</label>
                            <p>
                                <input type="text" name="email" id='email' onChange={handleChange} className={`${styles.email} form-control`} required />
                            </p>
                        </div>
                        <div className={styles.field} class='form-group'>
                            <label className={styles.label} for="email_confirm"><span className={styles.required}>＊</span>メールアドレス(確認用)</label>
                            <p>
                                <input type="text" name="email_confirm" id='email_confirm' onChange={handleChange} className={`${styles.email} form-control`} required />
                            </p>
                        </div>
                        <div className={styles.field} class='form-group'>
                            <label className={styles.label} for="message">お問い合わせ内容</label>
                            <p>
                                <textarea name="message" id='message' onChange={handleChange} className={`${styles.textarea} form-control`} />
                            </p>
                        </div>
                        <div className={styles.submitBtn}>
                            <button type="submit">入力確認</button>
                        </div>
                    </form>
                </div>

            </main>
            <Footer></Footer>
        </div >
    )
}