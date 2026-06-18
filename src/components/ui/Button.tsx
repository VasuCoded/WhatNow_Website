import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    icon?: React.ReactNode;
}

export function Button({ 
    children, 
    variant = 'primary', 
    icon, 
    className = '', 
    ...props 
}: ButtonProps) {
    const baseStyles = "px-6 py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer";
    
    const variants = {
        primary: "bg-secondary text-white hover:bg-secondary-hover shadow-sm",
        outline: "bg-white dark:bg-slate-800 text-black/70 dark:text-slate-200 border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
            {icon && icon}
        </button>
    );
}

export default Button;
