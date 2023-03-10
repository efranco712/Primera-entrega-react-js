import './NavBar.css'

const NavBar = () => {
return (
    <nav className="NavBar">
        <h1>Ecomemerce</h1>
        <div>
            <button className='btn btn-dark'>Celulares</button>
            <button>Notebooks</button>
            <button>Tablet</button>
            <button>Scooter</button>
            <button>Tarjetas gráficas</button>
            <button>Ram</button>
        </div>
    </nav>
)
}
export default NavBar