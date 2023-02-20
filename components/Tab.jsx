import styles from "../styles/Tab.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Tab = ({ icon, filename, path }) => {
  const router = useRouter();
  return (
    <Link href={path} className={styles.link}>
      <div
        className={`${styles.tab} ${router.pathname === path && styles.active}`}
      >
        <Image src={icon} height={18} width={18} alt={filename} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
