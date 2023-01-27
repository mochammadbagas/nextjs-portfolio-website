import Link from 'next/link';
import React from 'react';

export default function BtnPrimary(props) {
    const { className = 'px-8', children } = props;
    return (
        <Link {...props}>
            <div
                className={`${className} bg-accent text-center py-2 uppercase font-semibold`}
            >
                {children}
            </div>
        </Link>
    );
}
