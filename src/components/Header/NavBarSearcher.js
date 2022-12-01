import {Stack} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavBarSearcher = () => {
    return (
      <div className='navDiv'>
        <Stack
        id='navBarSearcher'
      direction='horizontal'
      className='m-4'>
        <NavLink className={({ isActive }) =>
              isActive ? 'navLinkAct' : 'navLink'
            } to='/'>Search</NavLink>
        <NavLink className={({ isActive }) =>
              isActive ? 'navLinkAct' : 'navLink'
            } to="/liked" >Liked</NavLink>
      </Stack>
      </div>
    )
}