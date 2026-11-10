import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Search from "./components/Search";
import AlbumView from "./components/AlbumView"; 
import "./App.css"; 
import type { Album, Track } from "./types";

export default function App() {
  const [currentView, setCurrentView] = useState("home"); 
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);

  const [queue, setQueue] = useState<Track[]>([]);
  const audioRef = useRef(null);

  const renderMainContent = () => {
    switch (currentView) {
      case "home":
        return <Home setView={setCurrentView} setActiveAlbum={setActiveAlbum} />;
      case "search":
        return <Search setView={setCurrentView} setActiveAlbum={setActiveAlbum} />;
      case "album":
        return (
          activeAlbum && <AlbumView 
            album={activeAlbum} 
            onAddToQueue={(track: Track) => setQueue(prev => [...prev, track])}
            setView={setCurrentView}
          />
        );
      case "library":
        return <div className="placeholder-view"><h2>Library (Coming Soon)</h2></div>;
      default:
        return <Home setView={setCurrentView} setActiveAlbum={setActiveAlbum} />;
    }
  };


  useEffect(() => {
    console.log(queue);
  }, [queue]);
  return (
    <div className="app-layout">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      
      <main className="main-viewport">
        {renderMainContent()}
      </main>

      {/* Bottom Player placeholder to complete the layout grid */}
      <footer className="bottom-player">
        <p>Player Controls Area</p>
        <audio ref={audioRef} />
      </footer>
    </div>
  );
}