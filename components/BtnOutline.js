import Link from 'next/link';
import React from 'react';

export default function BtnOutline(props) {
    const { className = 'px-4', children } = props;
    return (
        <Link
            {...props}
            className={`${className} border border-accent text-accent text-center font-semibold uppercase hover:border-opacity-0 hover:text-black hover:bg-accent py-[6px]`}
        >
            {children}
        </Link>
    );
}
