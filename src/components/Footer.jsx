import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { FaHome, FaInstagram, FaMailBulk, FaPhone, FaWhatsapp, FaYoutube } from "react-icons/fa";



const Footer = () => {

  
  return (
      <footer className='md:w-full mx-2 border-solid border-dark font-medium text-lg
        bg-blue-800'>
      
            <Layout className='py-8 items-center justify-between bg-gray-200' >
              {/* <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
              <Link href="">Phone</Link>
              <Link href="">Mail</Link> */}
        
        <div className='flex flex-col md:flex-row'>
          
          <div className='md:w-1/2 md:pb-0 pb-4 '>
            
            <div className=" flex mb-4">
              <FaHome size={20} style={{ color: "#000000", marginRight: "2rem" }} />
              <div>
                <p>Mumbai</p>
                <p>India</p>
              </div>
            </div>
            
            <div className="flex mb-4">
              <FaPhone size={20} style={{ color: "#000000", marginRight: "2rem" }} />
              <h4>+91 96808 52664</h4>
            </div>
            
            <div className="flex ">
              <FaMailBulk size={20} style={{ color: "#000000", marginRight: "2rem" }} />
              <h4>mylawyer@gmail.com</h4>
           </div>
            
          </div>

          <div className='md:w-1/2 '>
            <div className="">
              <div className='pb-4 '>
                <h1 className='font-bold'>About My Lawyer</h1>
                <div className='flex justify-between ' style={{ display: 'flex', justifyContent: 'center' }}>
                  <p className='flex justify-between'>Are you facing legal challenges and seeking professional guidance 
            to navigate the complexities of the law? Look no further. 
            At My Lawyer, we pride ourselves on providing expert legal 
            representation and personalized solutions tailored to your unique 
            needs.</p>
             </div>
                </div>
                 {/* <div className="flex items-center" style={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://youtube.com/@minifit.corporation">
                  <FaYoutube size={35} style={{ color: "#000000", marginRight: "1rem" }} />
                </Link>
                <Link href="https://www.instagram.com/minifit.co">
                  <FaInstagram size={35} style={{ color: "#000000", marginRight: "1rem" }} />
                </Link>
                <Link href="https://wa.me/c/918108419746">
                  <FaWhatsapp size={35} style={{ color: "#000000", marginRight: "1rem" }} />
                </Link>
              </div> */}
           </div>
          </div>

        </div>
        <div className='flex w-full h-full pt-6 items-center'>
          <p className="items-center" style={{ margin: 'auto' }}>
            &copy; {new Date().getFullYear()} My Lawyer. All right reserved.
          </p>
        </div>
            </Layout>

    </footer>
  )
      
    
    
}

export default Footer
