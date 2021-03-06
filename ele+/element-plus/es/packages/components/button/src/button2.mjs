import '../../../hooks/index.mjs';
import { buildProps, definePropType } from '../../../utils/props.mjs';
import { useSizeProp } from '../../../hooks/use-common-props/index.mjs';

const buttonType = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonSize = ["", "large", "default", "small"];
const buttonNativeType = ["button", "submit", "reset"];
const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonType,
    default: ""
  },
  icon: {
    type: definePropType([String, Object]),
    default: ""
  },
  nativeType: {
    type: String,
    values: buttonNativeType,
    default: "button"
  },
  loading: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};

export { buttonEmits, buttonNativeType, buttonProps, buttonSize, buttonType };
//# sourceMappingURL=button2.mjs.map
