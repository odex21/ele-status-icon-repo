import { StarFilled, Star } from '@element-plus/icons-vue';
import { UPDATE_MODEL_EVENT } from '../../../utils/constants.mjs';
import { buildProps, definePropType, mutable } from '../../../utils/props.mjs';

const rateProps = buildProps({
  modelValue: {
    type: Number,
    default: 0
  },
  lowThreshold: {
    type: Number,
    default: 2
  },
  highThreshold: {
    type: Number,
    default: 4
  },
  max: {
    type: Number,
    default: 5
  },
  colors: {
    type: definePropType([Array, Object]),
    default: () => mutable(["#F7BA2A", "#F7BA2A", "#F7BA2A"])
  },
  voidColor: {
    type: String,
    default: "#C6D1DE"
  },
  disabledVoidColor: {
    type: String,
    default: "#EFF2F7"
  },
  icons: {
    type: definePropType([Array, Object]),
    default: () => [StarFilled, StarFilled, StarFilled]
  },
  voidIcon: {
    type: definePropType([String, Object]),
    default: () => Star
  },
  disabledvoidIcon: {
    type: definePropType([String, Object]),
    default: () => StarFilled
  },
  disabled: {
    type: Boolean,
    default: false
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  showText: {
    type: Boolean,
    default: false
  },
  showScore: {
    type: Boolean,
    default: false
  },
  textColor: {
    type: String,
    default: "#1f2d3d"
  },
  texts: {
    type: definePropType([Array]),
    default: () => mutable([
      "Extremely bad",
      "Disappointed",
      "Fair",
      "Satisfied",
      "Surprise"
    ])
  },
  scoreTemplate: {
    type: String,
    default: "{value}"
  }
});
const rateEmits = {
  change: (value) => typeof value === "number",
  [UPDATE_MODEL_EVENT]: (value) => typeof value === "number"
};

export { rateEmits, rateProps };
//# sourceMappingURL=rate2.mjs.map
