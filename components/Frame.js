import React from 'react';

export default function Frame(props) {
    const { children } = props;
    return (
        <main className='relative bg-gradient-to-br from-black to-[#212121] selection:bg-accent selection:text-black overflow-hidden'>
            <div className='bg-pattern h-full'>
                <div className='absolute -top-[495px] right-32 w-[720px] h-[720px] rounded-full bg-[#3B3459] blur-[200px]'></div>
                <div className='absolute top-[341px] right-[1080px] w-[720px] h-[720px] rounded-full bg-[#593434] blur-[200px]'></div>
                <div className='absolute top-[411px] left-[905px] w-[470px] h-[470px] rounded-full bg-[#345952] blur-[200px]'></div>

                <div className='container relative mx-auto'>{children}</div>
            </div>
        </main>
    );
}
