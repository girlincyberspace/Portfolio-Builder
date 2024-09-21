import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GraphicDesignLayout = () => {
    const navLink = [
        {
            name: "Portfolio", link: "/design-template"
        },
        {
            name: "About", link: "/design-template/about-1"
        },
        {
            name: "Contact", link: "/design-template/contact-1"
        },
        {
            name: "Book Now", link: "/design-template/book-now-1"
        }
    ]
  
    return (
    <div className="py-20 px-40 bg-slate-50">
            <div>
                <p className="text-center text-[24px] font-medium">SASHA BLAKE</p>
            </div>
            <div>
                <Outlet />
            </div>

            <div className='bg-black text-white mt-10 font-medium'>
                    <ul>
                        {navLink.map((link) => (
                            <li>
                                <Link to={link.link} className='hover:text-yellow-200'>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
            </div>
    </div>
    
  )
}

export default GraphicDesignLayout;
