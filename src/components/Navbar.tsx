interface NavbarProps {
  features: {[key: string]: string},
  company: string[]
}

const Navbar = ({features, company}:NavbarProps) => {
  return (
    <div className="navbar-container">
      <div className="navbar"></div>
    </div>
  )
}

export default Navbar
