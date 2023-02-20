import styles from "../styles/ToolCard.module.css";
const ToolCard = ({ tool }) => {
  return (
    <div className={styles.tool__card}>
      <h5>{tool.name}</h5>
      <img src={`/${tool.icon}`} alt={tool.name} height={100} width={100} />
    </div>
  );
};

export default ToolCard;
