import React from "react";
import styles from "../styles/styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { formatDateDifference } from "../js/utils";

function Writing() {

    const sets = [
        [{
            url: "https://zenn.dev/dev8/articles/dns_http_https",
            title: "ドメインを入力してからページが表示されるまでの仕組み"
        }],
        [{
            url: "https://zenn.dev/dev8/articles/error_next_vercel",
            title: "VercelでのNext.jsデプロイ時のタグ関連エラー対処法"
        }],
        [{
            url: "https://zenn.dev/dev8/articles/typing_js_ts",
            title: "JavaScriptとTypeScriptの違い"
        }],
        [{
            url: "https://zenn.dev/dev8/articles/image_magick",
            title: "ベクター画像とラスター画像の違い"
        }],
        [{
            url: "https://zenn.dev/dev8/articles/gatsby_tutorial",
            title: "Gatsby.js 入門"
        }]
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>書物 | Dev8</title>

                <meta name="twitter:title" content="書物 | Dev8" />
                <meta name="twitter:description" content="My writing" />
            </Head>

            <section className={styles.blue}>
                <div className={styles.page_top}>
                    <div className={styles.page_top_emoji}>📕</div>
                    <h1>Writing / 書物</h1>
                </div>
            </section>

            <section className={styles.blue}>
                <div className={styles.writing}>
                {sets.map((set, setIndex) => (
                    <div key={setIndex}>
                    {set.map((item, itemIndex) => (
                        <Link key={itemIndex} href={item.url}>
                        <div className={styles.writing_item}>
                        <h1>{item.title}</h1>
                            <div className={styles.writing_src}>
                                <Image src="/logo/zenn.svg" alt="" width={25} height={25} />
                                <p>zenn.dev</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                    </div>
                ))}
                </div>
            </section>

        </div>
    )
}

export { Writing as default };