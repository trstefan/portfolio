import ToolCard from "@/components/ToolCard";
import styles from "../styles/Stack.module.css";

const tools = [
  {
    name: "HTML",
    icon: "HTML.svg",
  },
  {
    name: "CSS",
    icon: "CSS.svg",
  },
  {
    name: "Javascript",
    icon: "js.svg",
  },
  {
    name: "Bootstrap",
    icon: "Bootstrap.svg",
  },
  {
    name: "Tailwind",
    icon: "Tailwind.svg",
  },
  {
    name: "ReactJS",
    icon: "React.svg",
  },
  {
    name: "NextJS",
    icon: "Nextjs.svg",
  },
  {
    name: "NodeJS",
    icon: "Nodejs.svg",
  },
  {
    name: "ExpressJS",
    icon: "Express.png",
  },
  {
    name: "MongoDB",
    icon: "MongoDB.svg",
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
    icon: "VsCode.svg",
  },
  {
    name: "Postman",
    icon: "Postman.svg",
  },
  {
    name: "Notion",
    icon: "Notion.svg",
  },
  {
    name: "Trello",
    icon: "Trello.svg",
  },
  {
    name: "Heroku",
    icon: "Heroku.svg",
  },
  {
    name: "Vercel",
    icon: "Vercel.svg",
  },
  {
    name: "Markdown",
    icon: "Markdown.svg",
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
