"use client";

import BuilderNav from "@/components/BuilderNav";
import styles from "./page.module.scss";
import Builder from "@/3D/scenes/Builder";
import BoardPanel from "@/components/BoardPanel";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.canvas}>
        <Builder />
      </div>
      <BuilderNav />

      <div className={styles.panels}>
        <BoardPanel />
      </div>
    </main>
  );
}
