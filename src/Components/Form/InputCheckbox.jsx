import PropTypes from 'prop-types';

const InputCheckbox = (props) => {
    const {
        id, value, style, classes, name, changeEvent, required, disabled, readonly, title,
    } = props;

    let inputStyleClass = 'form-check-input';

    if (classes) {
        inputStyleClass = `${inputStyleClass} ${classes}`;
    }

    const handelChange = (val, e) => {
        changeEvent(val);
    }

    return (
        <div className="form-check">
            <input
                type="checkbox"
                className={inputStyleClass}
                onChange={e => handelChange(e.target.checked, e)}
                name={name}
                required={!!required}
                disabled={disabled}
                readOnly={readonly}
                style={style}
                id={id}
                checked={value}
            />

            <label
                className="form-check-label"
                htmlFor={id}
            >
                {title}
            </label>
        </div>
    );
};

InputCheckbox.propTypes = {
    id: PropTypes.string,
    classes: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool.isRequired,
    changeEvent: PropTypes.func,
    required: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    disabled: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    readonly: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    title: PropTypes.string,
    style: PropTypes.shape({})
};

InputCheckbox.defaultProps = {
    id: 'checkbox-1',
    classes: undefined,
    name: undefined,
    changeEvent: () => {},
    required: false,
    disabled: false,
    readonly: false,
    title: '',
    style: {},
};

export default InputCheckbox;
