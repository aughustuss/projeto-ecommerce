import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Categorylink = ({position, link}) => {
    return (
        <>
            <Link to={`category/${link}`} className={`${position} text-sm text-primary group flex flex-row items-center gap-x-2`}>
                Visitar categoria <BsArrowRightShort className='opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-200'/>
            </Link>
        </>
    )
}

export default Categorylink