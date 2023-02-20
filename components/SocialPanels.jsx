import styles from "../styles/SocialPanels.module.css";

const SocialPanels = () => {
  const socialItems = [
    {
      social: "email",
      link: "stefantraciu20@gmail.com",
      href: "mailto:stefantraciu20@gmail.com",
    },
    {
      social: "github",
      link: "trstefan",
      href: "https://github.com/trstefan",
    },
    {
      social: "codepen",
      link: "trstefan",
      href: "https://codepen.io/trstefan",
    },
  ];

  return (
    <div className={styles.code__container}>
      <p className={styles.line__code}>
        <span className={styles.span}>.socials &#123; </span>
      </p>
      {socialItems.map((item, index) => (
        <p key={index} className={styles.line__code}>
          {" "}
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href}>
            <span className={styles.span__value}>{item.link}</span>
          </a>
          ;
        </p>
      ))}
      <p className={styles.line__code}>
        <span className={styles.span}>&#125;</span>
      </p>
    </div>
  );
};

export default SocialPanels;
