
const NavBar = () => {
  
    const navBarOptions = ["About", "Portfolios", "Resume", "Contact"];

    return (
    <nav className="NavBar">
        <div className="NavBarLogo">Josh Castillo</div>
        <div className="NavBarOptions">
            {navBarOptions.map((option) => (<span> {option}</span>))}
        </div>

    </nav>
  )
}

export default NavBar