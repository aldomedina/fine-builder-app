import s from "./style.module.scss";
import cs from "../style.module.scss";

interface RadioInputProps {
  title: string;
}

const RadioInput = ({ title }: RadioInputProps) => {
  return (
    <div className={cs.wrapper}>
      {title && <span className={cs.inputTitle}>{title}</span>}
    </div>
  );
};

export default RadioInput;
