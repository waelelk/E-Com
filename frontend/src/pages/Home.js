import React from 'react';


function Home() {
    return (
        <div class="bg-green-900 relative min-h-screen md:flex">

        <div class="bg-green-900 text-gray-100 flex justify-between md:hidden">
            <a href="#" class="block p-4 text-yellow-600 ">B</a>

            <button class="mobile-menu-button p-4 focus:outline-none ">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
            </div>
            
        <div class="sidebar bg-opacity-0 text-yellow-600 font-light	w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <a href="#" class="text-black flex items-center space-x-2 px-4  md:font-bold ">
                
            <span class="text-yellow-600 text-2xl font-extrabold">Logo</span>
            </a>

            <nav>
            <a href="#" class="block py-2.5 px-4  ">
                Shop
            </a>
            <a href="" class="block py-2.5 px-4  ">
                About
            </a>
            <a href="" class="block py-2.5 px-4  ">
                Blog
            </a>
            <a href="" class="block py-2.5 px-4  ">
                Cart
            </a>
                </nav>
                
        </div>
        </div>
    );
}

export default Home;