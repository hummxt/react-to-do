import "./Header.css"
import "../../index.css"
import { Link } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import TodoAdd from "../../pages/TodoAdd/TodoAdd";

function Header() {
    return (
        <>
            <div className="container max-w-full min-h-full">
                <header className="w-full h-[120px] flex items-center justify-around m-auto bg-cyan-800 text-slate-50">
                    <Link to="/" className="text-2xl font-semibold ml-20">To-Do List</Link>
                    <Link to="/todoadd" className="text-2xl font-semibold ml-20">To-Do Add</Link>
                </header>
            </div>
        </>
    )
}

export default Header;