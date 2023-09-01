import Image from "next/image";
import logo from "@/assets/images/fine-logo.svg";
import { TPanel, TView } from "@/types/ui";
import classNames from "classnames";
import styles from "./style.module.scss";
import useUIStore from "@/stores/useUI";

const panels: TPanel[] = ["board", "legs", "texture"];
const views: TView[] = ["builder", "render"];

const BuilderNav = () => {
  const { activePanel, setActivePanel, activeView, setActiveView } =
    useUIStore();
  return (
    <div className={styles.nav}>
      <div className={styles.subnav}>
        {panels.map((panel) => (
          <span
            key={`menu-${panel}`}
            onClick={() => setActivePanel(panel)}
            className={classNames(styles.menuItem, {
              [styles.activeItem]: activePanel === panel,
            })}
          >
            {panel}
          </span>
        ))}
      </div>
      <div className={styles.subnav}>
        {/* <Image priority src={logo} alt="fine logo" /> */}
      </div>
      <div className={styles.subnav}>
        {views.map((view) => (
          <span
            key={`menu-${view}`}
            onClick={() => setActiveView(view)}
            className={classNames(styles.menuItem, {
              [styles.activeItem]: activeView === view,
            })}
          >
            {view}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BuilderNav;
