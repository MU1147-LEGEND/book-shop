/* eslint-disable react/prop-types */
import { BiSolidCategory } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
import { FaFolderClosed, FaHeart, FaPlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";


const Header = ({ isModalOpen, setIsModalOpen }) => {
    const [isDark, setIsDark] = useState(false);

    const handleThemeChange = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);

        localStorage.setItem("theme", newTheme);

        document.documentElement.setAttribute("class", newTheme);
    }

    const addBook = () => {
        setIsModalOpen(!isModalOpen);
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";

        if (savedTheme) {
            setIsDark(savedTheme === "dark");
        }
        document.documentElement.setAttribute("class", savedTheme);
    }, [])

    const showSearchBar = () => {
        const search = document.querySelector('input[name="search"]');
        search.classList.toggle('hidden');
    }

    return (
        <section className="dark:bg-gray-300/95 bg-white/95 sticky top-0 w-full z-10">
            <div className="container m-auto flex justify-around items-center h-24">
                {/* logo and search header-left */}
                <div className="flex items-center justify-around md:w-[40%]">
                    <div className="logo mr-auto cursor-pointer">
                        <FaBookOpen className="text-green-600 text-2xl" />
                    </div>
                    <div className="search flex relative items-center lg:w-4/5 md:w-2/3 ">
                        <label htmlFor="search"></label>
                        <FiSearch
                            onClick={() => { showSearchBar() }}
                            className="absolute left-1 text-xl animate-pulse cursor md:pointer-events-none" />
                        <input
                            type="text"
                            name="search"
                            aria-label="Search"
                            placeholder="Search"
                            className="hidden absolute -top-4 transform translate-y-6 md:translate-y-0 md:pl-8 md:static md:flex py-2 lg:pl-7 lg:pr-2 lg:w-5/6 bg-[#80CC7260] transition-all duration-300 "
                        />
                    </div>
                </div>


                {/* menues header-right */}
                <div className="right-menu md:w-[40%] justify-around flex gap-1">

                    <div className="category cursor-pointer">
                        <BiSolidCategory className="text-2xl text-purple-950" />
                    </div>
                    <div className="heart cursor-pointer">
                        <FaHeart className="text-xl text-[#FFAE00]" />
                    </div>
                    <div className="folder cursor-pointer">
                        <FaFolderClosed className="text-xl text-red-600 hidden md:flex" />
                    </div>

                    <div
                        onClick={handleThemeChange}
                        className="toggle-theme cursor-pointer relative w-8 h-8"
                    >
                        <div
                            className={`absolute transition-all duration-500 ease-in-out transform ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'
                                }`}
                        >
                            <FiMoon className="text-2xl" />
                        </div>
                        <div
                            className={`absolute transition-all duration-500 ease-in-out transform ${isDark ? 'opacity-0 scale-50 rotate-180' : 'opacity-100 scale-100 rotate-0'
                                }`}
                        >
                            <FiSun className="text-2xl" />
                        </div>
                    </div>



                    <div
                        onClick={addBook}
                        className="add-book-btn cursor-pointer">
                        <span className="px-3 py-2 text-green-500 border-2 border-green-600 rounded-lg"><FaPlus className="text-xl font-semibold inline" />  Add Book</span>
                    </div>
                </div>
            </div>
            <hr className="dark:border-gray-600" />
        </section>
    )
}

export default Header