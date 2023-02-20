import styles from "../styles/TabsBar.module.css";
import Tab from "./Tab";

const TabsBar = () => {
  return (
    <div className={styles.tabsBar}>
      <Tab icon="/react.svg" filename="home.jsx" path="/"></Tab>
      <Tab icon="/html.svg" filename="about.html" path="/about"></Tab>
      <Tab icon="/css.svg" filename="contact.css" path="/contact"></Tab>
      <Tab icon="/js.svg" filename="stack.js" path="/stack"></Tab>
      <Tab icon="/json.svg" filename="projects.json" path="/projects"></Tab>
    </div>
  );
};

export default TabsBar;
