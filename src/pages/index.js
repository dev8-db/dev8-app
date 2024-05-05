import React from "react";
import styles from "../styles/styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { formatDateDifference } from "../js/utils";
import { useEffect, useState } from 'react';
import { useRef } from "react";

function HomePage({posts}) {
    const [isDogImage, setIsDogImage] = useState(true);

    const handleImageClick = () => {
        setIsDogImage(!isDogImage);
    };

    return (
        <div className={styles.container}>
            <Head>
                <meta name="twitter:title" content="Dev8" />
                <meta name="twitter:description" content="About me" />
            </Head>

            <section className={styles.white}>
            <div className={styles.info} onClick={handleImageClick}>
                {isDogImage ? (
                    <Image src="/dog.svg" alt="" width={125} height={125} />
                ) : (
                    <Image src="/tongue.svg" alt="" width={125} height={125} />
                )}
                <div>
                    <h1>dev8</h1>
                    <p>開発が大好きです。Zennで記事を執筆しています。</p>
                </div>
            </div>

                <Link href="https://zenn.dev/dev8/articles/dns_http_https">
                <div className={styles.zenn}>
                    <Image src="/zenn.svg" alt="" width={100} height={100} />
                    <div className={styles.zenn_content}>
                        <p>Zennの最新記事</p>
                        <h1>ドメインを入力してからページが表示されるまでの仕組み</h1>
                    </div>
                </div>
                </Link>

                <div className={styles.share}>
                <div className={styles.share_list}>
                    <div className={styles.share_block}><Link href="https://twitter.com/dev8_db" target="_blank"><Image src="/contact/twitter.png" alt="dev8" width={50} height={50} /></Link></div>
                    <div className={styles.share_block}><Link href="https://github.com/dev8-db" target="_blank"><Image src="/contact/github.png" alt="dev8" width={50} height={50} /></Link></div>
                </div>
                </div>
            </section>

            <section className={styles.blue}>
                <div className={styles.flex}>
                <div className={styles.timeline}>
                    <h1>Timeline</h1>
                    <div className={styles.timeline_list}>
                    {posts.slice(0, 2).map((post, index) => (
                        <div key={index} className={styles.timeline_item}>
                            <div className={styles.date}>{formatDateDifference(post.date)}</div>
                            <div className={styles.title}>{post.title}</div>
                        </div>
                    ))}
                    </div>
                    <p className={styles.link_to}><Link href="/timeline">もっと見る</Link></p>
                </div>

                <div className={styles.timeline}>
                    <h1>Recent</h1>
                    <div className={styles.recent}>
                        <Image src="/recent.png" alt="" width={260} height={195} />
                        <p>新しく学んだ因数分解が楽しいです。だが開発は難しい</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export { HomePage as default };