import { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
    ];

    return (
        <nav className="mx-10 my-5 float-end">
            <div className="text-2xl md:hidden" onClick={() => { setOpen(!open) }}>
                {
                    open === true ? <GrClose /> : <GiHamburgerMenu />
                }

            </div>
            <ul className={`md:flex ${open ? 'top-12' : '-top-56'} md:static absolute p-2 rounded-md right-6 md:border-none border duration-700 transition-all mt-2`}>
                {
                    routes.map(route => <Link key={route.id} route={route} />)
                }
            </ul>
        </nav>
    )
}

export default NavBar