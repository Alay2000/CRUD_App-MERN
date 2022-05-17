import { Link } from "react-router-dom"
const Header=()=>{
    const params="";
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <Link to="/list">
                CRUD APP
            </Link>
            <div className="container-fluid">
                <ul className="navbar-ul mr-auto">
                    <li className="navbar-item">
                        <Link to="/Create" className="nav-link">Create User</Link>
                    </li>
                    <li>
                        <Link to='/list' className="nav-link">List User</Link>
                    </li>
                    <li>
                        <Link to={`/edit/${params}`} className="nav-link">Edit User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;