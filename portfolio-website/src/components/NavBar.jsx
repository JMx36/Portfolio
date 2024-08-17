
const NavBar = () => {
  
    const navBarOptions = ["About", "Portfolios", "Resume", "Contact"];

    return (
    <nav className="NavBar">
        <div className="NavBarLogo"><a href="index.html" className="LogoButton cursive-button yellow-hover">Josh Castillo</a></div>
        <div className="NavBarOptions thin-white-text ">
            {navBarOptions.map((option) => (<a href="index.html" className="NavBarButton yellow-hover"> {option}</a>))}
        </div>

    </nav>
  )
}

export default NavBar