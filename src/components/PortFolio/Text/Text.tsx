import styles from "./text.module.css";

type TextProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  text: string;
  className?:
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl"
    | "text-10xl";
  color?: "light" | "stale" | "orange";
};

function Text({ variant, text, className, color }: TextProps) {
  const Tag = variant as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={`${styles.text} ${className ? styles[className] : ""} ${color
        ? styles[color]
        : ""}`}
    >
      {text}
    </Tag>
  );
}
export default Text;
