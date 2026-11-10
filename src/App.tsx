// import { useState, useRef } from 'react';
// import { mockAlbums } from './mockData';
import Sidebar from './components/Sidebar';
// import HomeView from './components/HomeView';
// import AlbumDetailView from './components/AlbumDetailView';
// import BottomPlayer from './components/BottomPlayer';
import "./App.css";


export default function App() {
  // const [currentView, setCurrentView] = useState('home'); 
  // const [activeAlbum, setActiveAlbum] = useState(null); 
  
  // const [queue, setQueue] = useState([]);
  // const [currentTrack, setCurrentTrack] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [isQueueVisible, setIsQueueVisible] = useState(false);
  
  // const audioRef = useRef(null);

  // const renderMainContent = () => {
  //   switch (currentView) {
  //     case 'home':
  //       return <HomeView albums={mockAlbums} onViewAlbum={(album) => {
  //         setActiveAlbum(album);
  //         setCurrentView('album');
  //       }} />;
  //     case 'album':
  //       return <AlbumDetailView album={activeAlbum} onAddToQueue={(track) => setQueue(prev => [...prev, track])} />;
  //     case 'search':
  //       return <p>Search View Placeholder</p>; 
  //     case 'library':
  //       return <p>Saved Albums Placeholder</p>;
  //     default:
  //       return <HomeView albums={mockAlbums} />;
  //   }
  // };

  return (
    <div className="layout-grid">
      <Sidebar />
      
      {/* <main className="main-content">
        {renderMainContent()}
      </main>

      <BottomPlayer 
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        toggleQueue={() => setIsQueueVisible(!isQueueVisible)}
      />

      {isQueueVisible && (
        <aside className="queue-drawer">
           <h2>Up Next</h2>
        
        </aside>
      )}

      <audio ref={audioRef} src={currentTrack?.url} /> */}

    </div>
  );
}