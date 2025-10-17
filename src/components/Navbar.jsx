import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLink from './AnimatedLink'
import MobileMenu from './MobileMenu'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Verificarea daca dispozitivul e lg dar nu xl sa aratam o lista,si invers


  return (
    <nav className='flex justify-between items-center'>
      <div>
        <Link to="/" className='text-[20px] md:text-[30px] lg:text-[35px] font-black font-inter tracking-tight'>Ice Haven</Link>
      </div>


      <div className='hidden lg:flex items-center gap-6 xl:justify-between xl:gap-4 xl:w-1/2'>
        <ul className='flex items-center gap-6 xl:gap-12 text-[19px]'>
          <li><AnimatedLink to="/rent">Rent equipment</AnimatedLink></li>
          <li><AnimatedLink >Map</AnimatedLink></li>
          <li><AnimatedLink >Accommodation</AnimatedLink></li>
        </ul>
        <AnimatedLink showLine={true}>
          <span>Contact us</span>
        </AnimatedLink>
      </div>

      <div className='lg:hidden'>
        <AnimatedLink showLine={true} onClick={handleMenuClick} classNameText='md:text-[19px]'>
          <span>Menu</span>
        </AnimatedLink>
      </div>
      {isMenuOpen && <MobileMenu closeMenu={handleMenuClick}/>}
    </nav>
  )
}

export default Navbar