import { Home, Library, Search } from "lucide-react";
import "./sidebar.css";

export default function Sidebar() {
    return  (
        <aside className="sidebar">
            <h1>Saloon Jukebox</h1>

            <div className="views">
                <div className="view">
                    <div className="icon"><Search/></div>
                    <p>Search</p>
                </div>
                 <div className="view">
                    <div className="icon"><Home/></div>

                    <p>Home</p>
                </div>
                 <div className="view">
                    <div className="icon"><Library/> </div>

                    <p>Library</p>
                </div>
            </div>

        </aside>
    )
}

