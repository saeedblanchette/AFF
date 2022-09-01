import React from "react";
import { FaFacebook,FaInstagram,FaTiktok,FaYoutube} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="mt-10  ">
      <div className="flex bg-yellow-300 container px-16   m-auto">
        <div className="m-auto p-5">
          <img src="logoSite-2.gif" width="250" alt="ds" className="m-auto" />
        </div>
        <footer className="footer grid-rows-2 p-10  m-auto ">
          <div className=" border-t-6 border-t border-yellow-500">
            <span className="footer-title font-bold text-gray-800">HOME PAGE</span>
            <a className="link link-hover">SOUND BUSINESS</a>
            <a className="link link-hover">NATURE HARMONY</a>
            <a className="link link-hover">LOYALTY</a>
            <a className="link link-hover">COMMON DEVELOPPEMENT </a>
          </div>
          <div className=" border-t-6 border-t border-yellow-500">
            <span className="footer-title font-bold text-gray-800">OUR STORY</span>
            <a className="link link-hover">Hommage au fondateur</a>
            <a className="link link-hover">Management</a>
            <a className="link link-hover">Commitments</a>
            <a className="link link-hover">Dates clés</a>
          </div>
          <div className=" border-t-6 border-t border-yellow-500">
            <span className="footer-title font-bold text-gray-800">ACTIVITIES</span>
            <a className="link link-hover">CEREAL MILLS</a>
            <a className="link link-hover">INDUSTRIE PÂTES & COUSCOUS</a>
            <a className="link link-hover">AVICULTURE</a>
          </div>
          <div className=" border-t-6 border-t border-yellow-500">
            <span className="footer-title font-bold text-gray-800">INVESTORS</span>
            <a className="link link-hover">VENTURE</a>
          </div>
          <div className=" border-t-6 border-t border-yellow-500">
            <span className="footer-title font-bold text-gray-800">BRANDS</span>
            <a className="link link-hover">Nordar</a>
            <a className="link link-hover">Khoulala</a>
            <a className="link link-hover">Kayna</a>
            <a className="link link-hover">Couvirs Errahma</a>
            <a className="link link-hover">Eddik Almentation</a>
            <a className="link link-hover">Abattoirs Eddik</a>
          </div>
        </footer>
      </div>
      <div className="flex  justify-center  ">
        <button className="text-lg text-neutral-content m-1 my-2">
        <FaFacebook  className="text-3xl fill-gray-800 text-gary-800"/>
        </button>

        <button className="text-3xl fill-gray-800 text-neutral-content m-1 my-2">
         <FaInstagram  className="text-3xl fill-gray-800 text-gary-800"/>
        </button>

        <button className="text-3xl fill-gray-800 text-neutral-content m-1 my-2">
          <FaTiktok  className="text-3xl fill-gray-800 text-gary-800"/>
        </button>

        <button className="text-3xl fill-gray-800 text-neutral-content m-1 my-2">
        <FaYoutube className="text-3xl fill-gray-800 text-gary-800"/>
        </button>
      </div>
      <div className="text-center p-10 font-bold"> Africa Feed and Food 2022 </div>
    </footer>
  );
};

export default Footer;
