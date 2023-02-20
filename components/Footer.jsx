import styles from "../styles/Footer.module.css";
import NextjsIcon from "./icons/NextJsIcon";
import MainIcon from "./icons/MainIcon";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <a href="https://github.com/trstefan" className={styles.link}>
          {" "}
          <MainIcon className={styles.icon} />
          <p>main</p>
        </a>
      </div>
      <div className={styles.container}>
        <a href="https://nextjs.org/" className={styles.link}>
          <NextjsIcon className={styles.icon} />
          <p>Built with Next.js</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
