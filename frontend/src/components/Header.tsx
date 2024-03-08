import { Link } from "react-router-dom"
import React from "react"
import logoargom from '../assets/logoargom.png'
import logoinstagram from '../IMG/logos/greeninstagram.png'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {

    return (

      <>
        <Disclosure as="nav" className="bg-[#f2f2f2] w-auto h-[5rem] sm:h-[16rem]  sm:items-stretch sm:justify-start ">
          {({open}) =>
            <>
              <div className="mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center rounded-md p-2 text-[#000000]">
                  <div className="absolute inset-y-0 left-0 flexditems-center sm:hidden">

                    <Disclosure.Button className="inline-flex items-center justify-center m rounded-md p-2 text-[#000000] hover:text-[#AEAEAE]">
                    <img src={logoargom} alt="" width={50}/>
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-[3rem] w-[3rem]" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-[3rem] w-[3rem]" aria-hidden="true"/>
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

                <Disclosure.Panel className="sm:hidden w-auto h-screen bg-[#f2f2f2] p-[12rem] mt-[20rem]">

                <div className="mt-4 p-4 lg:hidden]">

                  

                  <div className="w-screen grid grid-cols-1 b-[2rem">
                 
                  <Link
                    to={'/'}
                    className='font-serif text-[2rem] p-2 m-[1rem] px-4 rounded-lg text-black'
                  >
                    Inicio
                  </Link>
                  <Link
                    to={'/'}
                    className='font-serif text-[2rem] p-2 m-[1rem] px-4 rounded-lg text-black'
                  >
                    Catalogo
                  </Link>
                  <Link
                    to={'/'}
                    className='font-serif text-[2rem] p-2 m-[1rem] px-4 rounded-lg text-black'
                  >
                    Sobre Nosotros
                  </Link>
                  <Link
                    to={'/'}
                    className='font-serif text-[2rem] p-2 m-[1rem] px-4 rounded-lg text-black'
                  >
                    Contacto
                  </Link>

                  <Link
                    to="https://www.instagram.com/argom_delicias?igsh=MzZzYzJxanpudnFr"
                    className=""
                  >
                   <img src={logoinstagram} alt="logoinstagram" width={50} height={50} className="ml-[2rem] mt-[1rem]"/>
                  </Link>
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