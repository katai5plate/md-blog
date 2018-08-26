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
      contents.list.map((elem, index) => (
        <NavDropdown title={elem.head} key={index} id={elem.head} >{
          elem.items.map((item, i) => (
            <MenuItem href={item.href} key={i} id={item.name}>{
              item.name
            }</MenuItem>
          ))
        }</NavDropdown>
      ))
    }</Nav>
  </Navbar>
)