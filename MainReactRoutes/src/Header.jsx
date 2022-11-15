import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div>
      <NavLink end to='/'>
        Home
      </NavLink>
      {' | '}
      <NavLink to='todo'>Todo</NavLink>
      {' | '}
      <NavLink to='calculadora-boteco'>Calculadora de Boteco</NavLink>
    </div>
  );
}
