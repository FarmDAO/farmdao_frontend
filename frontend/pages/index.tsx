import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Background from "../public/background.jpeg";
import { useRouter } from "next/router";

declare global {
  interface Window {
    ic: any;
  }
}

const Home: NextPage = () => {
  const [connected, setConnected] = useState(false);
  const [principalId, setPrincipalId] = useState("");

  const init = async () => {
    const nnsCanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";
    const whitelist = [nnsCanisterId];
    const host = "https://mainnet.dfinity.network";
    const isConnected = await window.ic.plug.isConnected();
    setConnected(isConnected);
    if (!isConnected) {
      try {
        const response  = await window.ic.plug.requestConnect({
          whitelist,
          host,
        });
        if (response) setConnected(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const init = async () => {
      if (!window.ic?.plug?.agent) {
        setConnected(false);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const fetchIC = async () => {
      if (connected) {
        const principal = await window.ic.plug.agent.getPrincipal();
        if (principal) {
          setPrincipalId(principal.toText());
        }
      }
    };
    fetchIC();
  }, [connected]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Farm Dao</title>
        <meta name="description" content="Farm Dao Finance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a>Welcome to Farm DAO</a>
        <div className={styles.background}>
          <Image src={Background} alt="Background Image" />
        </div>
        <div className={styles.content}>
          {connected ? (
            <div>
              <h1>{principalId}</h1>
            </div>
          ) : (
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                init();
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect Plug Wallet{" "}
            </a>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Farm DAO made with 💔 by me
        </a>
      </footer>
    </div>
  );
};

export default Home;
