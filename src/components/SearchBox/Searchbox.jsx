import React from 'react';

const Searchbox = () => {

    return (
        <form className="">
            <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-body"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="search"
                    className="block min-w-[100px] md:min-w-[260px] lg:min-w-[450px] bg-white border-none w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base  shadow-xs placeholder:text-body rounded-lg"
                    placeholder="Search"
                    required
                />
                <button
                    type="submit"
                    className="absolute right-2 bottom-2 px-4 py-1 text-md font-semibold bg-linear-to-br from-[#632EE3] via-[#632EE3] to-[#9F62F2] text-white rounded-lg hover:scale-105 transition-colors duration-200"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default Searchbox;