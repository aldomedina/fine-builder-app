import classNames from "classnames";
import { Range } from "react-range";
import { TIcon } from "@/components/Icon/Icon.types";
import Icon from "@/components/Icon";
import { TRangeProps } from "@/types/ui";
import s from "./style.module.scss";
import cs from "../style.module.scss";

interface RangeInputProps extends TRangeProps {
  title?: string;
  icons?: [TIcon, TIcon];
}

const RangeInput = ({ title, icons, ...props }: RangeInputProps) => {
  return (
    <div className={cs.wrapper}>
      {title && <span className={cs.inputTitle}>{title}</span>}
      <div className={s.input}>
        {icons && icons[0] && (
          <div
            className={s.iconWrapper}
            onClick={() => props.onChange([props.min])}
          >
            <Icon size="md" icon={icons[0]} />
          </div>
        )}
        <Range
          {...props}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className={classNames(s.rangeWrapper)}
            >
              <div ref={props.ref} className={s.rangeSlider}>
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div {...props} className={s.thumb} />
          )}
        />
        {icons && icons[1] && (
          <div
            className={s.iconWrapper}
            onClick={() => props.onChange([props.max])}
          >
            <Icon size="md" icon={icons[1]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RangeInput;
