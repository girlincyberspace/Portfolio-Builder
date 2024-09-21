import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  
    const navLinks = [ {name: "Home", link: "/fashion-designer"}, 
        {name: "Spring/Summer Collection", link: "/fashion-designer/spring-summer-collection"}, 
        {name: "About Me", link: "/fashion-designer/about"}, 
        {name: "Contact", link: "/fashion-designer/contact"
        }

    ]
  
    return (
    <div>
      <div className='pt-6 px-32 pb-2 bg-slate-50 fixed top-12 right-0 left-0 border-b border-slate-100 flex align-middle justify-between'>
        <h3 className='text-[32px]'>ANN YOUNG</h3>
        <div>
            <ul>
                {navLinks.map((link) => (
                  <li className='hover:text-slate-400'>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
            </ul>
        </div>
      </div>

      <div>
        <Outlet />
      </div>

      <div className='py-6 text-center text-[14px] border-t border-slate-100'>
        <p>© 2035 by Ann Young</p>
      </div>
    </div>
  )
}

export default Layout
