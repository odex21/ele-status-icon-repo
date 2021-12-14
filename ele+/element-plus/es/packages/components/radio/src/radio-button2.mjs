import { buildProps } from '../../../utils/props.mjs';
import { radioPropsBase } from './radio.mjs';

const radioButtonProps = buildProps({
  ...radioPropsBase,
  name: {
    type: String,
    default: ""
  }
});

export { radioButtonProps };
//# sourceMappingURL=radio-button2.mjs.map
