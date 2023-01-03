import Link from 'next/link';
import React from 'react';

export default function BtnOutline(props) {
    const { children } = props;
    return (
        <Link
            {...props}
            className='border border-accent text-accent hover:border-opacity-0 hover:text-black hover:font-medium hover:bg-accent px-5 py-2'
        >
            {children}
        </Link>
    );
}
