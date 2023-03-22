import Colors, { Color } from '@/config/Colors';

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
  color?: Color;
  children: React.ReactNode;
}

type ButtonProps = CommonButtonProps & (WithButtonProps | WithDivProps);

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  if (props.component === 'div') {
    const { color, style } = props;

    return (
      <div
        className={styles.button}
        style={{
          backgroundColor: (color && Colors[color]) || Colors.background,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }

  const { type, color, style } = props;

  return (
    <button
      type={type || 'button'}
      className={styles.button}
      style={{
        backgroundColor: (color && Colors[color]) || Colors.background,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
