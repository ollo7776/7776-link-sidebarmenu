import React from 'react'
//import * as FaIcons from 'react-icons/fa'
//import * as AiIcons from 'react-icons/ai'
//import * as BsIcons from 'react-icons/bs'
//import * as RiIcons from 'react-icons/ri'
//import * as GiIcons from 'react-icons/gi'
import { SvgRepairIcon } from './svgIcons/SvgRepairIcon'
import { SvgCalendarIcon } from './svgIcons/SvgCalendarIcon'
import { SvgUmleitIcon } from './svgIcons/SvgUmleitIcon'
import { SvgAtariPlay } from './svgIcons/SvgAtariPlay'

export const SidebarData = [
    {
        title: 'Games',
        path: '/',
        icon: <SvgAtariPlay />,
        cName: 'nav-text',
    },
    {
        title: 'Ausfall',
        path: '/ausfall',
        //icon: <GiIcons.GiAutoRepair />,
        icon: <SvgRepairIcon /> ,
        cName: 'nav-text',
    },
    {
        title: 'DienstBoerse',
        path: '/dienstboerse',
        icon: <SvgCalendarIcon />,
        cName: 'nav-text',
    },
    {
        title: 'Umleitungen',
        path: '/umleitungen',
        icon: <SvgUmleitIcon />,
         cName: 'nav-text',
    },
    // {
    //     title: 'JavaApps',
    //     path: '/javaapps',
    //     icon: <FaIcons.FaJava />,
    //      cName: 'nav-text',
    //     subNav: [
    //         {
    //             title: 'DecodeQrCode',
    //             path: '/decodeqrcode',
    //             icon:   <RiIcons.RiArrowDropRightLine />,
    //             cName: 'nav-text-sub',
    //             cNameA: 'nav-text-sub active'
    //         },
    //         {
    //             title: 'Validate24',
    //             path: '/validate24hours',
    //             icon: <RiIcons.RiArrowDropRightLine />,
    //             cName: 'nav-text-sub',
    //             cNameA: 'nav-text-sub active'
    //         },
    //         {
    //             title: 'HumanTime',
    //             path: '/humantime',
    //             icon: <RiIcons.RiArrowDropRightLine />,
    //             cName: 'nav-text-sub',
    //             cNameA: 'nav-text-sub active'
    //         },
    //         {
    //             title: 'WorkingDays',
    //             path: '/workingdays',
    //             icon: <RiIcons.RiArrowDropRightLine />,
    //             cName: 'nav-text-sub',
    //             cNameA: 'nav-text-sub active'
    //         },
    //         {
    //             title: 'Meetings',
    //             path: '/meetings',
    //             icon: <RiIcons.RiArrowDropRightLine />,
    //             cName: 'nav-text-sub',
    //             cNameA: 'nav-text-sub active'
    //         },
    //         {
    //             title: 'CalendarWeek',
    //             path: '/calendarweek',
    //             icon: <RiIcons.RiArrowDropRightLine />,
    //             cName: 'nav-text-sub',
    //             cNameA: 'nav-text-sub active'
    //         },
    //         {
    //             title: 'UnluckyDays',
    //             path: '/unluckydays',
    //             icon: <RiIcons.RiArrowDropRightLine />,
    //             cName: 'nav-text-sub',
    //             cNameA: 'nav-text-sub active'
    //         },
    //         {
    //             title: 'DiktatCheck',
    //             path: '/diktatcheck',
    //             icon: <RiIcons.RiArrowDropRightLine />,
    //             cName: 'nav-text-sub',
    //             cNameA: 'nav-text-sub active'
    //         },
    //         {
    //             title: 'Letters',
    //             path: '/letters',
    //             icon: <RiIcons.RiArrowDropRightLine />,
    //             cName: 'nav-text-sub',
    //             cNameA: 'nav-text-sub active'
    //         },

    //         {
    //             title: 'Spielchen',
    //             path: '/spielchen',
    //             icon: <RiIcons.RiArrowDropRightLine />,
    //             cName: 'nav-text-sub',
    //             cNameA: 'nav-text-sub active'
    //         },
    //     ]
    // },
    
]