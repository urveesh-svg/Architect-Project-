import { NavLink } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Team", "/team"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <NavLink to="/" className="brand">ARCHBUILD</NavLink>
        <div className="nav-links">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === "/"}>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
