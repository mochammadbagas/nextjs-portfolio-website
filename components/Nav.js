import React from 'react';
import NavItem from './NavItem';

export default function Nav(props) {
    const { className = 'flex-row' } = props;
    return (
        <div {...props} className={`${className} flex justify-center gap-x-16`}>
            <NavItem href='/project'>Projects</NavItem>
            <NavItem href='/article'>Articles</NavItem>
            <NavItem href='/about'>About</NavItem>
        </div>
    );
}
