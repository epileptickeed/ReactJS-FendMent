import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {

    const ulVars = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                delayChildren: 2,
                staggerChildren: .1,
            }
        }
    }

    const liVars = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 }
    }

    const menuVars = {
        hidden: {
            x: '100%'
        },
        active: {
            x:'0%'
        },
        exit: {
            x: '100%'
        }
    }

    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)

  return (
    <div className='navbar'>
        <motion.div variants={liVars} initial='hidden' animate='show' transition={{ delay: 1.9}}>Logo</motion.div>
        
        <motion.ul className='navMenu' variants={ulVars} initial='hidden' animate='show'>
            <motion.li variants={liVars}> <Link to={'/'}>Home</Link> </motion.li>
            <motion.li variants={liVars}> <Link to={'/about'}>About us</Link> </motion.li>
            <motion.li variants={liVars}> <Link to={'/store'}>Store</Link> </motion.li>
        </motion.ul>

        <motion.button 
            className={isOpen ? 'notActiveBtn' : 'buttonActive'}
            variants={liVars} initial='hidden' animate='show' transition={{ delay: 2}}
            > 
            <CiMenuFries size={30} onClick={() => setIsOpen(true)} />
        </motion.button>

        <motion.button 
            className={isOpen ? 'buttonActive' : 'notActiveBtn'}
        > 
            <IoClose size={30} onClick={() => setIsOpen(false)}/>
        </motion.button>

        <AnimatePresence mode='wait'>
            {isOpen && (
                <motion.div className={isOpen ? 'toggleNavMenu': 'notActive'}
                variants={menuVars} initial='hidden' animate={'active'} exit='exit'
                >
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About us</Link></li>
                        <li><Link to={'/store'}>Store</Link></li>
                    </ul>
                </motion.div>
            )}

            
        </AnimatePresence>

        
    </div>
  )
}

export default Navbar