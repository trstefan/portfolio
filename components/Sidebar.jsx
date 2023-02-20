import FilesIcon from "./icons/FilesIcon";
import ContactIcon from "./icons/ContactIcon";
import ProjectIcon from "./icons/ProjectIcon";
import Mail from "./icons/Mail";
import Profile from "./icons/Profile";
import Settings from "./icons/Settings";
import Link from "next/link";

import styles from "../styles/Sidebar.module.css";
import { useRouter } from "next/router";

const sidebarTopList = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: ProjectIcon,
    path: "/projects",
  },
  {
    Icon: Mail,
    path: "/contact",
  },
];

const sidebarBottomList = [
  {
    Icon: Profile,
    path: "/about",
  },
  {
    Icon: Settings,
    path: "/stack",
  },
];

const Sidebar = () => {
  const router = useRouter();
  return (
    <aside className={styles.sidebar}>
      <div className="topSidebar">
        {sidebarTopList.map(({ Icon, path }) => (
          <Link href={path} key={path} className={styles.link}>
            <div
              className={`{styles.iconsContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                className={styles.icon}
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
              ></Icon>
            </div>
          </Link>
        ))}
      </div>

      <div className="bottomSidebar">
        {sidebarBottomList.map(({ Icon, path }) => (
          <Link href={path} key={path} className={styles.link}>
            <div
              className={`{styles.iconsContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                className={styles.icon}
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
              ></Icon>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
