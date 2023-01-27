import React from 'react';
import { useState } from 'react';
import BtnOutline from './BtnOutline';
import Image from 'next/image';
import Logo from './Logo';
import Nav from './Nav';
import classnames from 'classnames';

export default function Navbar() {
    const [offcanvas, setOffcanvas] = useState(false);

    return (
        <>
            <div className='flex items-center pt-10'>
                <div className='w-3/12 flex justify-start'>
                    <Logo />
                </div>
                <div className='w-7/12 hidden tablet:block'>
                    <Nav />
                </div>
                <div className='w-2/12 text-xs text-right tracking-widest hidden tablet:block'>
                    <BtnOutline href='/contact'>Contact</BtnOutline>
                </div>

                <div className='w-9/12 text-right tablet:hidden'>
                    <Image
                        src='/menu.svg'
                        alt='menu'
                        width={32}
                        height={32}
                        className='inline-block'
                        onClick={() => setOffcanvas(true)}
                    />
                </div>
            </div>

            <div
                className={classnames(
                    'fixed bg-gray-900 z-10 top-0 w-full h-screen transition-all tablet:hidden',
                    offcanvas ? 'right-0' : '-right-full'
                )}
            >
                <div className='bg-pattern h-full'>
                    <Image
                        src='/close.svg'
                        alt='menu'
                        width={32}
                        height={32}
                        className='absolute right-8 top-10'
                        onClick={() => setOffcanvas(false)}
                    />

                    <Nav className='flex-col space-y-10 pt-24' />
                </div>
            </div>
        </>
    );
}
