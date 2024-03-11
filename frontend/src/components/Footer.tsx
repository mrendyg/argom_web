import React from "react"
import { Disclosure } from "@headlessui/react";
import logoargom from '../assets/logoargom.png';
import logofacebook from '../IMG/logos/facebooklogogrey.png';
import logoinstragram from '../IMG/logos/instagramlogogrey.png';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
      <footer className="flex bg-[#B4D9CB] text-white py-4 bottom-0 mb-0 ">
        <div className="flex text-[f2f2f2] m-[1.5rem]">

            <Link 
             to='/'
             className="w-[6rem] h-[6rem]"
            >
                <img src={logoargom} alt="logoargom" />
            </Link>

           
        </div>
        <div className="flex items-center justify-center">
                <Link 
                 to='https://www.facebook.com/argomdelicias?mibextid=ZbWKwL'
                 className="w-[6rem] h-[6rem] m-[1rem]" 
                >
                    <img src={logofacebook} alt="logofacebook" />
                </Link>

                <Link 
                 to='https://www.instagram.com/argom_delicias?igsh=MzZzYzJxanpudnFr'
                 className="w-[6rem] h-[6rem] m-[1rem]"
                >
                    <img src={logoinstragram} alt="logofacebook" />
                </Link>
            </div>
          
      </footer>
    );
  };
  
  export default Footer;