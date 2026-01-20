import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ background: "#222", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", marginRight: "15px" }}>About</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </nav>
  );
}

export default Header;
