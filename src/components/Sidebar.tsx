import { Home, Library, Search } from "lucide-react";
import "./sidebar.css";


interface Props {
    currentView: string;
    setView: (view: string) => void;
}

export default function Sidebar({ currentView, setView } : Props) {
    return  (
        <aside className="sidebar">
            <h1>Saloon Jukebox</h1>

            <div className="views">
                <div 
                  className={`view ${currentView === 'search' ? 'active' : ''}`}
                  onClick={() => setView('search')}
                >
                    <div className="icon"><Search/></div>
                    <p>Search</p>
                </div>
                 <div 
                  className={`view ${currentView === 'home' || currentView === 'albumDetail' ? 'active' : ''}`}
                  onClick={() => setView('home')}
                >
                    <div className="icon"><Home/></div>
                    <p>Home</p>
                </div>
                 <div 
                  className={`view ${currentView === 'library' ? 'active' : ''}`}
                  onClick={() => setView('library')}
                >
                    <div className="icon"><Library/> </div>
                    <p>Library</p>
                </div>
            </div>
        </aside>
    );
}