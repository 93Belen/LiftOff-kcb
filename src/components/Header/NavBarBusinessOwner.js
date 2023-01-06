import {Stack} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavBarBusinessOwner = () => {
    return (
      <div className='navDiv'>
        <Stack
        id='navBarSearcher'
      direction='horizontal'
      className='m-4'>
        <NavLink className={({ isActive }) =>
              isActive ? 'navLinkAct' : 'navLink'
            } to='/businessowner/home'>Home</NavLink>
        <NavLink className={({ isActive }) =>
              isActive ? 'navLinkAct' : 'navLink'
            } to="/businessowner/search" >Search</NavLink>
        <NavLink className={({ isActive }) =>
              isActive ? 'navLinkAct' : 'navLink'
        } to="/businessowner/liked" >Liked</NavLink>
      </Stack>
      </div>
    )
}