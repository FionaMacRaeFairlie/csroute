import { NavLink } from 'react-router-dom'

const Navbar = () => {  
            const navStyle={
                padding: "1%",
                margin: "1%",
                } 
  return (
    <div>
      <NavLink style={navStyle} to="/" exact>Home</NavLink>
      <NavLink style={navStyle} to="/about" exact>About</NavLink>
      <NavLink style={navStyle} to="/friends" exact>Friends</NavLink>
      <NavLink style={navStyle} to="/props-through-render">Props through render</NavLink>
      <NavLink style={navStyle} to="/fourth">Fourth</NavLink>
    </div>
  )
}
export default Navbar;