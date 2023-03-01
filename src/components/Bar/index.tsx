import styles from "./index.module.css";

type Props = { height: number };

export default function Bar({ height }: Props) {
  return (
    <div
      style={{
        height: `${height}px`,
      }}
      className={styles.bar}
    />
  );
}
