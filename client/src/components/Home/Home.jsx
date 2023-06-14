import React from "react";
import styles from "./Home.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main_content}>
        <Sidebar />
        <div className={styles.main}>
          Hello
        </div>
      </div>
    </div>
  );
}

export default Home;
