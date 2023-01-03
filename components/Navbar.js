import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BtnOutline from './BtnOutline';
import NavItem from './NavItem';

export default function Navbar() {
    return (
        <div className='flex items-center pt-10'>
            <div className='w-3/12 flex justify-start'>
                <Link href='/'>
                    <Image src='/logo.svg' alt='logo' width={40} height={40} />
                </Link>
            </div>
            <div className='w-6/12'>
                <div className='flex space-x-16 justify-center'>
                    <NavItem href='/project'>Projects</NavItem>
                    <NavItem href='/article'>Articles</NavItem>
                    <NavItem href='/about'>About</NavItem>
                </div>
            </div>
            <div className='w-3/12 flex justify-end text-white'>
                <BtnOutline href='/contact'>Contact</BtnOutline>
            </div>
        </div>
    );
}
