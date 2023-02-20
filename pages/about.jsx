import React from "react";
import styles from "../styles/About.module.css";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="about">
      <h1 className={styles.page__title}>Some bits about me</h1>
      <hr></hr>
      <p className={styles.about__paragraphs}>
        <br />
        Hello! My name is Stefan, you can call me Stef, and I enjoy creating
        things that live on the internet. I&apos;m a junior frontend developer,
        with a small experience in backend development, looking for a new role
        in an exciting company. I focus on writing accessible HTML, using modern
        CSS practices and writing clean JavaScript. When writing JavaScript
        code, I mostly use React, but I can adapt to whatever tools are
        required. My interest in web development started back in high school
        when I had to build my first website using HTML & CSS.
      </p>
      <br />
      <p className={styles.about__paragraphs}>
        Fast-forward to today, I have a BSc in Computing Science from University
        of East Anglia and I've had the privilege of working on various exciting
        projects during my time there. My main focus these days is turning
        problems into simple and accesible designs.
      </p>

      <br />
      <p className={styles.about__paragraphs}>
        When I'm not coding, I could be doing any number of things. In no
        particular order of importance, I'm pretty into watching sports,mainly
        Formula 1 and football,and geek stuff like Star Wars and Marvel shows.
        Also, I enjoy a good walk in nature and petting my cats. And video
        games, I like those too.
      </p>
      <h1 className={styles.page__title}>Currently working on: </h1>
      <hr></hr>
      <br />
      <p className={styles.about__paragraphs}>
        Improving my skills in, and understanding of vanilla JavaScript and
        React. Also, I&apos;m trying to become a more active open source
        contributor, learn new technologies like Next.js and Tailwind CSS and
        write cleaner and more accesible lines of code.
      </p>
      <Link href="/stack">
        <button className={styles.button}> View my stack</button>
      </Link>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
