import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAppContext } from '../context/app.context';

export default function CardProject() {
    const context = useAppContext();
    return (
        <div>
            {context.loading ? (
                <i className='mobile:text-base laptop:text-lg text-center font-medium text-white flex justify-center w-full my-40'>
                    Loading data ...
                </i>
            ) : (
                <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 my-20'>
                    {context.post.map(function (item) {
                        return (
                            <div
                                key={item.id}
                                className='bg-black aspect-[5/3] overflow-hidden flex flex-col justify-center items-center group'
                            >
                                {item.image && (
                                    <div className='w-full h-full m-auto'>
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            height={300}
                                            width={500}
                                            priority
                                            className='object-cover aspect-[5/3] object-center bg-gray-900 transition-all block group-hover:hidden'
                                        />
                                    </div>
                                )}
                                <div className='h-full w-full bg-accent text-center flex-none transition-all hidden group-hover:block'>
                                    <div className='h-full w-full flex flex-col justify-center items-center'>
                                        <h1 className='text-xl text-gray-800 font-bold mb-2 mx-8'>
                                            {item.title}
                                        </h1>
                                        <p className='text-sm text-gray-700 italic mx-8'>
                                            {item.desc}
                                        </p>
                                        <div className='hidden group-hover:block'>
                                            <Link href='/'>
                                                <div className='flex justify-center mt-4'>
                                                    <Image
                                                        src='/link.svg'
                                                        alt='logo'
                                                        width={34}
                                                        height={34}
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
