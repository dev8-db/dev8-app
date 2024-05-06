import { useState } from "react";
import styles from "../styles/styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch("https://dev8.me/api/contact-handler", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            })
            const jsonData = await response.json()
            alert("メッセージを送信しました")
        }catch(err){
            alert("メッセージの送信に失敗しました")
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>お問い合わせ | Dev8</title>
                <meta name="twitter:title" content="お問い合わせ | Dev8" />
                <meta name="twitter:description" content="Contact" />
            </Head>

            <section className={styles.blue}>
                <div className={styles.page_top}>
                    <div className={styles.page_top_emoji}>📁</div>
                    <h1>Contact / お問い合わせ</h1>
                </div>
            </section>

            <section className={styles.blue}>
                <div className={styles.contact}>
                    <form>
                        <div className={styles.contact_item}>
                            <label>お名前</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className={styles.contact_item}>
                            <label>メールアドレス</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className={styles.contact_item_textarea}>
                            <label>内容</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <div className={styles.submit_button}><button type="submit">送信する<Image src="/envelope.png" alt="" width={100} height={100} /></button></div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export { Contact as default };