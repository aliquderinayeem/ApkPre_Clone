import React from 'react';

const Footer = () => {
    return (
<>
    <footer className="footer bg-base-200 text-base-content p-10 border-1 border-green-600">
        <div className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <nav className='flex flex-col'>
                <h6 className="footer-title text-lg md:text-xl font-bold text-[#632EE3]">Products</h6>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Hero Apps</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Components</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Templates</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Documentation</a>
            </nav>
            <nav className='flex flex-col'>
                <h6 className="footer-title text-lg md:text-xl font-bold text-[#632EE3]">Company</h6>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">About us</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Contact</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Careers</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Press kit</a>
            </nav>
            <nav className='flex flex-col'>
                <h6 className="footer-title text-lg md:text-xl font-bold text-[#632EE3]">Legal</h6>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Terms of use</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Privacy policy</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Cookie policy</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Licensing</a>
            </nav>
            <nav className='flex flex-col'>
                <h6 className="footer-title text-lg md:text-xl font-bold text-[#632EE3]">Community</h6>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">GitHub</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Discord</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Twitter</a>
                <a className="link link-hover text-base md:text-lg hover:text-[#9F62F2] transition-colors duration-200">Blog</a>
            </nav>
        </div>
    </footer>
    
    <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">H</span>
                </div>
                <div>
                    <p className="font-bold text-2xl md:text-3xl bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        HERO.IO
                    </p>
                    <p className="text-base md:text-lg">
                        <span className="font-semibold">Building the future of developer tools</span>
                        <br />
                        <span className="text-gray-600">Open source • Community driven • Since 2023</span>
                    </p>
                </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
                <div className="flex gap-6">
                    <a href="https://github.com/aliquderinayeem" className="hover:scale-110 transition-transform duration-200">
                        <div className="p-2 rounded-full bg-gray-800 hover:bg-[#632EE3] transition-colors duration-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-white">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                    </a>
                    <a href="https://twitter.com" className="hover:scale-110 transition-transform duration-200">
                        <div className="p-2 rounded-full bg-blue-400 hover:bg-[#632EE3] transition-colors duration-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-white">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </div>
                    </a>
                    <a href="https://discord.com" className="hover:scale-110 transition-transform duration-200">
                        <div className="p-2 rounded-full bg-indigo-600 hover:bg-[#632EE3] transition-colors duration-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-white">
                                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0a12.64 12.64 0 00-.617-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057a19.9 19.9 0 005.993 3.03a.078.078 0 00.084-.028a14.09 14.09 0 001.226-1.994a.076.076 0 00-.041-.106a13.107 13.107 0 01-1.872-.892a.077.077 0 01-.008-.128a10.2 10.2 0 00.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127a12.3 12.3 0 01-1.873.892a.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028a19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                            </svg>
                        </div>
                    </a>
                    <a href="https://youtube.com" className="hover:scale-110 transition-transform duration-200">
                        <div className="p-2 rounded-full bg-red-600 hover:bg-[#632EE3] transition-colors duration-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-white">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                            </svg>
                        </div>
                    </a>
                </div>
                <p className="text-sm text-gray-600 text-center md:text-right">
                    © {new Date().getFullYear()} HERO.IO. All rights reserved.
                    <br />
                    Made with ❤️ for the developer community
                </p>
            </div>
        </div>
    </footer>
</>
    );
};

export default Footer;