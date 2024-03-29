import styles from '../styles/Form.module.scss'
import Head from '../../components/Head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Router from 'next/router';
import { useState } from 'react';
import { render } from 'react-dom';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

function SelectSubject(props) {
    if (props.subject === '無料カウンセリング予約') {
        return <FormDate setContact={props.setContact} contact={props.contact} />;
    }
    return null;
}

function FormDate(props) {
    const handleChange = (e) => {
        props.setContact({ ...props.contact, [e.target.name]: e.target.value });
    }
    return (
        <div className={styles.field}>
            <p className={styles.label}>ご希望日時</p>
            <p className={styles.dateNtime}>
                <input type="date" name="$date" className="form-control" onChange={handleChange} />
                <select name="time" className="form-control" required onChange={handleChange}>
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
    );
}

export default function Form() {
    //ステートフック
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
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        kana: '',
        email: '',
        email_confirm: '',
        phone: '',
        message: '',
    });
    const [response, setResponse] = useState({
        type: '',
        message: '',
    });
    //ステートの値を変更
    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
        setErrorMessage({ ...errorMessage, [e.target.name]: validator(e) });
    }
    //バリデーション
    const validation = (e) => {
        setErrorMessage({ ...errorMessage, [e.target.name]: validator(e) });
    }
    const validator = (e) => {
        switch (e.target.name) {
            case 'name':
                return nameValidation(e.target.value);
            case 'kana':
                return kanaValidation(e.target.value);
            case 'phone':
                return phoneValidation(e.target.value);
            case 'email':
                return emailValidation(e.target.value);
            case 'email_confirm':
                return emailConfirmValidation(e.target.value);
            case 'message':
                return messageValidation(e.target.value);
        }
    }
    //各バリデーション
    const nameValidation = (value) => {
        if (!value) return '＊氏名を入力してください';
        const regexName = /^[ぁ-んァ-ヶー一-龠]+$/;
        if (!regexName.test(value)) return '※正しい形式で入力してください';
        return '';
    }
    const kanaValidation = (value) => {
        if (!value) return '＊カナを入力してください';
        const regexKana = /^[ア-ン゛゜ァ-ォャ-ョー「」、]+$/;
        if (!regexKana.test(value)) return '※全角カタカナで入力してください';
        return '';
    }
    const phoneValidation = (value) => {
        if (!value) return '＊電話番号を入力してください';
        const regexPhone = /^[0-9]+$/;
        if (!regexPhone.test(value)) return '※ハイフンなしの半角数字で入力してください';
        return '';
    }
    const emailValidation = (value) => {
        if (!value) return '＊メールアドレスを入力してください';
        const regexEmail = /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/;
        if (!regexEmail.test(value)) return '※正しい形式で入力してください';
        return '';
    }
    const emailConfirmValidation = (value) => {
        if (!value) return '＊確認用メールアドレスを入力してください';
        if (contact.email !== value) return '＊メールアドレスが一致しません';
        return '';
    }
    const messageValidation = (value) => {
        if (value.length > 500) return 'お問い合わせ内容は500字以内で入力してください';
        return '';
    }

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
                                <p className='form-check'>
                                    <input type="radio" name="subject" id='subject1' value="お問い合わせ" className="form-check-input" onChange={handleChange} required />
                                    <label className='form-check-label' htmlFor='subject1'>お問い合わせ</label>
                                </p>
                                <p className='form-check'>
                                    <input type="radio" name="subject" id='subject2' value="無料カウンセリング予約" className="form-check-input" onChange={handleChange} />
                                    <label className='form-check-label' htmlFor='subject2'>無料カウンセリング予約</label>
                                </p>
                            </div>
                        </div>
                        <SelectSubject subject={contact.subject} setContact={setContact} contact={contact} />

                        <div className={`${styles.field} form-group`}>
                            <label className={styles.label} htmlFor="name"><span className={styles.required}>＊</span>氏名(漢字)</label>
                            <div className={styles.errorMessage}>
                                <input type="text" name="name" onChange={handleChange} onBlur={validation} id='name' className="form-control" /><br /><span className={styles.errorMessage}>{errorMessage.name}</span>
                            </div>
                        </div>
                        <div className={`${styles.field} form-group`}>
                            <label className={styles.label} htmlFor="kana"><span className={styles.required}>＊</span>氏名(カナ)</label>
                            <div className={styles.errorMessage}>
                                <input type="text" name="kana" id='kana' onChange={handleChange} onBlur={validation} className="form-control" required pattern="[\u30A1-\u30F6]*" /><br />{errorMessage.kana}
                            </div>
                        </div>
                        <div className={`${styles.field} form-group`}>
                            <label className={styles.label} htmlFor="phone"><span className={styles.required}>＊</span>電話番号</label>
                            <div className={styles.errorMessage}>
                                <input type="text" name="phone" id='phone' onChange={handleChange} onBlur={validation} className="form-control" placeholder="ハイフンなし" /><br />{errorMessage.phone}
                            </div>
                        </div>
                        <div className={`${styles.field} form-group`}>
                            <label className={styles.label} htmlFor="email"><span className={styles.required}>＊</span>メールアドレス</label>
                            <div className={styles.errorMessage}>
                                <input type="text" name="email" id='email' onChange={handleChange} onBlur={validation} className={`${styles.email} form-control`} required /><br />{errorMessage.email}
                            </div>
                        </div>
                        <div className={`${styles.field} form-group`}>
                            <label className={styles.label} htmlFor="email_confirm"><span className={styles.required}>＊</span>メールアドレス(確認用)</label>
                            <div className={styles.errorMessage}>
                                <input type="text" name="email_confirm" id='email_confirm' onChange={handleChange} onBlur={validation} className={`${styles.email} form-control`} required /><br />{errorMessage.email_confirm}
                            </div>
                        </div>
                        <div className={`${styles.field} form-group`}>
                            <label className={styles.label} htmlFor="message">お問い合わせ内容</label>
                            <div className={styles.errorMessage}>
                                <textarea name="message" id='message' onChange={handleChange} onBlur={validation} className={`${styles.textarea} form-control`} /><br />{errorMessage.message}
                            </div>
                        </div>
                        <div className={styles.submitBtn}>
                            <button type="submit" disabled={!contact.name || !contact.kana || !contact.email || errorMessage.email_confirm !== '' || errorMessage.message !== ''}>送信</button>
                        </div>
                    </form>
                </div>

            </main>
            <Footer></Footer>
        </div >
    )
}