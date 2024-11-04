'use client';
// components/Header.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div>
             <Link href={"/"}><img src="/vercel.svg" alt="Logo" className="h-8 mr-4" /></Link>
            </div>
            <div className="flex items-center">
                
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="casaMea" className="hover:text-gray-400">Casa mea</Link></li>
                        <li><Link href="/camine" className="hover:text-gray-400">Cămine</Link></li>
                        <li><Link href="/utilizatori" className="hover:text-gray-400">Utilizatori</Link></li>
                        <li><Link href="/sfaturi" className="hover:text-gray-400">Sfaturi</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <Link href={""}>
                <FontAwesomeIcon icon={faUser} className="mr-1" /> Sign in/Login
                </Link>
                
            </div>
        </header>
    );
};

export default Header;
