// components/Footer.tsx
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="p-8 pb-1 bg-gray-900 text-white">
            <div className="flex justify-between mb-6">
                {/* Primul div: Linkuri Social Media */}
                <div className="flex flex-col w-[350px]">
                    <p className='mb-6'>Roomie Finder prima și cea mai mare platformă din România dedicată în exclusivitate găsirii colegului de cameră perfect și închirierii de locuințe ideale
                    </p>
                    <p className="text-lg font-semibold mb-2">Urmărește-ne:</p>
                    <div className="flex space-x-4">
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                    </div>
                </div>

                {/* Al doilea div: Listă de itemi */}
                <div className="flex flex-col justify-center self-start">
                    <p className="font-bold mb-4">Navigație</p>
                    <ul>
                        <li className='my-2 hover:underline'><Link href={"/casaMea"}>Casa mea</Link></li>
                        <li className='my-2 hover:underline'><Link href={"/utilizatori"}>Utilizatori</Link></li>
                        <li className='my-2 hover:underline'><Link href={"/termeniUtilizare"}>Termenii de utilizare</Link></li>
                        <li className='my-2 hover:underline'><Link href={"/politicaConfid"}>Politica de confidențialitate</Link></li>
                    </ul>
                </div>

                {/* Al treilea div: Formular de feedback */}
                <div className="flex flex-col self-start">
                    <p className="text-lg font-semibold mb-2">Let's Get in Touch!</p>
                    <form className="grid ml-4">
                        <label htmlFor="nume-footer">Full Name:</label>
                        <input
                            id='nume-footer'
                            type="text"
                            className="p-2 rounded-full justify-self-end w-[300px] bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="email-footer">Email:</label>
                        <input
                            id='email-footer'
                            type="email"
                            className="p-2 rounded-full bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="mesaj-footer">Message:</label>
                        <textarea
                            id='mesaj-footer'
                            className="p-2 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows={3}
                        ></textarea>

                        <button type="submit" className="p-2 w-[150px] mt-5 justify-self-end text-center bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition">
                            Trimite
                        </button>
                    </form>
                </div>
            </div>

            {/* P-ul final cu copyright */}
            <p className="text-center text-sm text-gray-400 self-end m-0 p-0">
                © 2024 Roomie Finder
            </p>
        </footer>
    );
};

export default Footer;
