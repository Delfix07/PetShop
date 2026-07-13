import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Options() {
  return (
    <DropdownButton id="dropdown-basic-button" title="☰">
      <Dropdown.Item href="#/action-1">Usuario</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Ayuda</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Cerrar sesión</Dropdown.Item>
    </DropdownButton>
  );
}

