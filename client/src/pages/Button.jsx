import React from 'react';

export const Button = ({ variant, children, className, ...props }) => {
    const baseStyle =
        'px-6 py-2 rounded-lg text-lg font-semibold transition duration-300';

    const variantStyles = {
        default: 'bg-purple-500 text-white hover:bg-purple-600',
        ghost:
            'text-white border border-white hover:bg-white hover:text-black',
    };

    return (
        <button
            className={`${baseStyle} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
