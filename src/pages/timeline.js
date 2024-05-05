import React from "react";
import styles from "../styles/styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { formatDateDifference } from "../js/utils";


function Timeline({posts}) {

    return (
        <div className={styles.container}>
            <Head>
                <title>タイムライン | Dev8</title>

                <meta name="twitter:title" content="タイムライン | Dev8" />
                <meta name="twitter:description" content="My Timeline" />
            </Head>

            <section className={styles.blue}>
                <div className={styles.page_top}>
                    <div className={styles.page_top_emoji}>🧀</div>
                    <h1>Timeline / タイムライン</h1>
                </div>
            </section>

            <section className={styles.blue}>
                <div className={styles.timeline}>
                    <div className={styles.timeline_list}>
                    {posts && posts.map((post, index) => (
                        <div key={index} className={styles.timeline_item}>
                            <div className={styles.date}>{formatDateDifference(post.date)}</div>
                            <div className={styles.title}>{post.title}</div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export { Timeline as default };