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
        <nav className="flex justify-between items-center max-w-screen-2xl md:mx-auto px-5 py-3 md:shadow-none shadow-lg border">
            <div>
                <a href="" className="font-bold text-4xl">Price Options</a>
            </div>
            <div>
                <div className="text-4xl md:hidden" onClick={() => { setOpen(!open) }}>
                    {
                        open === true ? <GrClose /> : <GiHamburgerMenu />
                    }

                </div>
                <ul className={`md:flex ${open ? 'top-12' : '-top-56'} md:static absolute p-2 rounded-md right-6 md:border-none border duration-700 transition-all mt-2 md:bg-transparent bg-white`}>
                    {
                        routes.map(route => <Link key={route.id} route={route} />)
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar