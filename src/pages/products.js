import React from "react";
import styles from "../styles/styles.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { formatDateDifference } from "../js/utils";


function ProductsPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>作品 | Dev8</title>

                <meta name="twitter:title" content="作品 | Dev8" />
                <meta name="twitter:description" content="My products" />
            </Head>

            <section className={styles.white}>
                <div className={styles.page_top}>
                    <div className={styles.page_top_emoji}>📦</div>
                    <h1>Products / 作品</h1>

                    <div className={styles.page_top_none}>
                        <p>まだありません</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export { ProductsPage as default };