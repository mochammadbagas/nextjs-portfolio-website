import Link from 'next/link';
import React from 'react';

export default function BtnPrimary(props) {
    const { children } = props;
    return (
        <Link {...props}>
            <div className='absolute -inset-1 top-1 right-1 bg-white'></div>
            <div className='bg-accent px-4 py-2 m-auto font-bold flex relative'>
                {children}
            </div>
        </Link>
    );
}
