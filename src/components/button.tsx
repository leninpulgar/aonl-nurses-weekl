// components/ui/button.tsx
import React from 'react';
import classNames from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
  return (
    <button
      className={classNames(
        'px-4 py-2 rounded font-semibold transition-colors cursor-pointer',
        variant === 'primary'
          ? 'bg-blue-950 text-white hover:bg-blue-900'
          : 'bg-gray-200 text-black hover:bg-gray-300',
        className
      )}
      {...props}
    />
  );
};
