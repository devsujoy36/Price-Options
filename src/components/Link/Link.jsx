/* eslint-disable react/prop-types */

const Link = ({route}) => {
    return (
        <li className="px-3 md:py-2 rounded-md hover:text-emerald-500 border-transparent hover:border-emerald-400 border transition-all">
            <a href={route.path}>{route.name}</a>
        </li>
    )
}

export default Link