import PropTypes from 'prop-types';
import { useRef } from 'react';
import Button from '../Button';
import './field.css';

const InputField = ({
  label,
  fieldType,
  placeholder,
  button,
  icon,
  ...props
}) => {
  const fieldContainer = useRef();

  const fieldFocusHandler = (event) => {
    fieldContainer.current.classList.add('field__focus');
  };

  const fieldBlurHandler = (event) => {
    if (event.target.value === '') {
      fieldContainer.current.classList.remove('field__focus');
      return;
    }
  };
  return (
    <div className="field" ref={fieldContainer}>
      <label htmlFor={label}>{label}</label>
      <input
        type={fieldType}
        id={label}
        placeholder={placeholder}
        onFocus={fieldFocusHandler}
        onBlur={fieldBlurHandler}
      />
      {button && (
        <Button icon={icon} onClick={() => {}} variant="transparent" />
      )}
    </div>
  );
};

InputField.propTypes = {
  fieldType: PropTypes.oneOf(['text', 'password', 'email', 'date']),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  button: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  fieldType: 'text',
  label: null,
  placeholder: null,
  button: false,
  onChange: undefined,
  disabled: false,
};

export default InputField;
