'use client';

import Colors, { Color } from '@/shared/config/Colors';

import styles from './button.module.css';

type WithButtonProps = {
  component?: 'button';
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type WithDivProps = {
  component: 'div';
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface CommonButtonProps {
  disabled?: boolean;
  color?: Color;
  children?: React.ReactNode;
  className?: string;
}

type ButtonProps = CommonButtonProps & (WithButtonProps | WithDivProps);

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color,
  className = '',
  ...props
}) => {
  const classes = `${styles.button} ${
    disabled ? styles.disabled : ''
  } ${className}`;

  if (props.component === 'div') {
    const { style } = props;

    return (
      <div
        className={classes}
        style={{
          backgroundColor: (color && Colors[color]) || Colors.paper,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }

  const { type, style } = props;

  return (
    <button
      type={type || 'button'}
      className={classes}
      style={{
        backgroundColor: (color && Colors[color]) || Colors.paper,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
