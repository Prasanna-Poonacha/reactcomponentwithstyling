import React from 'react';
import classnames from 'classnames';
import styles from './button.css';

export const TYPES = {
    PRIMARY: 'primary',
    WARNING: 'warning',
    DANGER: 'danger',
    SUCCESS: 'success',
}

export const SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
}

const BaseButton = ({
    text,
    onClick,
    type,
    disabled,
    buttonType,
    buttonSize
}) => (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={classnames(styles.button, styles[buttonType], styles[buttonSize || SIZES.MEDIUM])}
        >
            {text}
        </button>
    );

export const Primary = props => (
    <BaseButton {...props} buttonType={TYPES.PRIMARY} />
);
export const Warning = props => (
    <BaseButton {...props} buttonType={TYPES.WARNING} />
);
export const Danger = props => (
    <BaseButton {...props} buttonType={TYPES.DANGER} />
);
export const Success = props => (
    <BaseButton {...props} buttonType={TYPES.SUCCESS} />
);