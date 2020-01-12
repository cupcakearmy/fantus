import React from 'react'

import Link from '../components/link'

import '../styles/menu.styl'

const Menu: React.FC = () => {
    return <nav className='main flex justify-between items-center'>
        <div className='left'>
            <Link href='/'>
                <div>fantus</div>
            </Link>
        </div>
        <div className='right flex'>
            <Link href='/works'>
                <div>works</div>
            </Link>
            <Link href='/sets'>
                <div>sets</div>
            </Link>
            <Link href='/mastering'>
                <div>mastering</div>
            </Link>
            <Link href='/about'>
                <div>about</div>
            </Link>
        </div>
    </nav>
}

export default Menu