import {Stack} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavBarHomePage = () => {
    return (
      <div className='navDiv'>
        <Stack
        id='navBarSearcher'
      direction='horizontal'
      className='m-4'>
        <NavLink className={({ isActive }) =>
              isActive ? 'navLinkAct' : 'navLink'
            } to='/home'>Home</NavLink>
        <NavLink className={({ isActive }) =>
              isActive ? 'navLinkAct' : 'navLink'
            } to="/" >Log-in</NavLink>
      </Stack>
      </div>
    )
}