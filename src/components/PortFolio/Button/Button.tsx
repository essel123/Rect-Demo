import styles from "./button.module.css";

interface ButtonProps {
  className?: "filled" | "outlined";
  children?: React.ReactNode;
  onClick ?: ()=>void;
}

function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}  className={`${styles.btn} ${className ? styles[className] : ""}`}>
      {children}
    </button>
  );
}

export default Button;
