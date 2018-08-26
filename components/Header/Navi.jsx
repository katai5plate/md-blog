import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import contents from '../../data/Navi.json';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href={contents.title.href}>{
          contents.title.name
        }</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>{
      contents.list.map(elem => (
        <NavDropdown title={elem.head}>{
          elem.items.map(item => (
            <MenuItem href={item.href}>{
              item.name
            }</MenuItem>
          ))
        }</NavDropdown>
      ))
    }</Nav>
  </Navbar>
)