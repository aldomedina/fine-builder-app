import s from "./style.module.scss";
const Panel = ({ children }: { children: React.ReactNode }) => {
  return <div className={s.panel}>{children}</div>;
};

export default Panel;
