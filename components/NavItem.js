import Link from 'next/link';
import React from 'react';

export default function NavItem(props) {
    const { children } = props;

    return (
        <Link {...props} className='text-white'>
            {children}
        </Link>
    );
}
