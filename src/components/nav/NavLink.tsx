
"use client";
import Link from 'next/link';
import "./nav.css";
type navLinkType = {
    obj: {
        name: string,
        link: string
    }
}
const NavLink = ({ obj }: navLinkType) => {
    
    return (
        <ul className="navLink prose bg-stone-300 h-full flex flex-col items-center hover:shadow-lg shadow-stone-700 w-[fit-content]">
            <Link className="realLink  text-decoration-none text-lg lg:hover:text-xl m-auto text-center" href={obj.link}>
               <h5 className="w-full lg:p-2"> {obj.name}</h5>
            </Link>
        </ul>
    )
}

export default NavLink