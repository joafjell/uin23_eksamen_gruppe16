import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div className="container">
            <header>
                <Link to="/">
                    <h1 className="Title">Gamesite</h1>
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <a href="https://rawg.io/apidocs">Api er hentet fra APIet til RAWG</a>
            </footer>
        </div>
    )
}