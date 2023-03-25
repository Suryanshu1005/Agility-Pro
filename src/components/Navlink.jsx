import { useState } from 'react';
import { Link } from 'react-router-dom'
import { links } from '../constants'


const Navlink = () => {
    const [heading, setHeading] = useState("")
    return (
        <>
            {links.map((link) => (
                <div>
                    <div className="px-3 text-left md:cursor-pointer group">
                        <Link to = {link.id}>
                        <h1 className='py-2 text-lg font-semibold cursor-pointer'
                            onClick={() => setHeading(heading === link.title ? '' : link.title)}>
                            {link.title}
                            <span className="text-xl md:hidden inline">
                                {link.id == "services" && (
                                <ion-icon 
                                    name={`${heading === link.title ? 
                                        "chevron-up" : "chevron-down"
                                        }`}
                                ></ion-icon>
                                )}
                            </span>
                        </h1>
                        </Link>
                        {link.submenu && (
                            <div className="absolute top-19 hidden 
                                group-hover:md:block hover:md:block">
                                <div className="py-3">
                                    <div
                                        className="w-4 h-4 left-3 
                                        absolute mt-1 bg-yellow-500 rotate-45"
                                    ></div>
                                </div>
                                <div className='bg-yellow-500 p-2 rounded-lg'>
                                    {
                                        link.subLinks.map((mysublinks) => (
                                            <div>
                                                <li className='text-sm text-gray-200 my-2.5'>
                                                    <Link to={mysublinks.id}
                                                        className="hover:text-black">
                                                            {mysublinks.title}
                                                    </Link>
                                                    </li>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                    {/* menues for mobile */}
                    <div>
                        <div key={link.id}>
                            {link.id === "services" && link.submenu && link.subLinks && (
                                <div className={`
                                ${heading === link.title ? 'md:hidden' : 'hidden'}
                            `}
                                >
                                    {link.subLinks.map((sublink) => (
                                        <h2 key={sublink.id} className="py-3 pl-7 font-semibold md:pr-0 pr-0">{sublink.title}</h2>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Navlink