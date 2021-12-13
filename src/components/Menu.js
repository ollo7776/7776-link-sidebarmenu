import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import ClickOutside from './ClickOutside'

const Menu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)
    const showSubNav = () => setSubnav(!subnav)
    const [classIsActive, setClassIsActive] = useState('')
    const ref = useRef()

    const setIsActiveFunc = () => {
       setClassIsActive('active')
    }

    ClickOutside(ref, () => {
       setClassIsActive('')
    })

    return (
        <>
            <Link to={item.path} onClick={item.subNav && showSubNav}>
                <div ref={ref}  className={`nav-text ${classIsActive}`} onClick={setIsActiveFunc}>              
                    <span>{item.icon}</span>
                    <span className='menu-text-align'>{item.title}</span>
                    
                </div>
            </Link>

            {/* <div>
                {subnav && item.subNav.map((item, index) => {
                    return (
                        <Link to={item.path} key={item.title}>
                            <div className='nav-text-sub'>
                                <span >
                                    {item.icon}{item.title}
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div> */}
        </>
    )


}


export default Menu




// ------------------------------------------------------------------------
// import React, { useState, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'
// import ClickOutside from './ClickOutside'

// const Menu = ({ item }) => {
//     const [subnav, setSubnav] = useState(false)
//     const showSubNav = () => setSubnav(!subnav)
//     const ref = useRef()
//     const [isActive, setIsActive] = useState(false)
//     const setIsActiveFunc = () => {
//         setIsActive(!isActive)
//     }

//     ClickOutside(ref, () => {
//             setIsActive(false)
//         })

//     const [isActiveSub, setIsActiveSub] = useState(false)
//     const setIsActiveSubFunc = () => setIsActiveSub(!isActiveSub)
//     const refSub = useRef()
//     ClickOutside(refSub, () => {
//         if (isActiveSub) setIsActiveSub(!isActiveSub)
//     })
//     return (
//         <>
//             <Link to={item.path} onClick={item.subNav && showSubNav}>
//                 {/* <div ref={ref} className={isActive ? 'nav-text active' : 'nav-text'} onClick={setIsActiveFunc}> */}
//                 <div ref={ref} className={isActive ? 'nav-text active' : 'nav-text'} onClick={setIsActiveFunc}>
//                     <span>{item.icon}</span>
//                     <span className='menu-text-align'>{item.title}</span>
//                 </div>
//             </Link>

//             <div>
//                 {item.subNav && subnav
//                     ? '' : item.subNav
//                         ? '' : null}
//             </div>

//             <div>
//                 {subnav && item.subNav.map((item, index) => {
//                     return (
//                         // <Link to={item.path} key={index} >
//                         <Link to={item.path} key={item.title}>
//                             <div>
//                                 <span ref={refSub} className={isActive ? 'nav-text-sub active' : 'nav-text-sub'} onClick={setIsActiveSubFunc} >
//                                     {item.icon}{item.title}
//                                 </span>
//                                 {console.log(refSub)}
//                             </div>
//                         </Link>
//                     )
//                 })}
//             </div>
//         </>
//     )


// }

// export default Menu