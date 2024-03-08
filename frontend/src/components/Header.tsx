import { Link } from "react-router-dom"
import React from "react"
import logoargom from '../assets/logoargom.png'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {

    return (

      <>
        <Disclosure as="nav" className="bg-[#f2f2f2] w-auto h-[6rem] sm:h-[16rem]  sm:items-stretch sm:justify-start ">
          {({open}) =>
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center rounded-md p-2 text-[#000000]">
                  <div className="absolute inset-y-0 left-0 flexditems-center sm:hidden">

                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#000000] hover:text-[#AEAEAE]">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-[3rem] w-[3rem]" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-[rem] w-[rem]" aria-hidden="true"/>
                      )}
                    </Disclosure.Button>

                  </div>

                <div className="flex flex-3 items center justify-center sm:items-stretch sm:justify-start mt-[13rem]">
                        
                        <div className="hidden sm:ml-6 sm:block">

                          <div className="flex">

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


                        </div>

                </div>
                  
                </div>
              </div>
            </>
          }
        </Disclosure>




        {/* <Disclosure as="nav" className="bg-grey dark:bg-gray-800">
          
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

            </div>
            </Disclosure> */}
        </>

    )

}

export default Header;