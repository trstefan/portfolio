import Titlebar from "./Titlebar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ExplorerTab from "./ExplorerTab";
import TabsBar from "./TabsBar";

import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Titlebar></Titlebar>
      <div className={styles.main}>
        <Sidebar />
        <ExplorerTab />
        <div style={{ width: "100%" }}>
          <TabsBar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
