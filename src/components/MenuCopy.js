import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import ClickOutside from './ClickOutside'


const Menu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)
    const showSubNav = () => setSubnav(!subnav)

    const [isActive, setIsActive] = useState(false)
    const setIsActiveFunc = () => setIsActive(!isActive)
    const ref = useRef()
    ClickOutside(ref, () => {
        if (isActive) setIsActive(!isActive)
    })

    const [isActiveSub, setIsActiveSub] = useState(false)
    const setIsActiveSubFunc = () => setIsActiveSub(!isActiveSub)
    const refSub = useRef()
    ClickOutside(refSub, () => {
        if (isActiveSub) setIsActiveSub(!isActiveSub)
    })
    return (
        <>
            <Link to={item.path} onClick={item.subNav && showSubNav}>
                <div >
                    <span ref={ref} className={isActive ? 'nav-text active' : 'nav-text'} onClick={setIsActiveFunc}>
                        {item.icon}{item.title}
                    </span>
                </div>
                <div>

                    {item.subNav && subnav
                        ? '' : item.subNav
                            ? '' : null}
                </div>
            </Link>
            <div>
                {subnav && item.subNav.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} >
                            <div  >
                                <span ref={refSub} className={isActiveSub ? 'nav-text-sub active' : 'nav-text-sub'} onClick={setIsActiveSubFunc} >                          
                                    {item.icon}{item.title}
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )


}

export default Menu





import React, { useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import ClickOutside from './ClickOutside'

const Menu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)
    const showSubNav = () => setSubnav(!subnav)

const [isActive, setIsActive] = useState(false)
    const setIsActiveFunc = () => {
        setIsActive(!isActive)
        ClickOutside()
    }
    const ref = useRef()
    ClickOutside(ref, () => {
        if (isActive) setIsActive(!isActive)
    })


    //const ref = useRef(null)
     //const [isActive, setIsActive] = useState(false)
    //const setIsActiveFunc = () => {
      //   setIsActive(!isActive)
       // const span = ref.current
    //span.className='nav-text active'
    //}
    // console.log(ref.current)
     
    // ClickOutside(ref, () => {
    //     if (isActive) setIsActive(!isActive)
    // })

    // const [isActiveSub, setIsActiveSub] = useState(false)
    // const setIsActiveSubFunc = () => setIsActiveSub(!isActiveSub)
    // const refSub = useRef()
    // ClickOutside(refSub, () => {
    //     if (isActiveSub) setIsActiveSub(!isActiveSub)
    // })

    return (
        <>
            <Link to={item.path} onClick={item.subNav && showSubNav}>
                <div ref={ref} className={isActive ? 'nav-text active' : 'nav-text'} onClick={setIsActiveFunc}>
                    {/* <div> */}
                    {/* <span className="nav-text" onClick={setIsActiveFunc}> */}
                        <span>
                        {item.icon}{item.title}
                    </span>
                </div>
                <div>
                    {item.subNav && subnav
                        ? '' : item.subNav
                            ? '' : null}
                </div>
            </Link>
            <div>
                {subnav && item.subNav.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} >
                            <div  >
                                {/* <span ref={refSub} className={isActiveSub ? 'nav-text-sub active' : 'nav-text-sub'} onClick={setIsActiveSubFunc} > */}
                                    <span>
                                    {item.icon}{item.title}
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )


}

export default Menu