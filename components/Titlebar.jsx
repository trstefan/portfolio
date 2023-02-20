import Image from "next/image";
import styles from "../styles/Titlebar.module.css";

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image src="./vscode.svg" alt="VS Code" width={15} height={15}></Image>
      <div className={styles.itemsMenu}>
        <p>File</p>
        <p>Edit</p>
        <p>Selection</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>

      <p className={styles.title}> ST - Portfolio</p>
      <div className={styles.buttons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
