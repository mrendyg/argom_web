import { Link } from "react-router-dom"
import React from "react"
import logoargom from '../assets/logoargom.png'
import { Disclosure, Menu, Transition } from '@headlessui/react'

const Header = () => {

    return (

        <>
        <Disclosure as="nav" className="bg-grey dark:bg-gray-800">
            <div className="bg-[#f2f2f2] w-auto h-[16rem]  sm:items-stretch sm:justify-start ">
                <div className="flex justify-center">
                <Link
                  to={'/'}
                  className="font-serif pt-[8rem] m-[4rem] font-size text-[1.6rem]"
                >
                    Inicio
                </Link>
                <Link
                  to={'/'}
                  className="font-serif pt-[8rem] m-[4rem] font-size text-[1.6rem]"
                >
                    Catalogo
                </Link>

                <Link 
                  to={'/'}
                  className="w-[12.5rem] h-[12.5rem] mt-[2rem] m-[2rem]"
                >
                    <img src={logoargom} alt="logoargom"/>
                </Link>

                <Link
                  to={'/'}
                  className="font-serif pt-[8rem] m-[4rem] font-size text-[1.6rem]"
                >
                    Sobre Nosotros
                </Link>

                <Link
                  to={'/'}
                  className="font-serif pt-[8rem] m-[4rem] font-size text-[1.6rem]"
                >
                    Contacto
                </Link>
                </div>

                {/* <Disclosure.Panel className="sm:hidden">


            <div className="flex mx-2">
              <div className="absolute inset-y-[72px] left-2 px-4 flex pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2
                pl-10 text-sm text-gray-900 border border-gray-300 rounded-full 
                bg-gray-50 dark:bg-gray-700 outline-none
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  
                " placeholder="search..." />
            </div>

            <div className="space-y-1 px-2 pb-3 pt-2">
              
              
                <div className="w-full grid grid-cols-1">
                  <Link
                    to={'/'}
                    className='bg-slate-400 p-2 px-4 rounded-lg text-black dark:bg-gray-900 dark:text-white'
                  >
                    Home
                  </Link>

                  <Link
                    to={'/cate'}
                    className='text-black p-2 px-4 rounded-lg hover:bg-slate-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    Categories
                  </Link>
                </div>

                <div className="w-full grid grid-cols-1">
                  <Link
                    to={'/'}
                    className='bg-slate-400 p-2 px-4 rounded-lg text-black dark:bg-gray-900 dark:text-white'
                  >
                    Log in
                  </Link>

                  <Link
                    to={'/'}
                    className='text-black p-2 px-4 rounded-lg hover:bg-slate-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    Sign up
                  </Link>
                </div>
          

                <div className="w-full">
                  <Link
                    to={'/'}
                    className='text-black p-2 px-4 rounded-lg hover:bg-slate-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    Admin Panel
                  </Link>
                </div>
             

            </div>
          </Disclosure.Panel> */}
            </div>
            </Disclosure>
        </>

    )

}

export default Header;