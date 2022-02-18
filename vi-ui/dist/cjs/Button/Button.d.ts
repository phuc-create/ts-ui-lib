import React from 'react';
import './style.scss';
interface ButtonProps {
    id: string;
    type: 'button' | 'submit' | 'reset';
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
    link?: string;
    style?: object;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
