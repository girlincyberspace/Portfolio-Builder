import { Link, Outlet } from 'react-router-dom';


function IllustratorLayout() {
 const navLink=[
    {
        name: "Projects",
        link: "/illustrator"
    },
    {
        name: "Info",
        link: "/illustrator/info"
    }
  ]
  
    return (
    <div>
      <div className='bg-gray-50 flex justify-between align-middle pt-16 px-16'>
        <h3 className='text-[28px] tracking-widest'>ELIAS COLE</h3>
        <div>
            <ul>
                {navLink.map((link) => (
                    <li className='text-[16px]'>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      <div className='px-16 py-3 bg-gray-50'>
        <p>Illustrator & Graphic Designer</p>
      </div>
      <div>
        <Outlet />
      </div>
      <div className='bg-gray-50 py-4 text-center'>
        <p>© 2035 by Elias Cole</p>
      </div>
    </div>
  )
}

export default IllustratorLayout
