import { NavLink } from 'react-router';
import GithubButton from '../GithubButton/GithubButton';
import Logo from '../Logo/Logo';
import { IoMdMenu } from 'react-icons/io';
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apps">Apps</NavLink>
        <NavLink to="/installation">Installation</NavLink>
    </>
    // const SpecialStyle={
    //     textDecoration:none,
    // }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm sticky top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn md:hidden border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="md:hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-8 text-[20px] font-bold">
                            {links}
                        </ul>
                    </div>

                    <a href='/'><Logo></Logo></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-8 text-[20px] font-bold">
                        {links}
                    </ul>
                </div>
                <a className="navbar-end py-3 px-4" target='_blank' href='https://github.com/aliquderinayeem'>
                    <GithubButton></GithubButton>
                </a>
            </div>
        </div>
    );
};

export default Navbar;