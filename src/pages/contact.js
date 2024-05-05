import React, { useState } from "react";
import styles from "../styles/styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { formatDateDifference } from "../js/utils";

function Contact() {
    const [name, setName] = useState('');
    const [requirement, setRequirement] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            requirement,
            message
        };

        const mailtoLink = `mailto:dev8.db@gmail.com?subject=${encodeURIComponent(formData.requirement)}&body=${encodeURIComponent(`お名前: ${formData.name}\n\n【内容】\n${formData.message}`)}`;

        window.open(mailtoLink, '_blank');
    };

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
                    <p>入力内容に基づいてmailtoリンクが生成され、送信元アドレスとアカウント名も送信されます。知られても問題ないアカウントを使用してください。</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.contact_item}>
                            <label>お名前</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className={styles.contact_item}>
                            <label>要件</label>
                            <input type="text" value={requirement} onChange={(e) => setRequirement(e.target.value)} required />
                        </div>
                        <div className={styles.contact_item_textarea}>
                            <label>内容</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <div className={styles.submit_button}><button type="submit">送信する<Image src="/external-link.png" alt="" width={100} height={100} /></button></div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export { Contact as default };