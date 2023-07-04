import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home () {
    return (
        <div className={styles.container}>
            <Head>
                <title>Order Pizza-Chicago</title>
                <meta name="description" content="Best Pizza in Chicago" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Homepage
            <Image src="/img/logo.png" alt="My App" />
        </div>
    );
}