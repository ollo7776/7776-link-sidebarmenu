import React, { useState, useRef } from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import Menu from './Menu'
import ClickOutside from './ClickOutside'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const ref = useRef()
    ClickOutside(ref, () => {
        if (sidebar) setSidebar(false)
    })

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>

                    <span className='nav-bar-menu' >
                        {SidebarData.map((item, i) => {
                            return (
                                <Link to={item.path} key={i} >
                                    <span>{item.icon}</span>
                                </Link>

                            )
                        })}
                    </span>


                    <div className='navbar-flash'></div>
                    <div id='navbar-flash-db'></div>
                    <div id='logdb'><img alt='logdb' style={{ height: '30px' }} src='/picture/logdb.png'></img></div>
                </div>
                <nav ref={ref} className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul>
                        {SidebarData.map((item, index) => {
                            return (
                                <Menu item={item} key={index} />
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar


//--------------------------------------------------
// import React, { useState, useRef } from 'react'
// import * as FaIcons from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import { SidebarData } from './SidebarData'
// import './Navbar.css'
// import { IconContext } from 'react-icons'
// import Menu from './Menu'
// import ClickOutside from './ClickOutside'

// function Navbar() {
//     const [sidebar, setSidebar] = useState(false)
//     const showSidebar = () => setSidebar(!sidebar)

//     const ref = useRef()
//     // ClickOutside(ref, () => {
//     //     if(sidebar) setSidebar(false)
//     // })

//     return (
//         <>
//             <IconContext.Provider value={{ color: '#fff' }}>
//                     <div className='navbar'>
//                     <Link to='#' className='menu-bars'>
//                         <FaIcons.FaBars onClick={showSidebar} />
//                     </Link>
//                 </div>
//                 <nav ref={ref} className={sidebar ? 'nav-menu active' : 'nav-menu'} >
//                     <ul>
//                         {SidebarData.map((item, index) => {
//                             return (
//                                 <Menu item={item} key={index} />
//                             )
//                         })}
//                     </ul>
//                 </nav>
//             </IconContext.Provider>
//         </>
//     )
// }

// export default Navbar