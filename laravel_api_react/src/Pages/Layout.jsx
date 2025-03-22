import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
      
    <header>
        <nav className="lg:flex lg:items-stretch lg:justify-end ml-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <div className="space-x-4">
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>
          
        </nav>
    </header>
            {/* <header className="bg-blue-400">
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <div>
                        <Link to="/register" className="nav-link">Register</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                    </div>
                </nav>
            </header> */}

            <main>
                <Outlet />
            </main>
        </>
    );
}