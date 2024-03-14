import { Link } from "react-router-dom";
import React from "react";
import logoargom from '../assets/logoargom.png';
import logoinstagram from '../IMG/logos/greeninstagram.png';
import logofacebook from '../IMG/logos/facebooklogogreen.png';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {

    return (

      <>
        <Disclosure as="nav" className="bg-[#f2f2f2] w-auto h-[4rem] md:h-[16rem] md:items-stretch md:justify-start sm:h-[12rem]  sm:items-stretch sm:justify-start ">
          {({open}) =>
            <>
              <div className="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-[4rem] items-center justify-center rounded-md p-2 text-[#000000]">
                  <div className="absolute inset-y-0 left-0 flexditems-center sm:hidden">

                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#000000] hover:text-[#AEAEAE]">
                    <img src={logoargom} alt="logoargom"  style={{ width: '3rem' }}/>
                      <span className="sr-only">Open main menu</span>
                      <div>
                        {open ? (
                          <XMarkIcon className="block h-[3rem] w-[3rem]" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-[3rem] w-[3rem]" aria-hidden="true"/>
                        )}
                      </div>
                    </Disclosure.Button>

                  </div>

                <div className="flex flex-3 items-center justify-center sm:items-stretch sm:justify-start mt-[13rem]">
                        
                        <div className="hidden sm:ml-6 sm:block">

                          <div className="flex">

                          <Link
                            to={'/'}
                            className="font-serif pt-[8rem] m-[4rem] font-size text-[1.6rem] hover:text-[#BF8D50]"
                          >
                            Inicio
                          </Link>
                          <Link
                            to={'/Catalogo'}
                            className="font-serif pt-[8rem] m-[4rem] font-size text-[1.6rem] hover:text-[#BF8D50]"
                          >
                            Catalogo
                          </Link>

                          <Link 
                            to={'/'}
                            className="w-[12.5rem] h-[12.5rem] mt-[2rem] m-[2rem] hover:text-[#BF8D50]"
                          >
                            <img src={logoargom} alt="logoargom"/>
                        </Link>

                        <Link
                          to={'/Sobre Nosotros'}
                          className="font-serif pt-[8rem] m-[4rem] font-size text-[1.6rem] hover:text-[#BF8D50]"
                        >
                            Sobre Nosotros
                        </Link>

                        <Link
                          to={'/Contacto'}
                          className="font-serif pt-[8rem] m-[4rem] font-size text-[1.6rem] hover:text-[#BF8D50]"
                        >
                            Contacto
                        </Link >
                            

                          </div>


                        </div>

                </div>

                <Disclosure.Panel className="sm:hidden w-auto h-auto bg-[#f2f2f2] p-[12rem] bg-opacity-80">

                  <div className="p-4 lg:hidden">
                    <div className="w-screen p-[4rem] grid grid-cols-1 b-[2rem] mt-auto pt-[28rem]">
                      
                      <div className="ml-[-1rem] ">
                        <Link
                          to={'/'}
                          className='block font-serif text-[2rem] px-4 p-[0.5rem] rounded-lg text-black max-w-[80vw]  hover:text-[#BF8D50]'
                          // ^ Añade max-w-[80vw] para limitar el ancho del texto
                        >
                          Inicio
                        </Link>

                        <Link
                          to={'/Catalogo'}
                          className='block font-serif text-[2rem] px-4 p-[0.5rem] rounded-lg text-black max-w-[80vw] hover:text-[#BF8D50]'
                        >
                          Catalogo
                        </Link>

                        <Link
                          to={'/Sobre Nosotros'}
                          className='block font-serif text-[2rem] px-4 p-[0.5rem] rounded-lg text-black max-w-[80vw] max-h-[80vw] hover:text-[#BF8D50]'
                        >
                          Sobre Nosotros
                        </Link>
                        <Link
                          to={'/Contacto'}
                          className='block font-serif text-[2rem] px-4 p-[0.5rem] rounded-lg text-black max-w-[80vw] hover:text-[#BF8D50]'
                        >
                          Contacto
                        </Link>
                      </div>
                      <div className="inline-flex justify-center mt-[1rem]">
                        <Link
                          to="https://www.instagram.com/argom_delicias?igsh=MzZzYzJxanpudnFr"
                          className=""
                        >
                          <img src={logoinstagram} alt="logoinstagram" width={50} height={50} className=""/>
                        </Link>

                          
                        <Link
                          to="https://web.facebook.com/argomdelicias?mibextid=ZbWKwL&_rdc=1&_rdr"
                          className=""
                        >
                          <img src={logofacebook} alt="logofacebook" width={50} height={50} className="ml-[1rem]"/>
                        </Link>
                          
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
                          
                </div>
              </div>
            </>
          }
        </Disclosure>

        </>

    )

}

export default Header;