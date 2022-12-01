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
            } to='/'>Home</NavLink>
        <NavLink className={({ isActive }) =>
              isActive ? 'navLinkAct' : 'navLink'
            } to="/search" >Search</NavLink>
      </Stack>
      </div>
    )
}