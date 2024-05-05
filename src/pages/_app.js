import React from "react";
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import styles from "../styles/styles.module.css";
import { useEffect, useState } from 'react';
import { useRef } from "react";

const posts = [
  { date: new Date("2024-04-30T19:35:00"), title: "人生初のUSJに行ってきました。" },
  { date: new Date("2024-04-27T00:00:00"), title: "サイトのデザインを大幅に変更しました。" },
  { date: new Date("2024-04-21T19:50:00"), title: "サイト開設" }
];

export default function App({ Component, pageProps }) {

  const [isVisible, setIsVisible] = useState(false);

  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setIsVisible(true);

    const toggle = toggleRef.current;
    const menu = menuRef.current;
    function toggleMenuShadow() {
      if (toggle.checked) {
        menu.style.boxShadow = '0px 0px 0px 800px rgba(0, 0, 0, .75)';
      } else {
        menu.style.boxShadow = 'none';
      }
    }
    toggle.addEventListener('change', toggleMenuShadow);
    return () => {
      toggle.removeEventListener('change', toggleMenuShadow);
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Head>
        <title>Dev8</title>
        <meta name="description" content="Dev8's page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/main_logo.png" />
        <link rel="apple-touch-icon" href="/main_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://dev8.vercel.app/twitter_cards.png" />
      </Head>

        <header className={styles.header}>
          <div className={styles.pc_only}>
            <Link href="/"><Image src="/ribbon_top.png" alt="" width={100} height={100} /></Link>
              <ul>
                <li><Link href="/products">作品</Link></li>
                <li><Link href="/writing">書物</Link></li>
                <li><Link href="/contact">お問い合わせ</Link></li>
              </ul>
          </div>
          <div className={styles.mobile_only}>
            <input type="checkbox" id="toggle" ref={toggleRef} className={styles.toggle} />
            <label htmlFor="toggle" className={styles.hamburger}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </label>
            <div className={styles.menu} ref={menuRef}>
              <ul>
                <li><Link href="/">ホーム</Link></li>
                <li><Link href="/products">作品</Link></li>
                <li><Link href="/writing">書物</Link></li>
                <li><Link href="/contact">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
        </header>
      <Component {...pageProps} posts={posts} />
      <footer className={styles.white}>
        <div className={styles.footer}>
          <Image src="/main_logo.png" alt="" width={100} height={100} />
          <div className={styles.footer_list}>
            <ul>
              <li><Link href="/">ホーム</Link></li>
              <li><Link href="/products">作品</Link></li>
              <li><Link href="/writing">書物</Link></li>
              <li><Link href="/contact">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}