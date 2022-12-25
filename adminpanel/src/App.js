import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar style={{ flexDirection: "row", backgroundColor: "blue", color: "white" }}>
        <NavbarBrand href="/" style={{ color: "white", marginLeft: "2rem" }}>Admin Panel</NavbarBrand>
        <Nav className="me-auto" navbar style={{ flexDirection: "row" }}>
          <NavItem>
            <NavLink href="/table" style={{ color: "white", marginLeft: "2rem" }}>Table</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/add" style={{ color: "white", marginLeft: "1.5rem" }}>
              Add new
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
