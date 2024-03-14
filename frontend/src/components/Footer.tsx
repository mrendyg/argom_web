import React from "react"
import logoargom from '../assets/logoargom.png';
import logofacebook from '../IMG/logos/facebooklogogrey.png';
import logoinstragram from '../IMG/logos/instagramlogogrey.png';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
      <footer className="flex bg-[#B4D9CB] items-center justify-center text-white py-4">
        <div className="flex text-[f2f2f2] ">

            <Link 
             to='/'
             className="w-[6rem] h-[6rem]"
            >
                <img src={logoargom} alt="logoargom" />
            </Link>

           
        </div>
        
        <div className="flex items-center justify-center text-center">
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