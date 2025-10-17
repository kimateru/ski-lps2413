import React from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";

const MobileMenu = ({ closeMenu }) => {
    return (
        <div className='lg:hidden absolute top-0 left-0 w-screen h-screen bg-white z-50'>
            <div className='absolute right-6 top-5'>
                <IoClose className='text-[45px]' onClick={closeMenu} />
            </div>
            <ul className='h-[95%] flex flex-col justify-center items-center gap-18 text-[35px]'>
                <li><Link to="/rent">Rent equipment</Link></li>
                <li><Link >Map</Link></li>
                <li><Link >Accommodation</Link></li>
                <li>
                    <Link>
                        <span>Contact us</span>
                        <div className='w-full h-[4px] bg-primary'></div>
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default MobileMenu