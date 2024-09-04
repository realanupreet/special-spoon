import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (<>
        <nav className='bg-black/90 text-gray-400 flex justify-center gap-5 uppercase p-3 transition-all default-font'>
            <NavLink to="/">Demo 1</NavLink>
            <NavLink to="/2">Demo 2</NavLink>
            <NavLink to="/3">Demo 3</NavLink>
        </nav>
    </>);
}

export default NavBar;