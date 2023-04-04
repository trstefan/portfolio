import ToolCard from "@/components/ToolCard";
import styles from "../styles/Stack.module.css";

const tools = [
  {
    name: "HTML",
    icon: "html.svg",
  },
  {
    name: "CSS",
    icon: "css.svg",
  },
  {
    name: "Javascript",
    icon: "js.svg",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap.svg",
  },
  {
    name: "Tailwind",
    icon: "tailwind.svg",
  },
  {
    name: "ReactJS",
    icon: "react.svg",
  },
  {
    name: "NextJS",
    icon: "nextjs.svg",
  },
  {
    name: "Firebase",
    icon: "firebase.svg",
  },
  {
    name: "NodeJS",
    icon: "nodejs.svg",
  },
  {
    name: "ExpressJS",
    icon: "express.png",
  },
  {
    name: "MongoDB",
    icon: "mongodb.svg",
  },
  {
    name: "Git",
    icon: "git.svg",
  },
  {
    name: "Github",
    icon: "github.svg",
  },
  {
    name: "Api",
    icon: "api.svg",
  },
  {
    name: "VS Code",
    icon: "vscode.svg",
  },
  {
    name: "Postman",
    icon: "postman.svg",
  },
  {
    name: "Notion",
    icon: "notion.svg",
  },
  {
    name: "Trello",
    icon: "trello.svg",
  },
  {
    name: "Heroku",
    icon: "heroku.svg",
  },
  {
    name: "Vercel",
    icon: "vercel.svg",
  },
];
const StackPage = () => {
  return (
    <div>
      <h1 className={styles.page__title}>Stack and Tools</h1>
      <hr></hr>
      <div>
        {" "}
        <h3>My Toolbox</h3>
        <div className={styles.container}>
          {tools.map((tool) => (
            <ToolCard tool={tool} key={tool.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps() {
  return {
    props: { title: "Stack and Tools" },
  };
}

export default StackPage;
