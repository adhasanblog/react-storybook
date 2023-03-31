import PropTypes from 'prop-types';
import { RightArrow } from '../Icons/Directions';
import { PlusIcon } from '../Icons/UserInterface';
import './button.css';

const Button = ({
  variant,
  label,
  size,
  backgroundColor,
  disabled,
  icon,
  iconPosition,
  ...props
}) => {
  const btnOnlyIcon = !label && icon ? 'btn__icon' : '';
  console.log(btnOnlyIcon);
  return (
    <button
      type="button"
      className={[
        'btn',
        `${btnOnlyIcon}`,
        `btn__${variant}`,
        `${size ? `btn__${size}` : ''}`,
        `btn-icon__${iconPosition}`,
      ].join(' ')}
      style={backgroundColor && { backgroundColor }}
      disabled={disabled}
    >
      {label && label} {icon && icon}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'transparent']),
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'medium', 'small']),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  label: null,
  icon: null,
  backgroundColor: null,
  size: null,
  iconPosition: 'right',
  onClick: undefined,
  disabled: false,
};

export default Button;
