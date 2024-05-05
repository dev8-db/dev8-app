import React from "react";
import styles from "../styles/styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { formatDateDifference } from "../js/utils";


function HomePage({posts}) {

    return (
        <div className={styles.container}>
            <Head>
                <title>ページが見つかりませんでした | Dev8</title>

                <meta name="twitter:title" content="ERROR | Dev8" />
                <meta name="twitter:description" content="ページが見つかりませんでした。" />
            </Head>

            <section className={styles.white}>
                <div className={styles.nothing}>
                    <Image src="/recent.png" alt="" width={700} height={700} />
                    <p>404 ERROR: ページが見つかりませんでした。</p>
                </div>
            </section>
        </div>
    )
}

export { HomePage as default };