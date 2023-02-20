import styles from "../styles/ExplorerTab.module.css";
import ArrowRight from "./icons/ArrowRight";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const filesItems = [
  {
    name: "home.jsx",
    icon: "react.svg",
    path: "/",
  },
  {
    name: "about.html",
    icon: "html.svg",
    path: "/about",
  },
  {
    name: "contact.css",
    icon: "css.svg",
    path: "/contact",
  },
  {
    name: "stack.js",
    icon: "js.svg",
    path: "/stack",
  },
  {
    name: "projects.json",
    icon: "json.svg",
    path: "/projects",
  },
];

const reactItems = [
  {
    name: "routing.js",
    icon: "js.svg",
  },
  {
    name: "fetching api.js",
    icon: "js.svg",
  },
  {
    name: "reusable components.js",
    icon: "js.svg",
  },
];
const nextItems = [
  {
    name: "routing.js",
    icon: "js.svg",
  },
  {
    name: "fetching api.js",
    icon: "js.svg",
  },
  {
    name: "reusable components.js",
    icon: "js.svg",
  },
  {
    name: "SSR.js",
    icon: "js.svg",
  },
];

const htmlItems = [
  {
    name: "responsive website.js",
    icon: "js.svg",
  },
  {
    name: "grid flexbox.js",
    icon: "js.svg",
  },
];

const freeItems = [
  {
    name: "learing new things.js",
    icon: "js.svg",
  },
  {
    name: "solving sudoku.js",
    icon: "js.svg",
  },
  {
    name: "playing video games.js",
    icon: "js.svg",
  },
  {
    name: "sports.js",
    icon: "js.svg",
  },
];

const ExplorerTab = () => {
  const [isPortfolioOpen, setIsPortofolioOpen] = useState(true);
  const [isInterestsOpen, setIsInterestsOpen] = useState(false);
  const [isReactOpen, setIsReactOpen] = useState(false);
  const [isNextOpen, setIsNextOpen] = useState(false);
  const [isHTMLOpen, setIsHTMLOpen] = useState(false);
  const [isFreeOpen, setIsFreeOpen] = useState(false);
  return (
    <div className={styles.explorerTab}>
      <p className={styles.title}>Explorer</p>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="portfolio-checkbox"
        onChange={() => setIsPortofolioOpen(!isPortfolioOpen)}
      />
      <label htmlFor="portfolio-checkbox" className={styles.portfolioTab}>
        <ArrowRight
          style={isPortfolioOpen ? { transform: "rotate(90deg)" } : {}}
        />
        Portfolio
      </label>
      <div
        className={styles.filesTab}
        style={isPortfolioOpen ? { display: "block" } : { display: "none" }}
      >
        {filesItems.map((item) => (
          <Link href={item.path} key={item.name} className={styles.link}>
            <div className={styles.file}>
              <Image
                src={`/${item.icon}`}
                alt={item.name}
                height={18}
                width={18}
              ></Image>
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="interests-checkbox"
          onChange={() => setIsInterestsOpen(!isInterestsOpen)}
        />
        <label htmlFor="interests-checkbox" className={styles.portfolioTab}>
          <ArrowRight
            style={isInterestsOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Interests
        </label>
        <div
          className={styles.filesTab__interests}
          style={isInterestsOpen ? { display: "block" } : { display: "none" }}
        >
          <input
            type="checkbox"
            className={styles.checkbox}
            id="react-checkbox"
            onChange={() => setIsReactOpen(!isReactOpen)}
          />
          <label htmlFor="react-checkbox" className={styles.portfolioTab}>
            <ArrowRight
              style={isReactOpen ? { transform: "rotate(90deg)" } : {}}
            />
            React
          </label>
          <div
            className={styles.filesTab__react}
            style={isReactOpen ? { display: "block" } : { display: "none" }}
          >
            {}
            {reactItems.map((item) => (
              <div className={styles.file__react} key={item.name}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                ></Image>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.filesTab__interests}
          style={isInterestsOpen ? { display: "block" } : { display: "none" }}
        >
          <input
            type="checkbox"
            className={styles.checkbox}
            id="next-checkbox"
            onChange={() => setIsNextOpen(!isNextOpen)}
          />
          <label htmlFor="next-checkbox" className={styles.portfolioTab}>
            <ArrowRight
              style={isNextOpen ? { transform: "rotate(90deg)" } : {}}
            />
            Next
          </label>
          <div
            className={styles.filesTab__react}
            style={isNextOpen ? { display: "block" } : { display: "none" }}
          >
            {}
            {nextItems.map((item) => (
              <div className={styles.file__react} key={item.name}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                ></Image>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.filesTab__interests}
          style={isInterestsOpen ? { display: "block" } : { display: "none" }}
        >
          <input
            type="checkbox"
            className={styles.checkbox}
            id="html-checkbox"
            onChange={() => setIsHTMLOpen(!isHTMLOpen)}
          />
          <label htmlFor="html-checkbox" className={styles.portfolioTab}>
            <ArrowRight
              style={isHTMLOpen ? { transform: "rotate(90deg)" } : {}}
            />
            HTML&CSS
          </label>
          <div
            className={styles.filesTab__react}
            style={isHTMLOpen ? { display: "block" } : { display: "none" }}
          >
            {}
            {htmlItems.map((item) => (
              <div className={styles.file__react} key={item.name}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                ></Image>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.filesTab__interests}
          style={isInterestsOpen ? { display: "block" } : { display: "none" }}
        >
          <input
            type="checkbox"
            className={styles.checkbox}
            id="free-checkbox"
            onChange={() => setIsFreeOpen(!isFreeOpen)}
          />
          <label htmlFor="free-checkbox" className={styles.portfolioTab}>
            <ArrowRight
              style={isFreeOpen ? { transform: "rotate(90deg)" } : {}}
            />
            Free time
          </label>
          <div
            className={styles.filesTab__react}
            style={isFreeOpen ? { display: "block" } : { display: "none" }}
          >
            {freeItems.map((item) => (
              <div className={styles.file__react} key={item.name}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                ></Image>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorerTab;
