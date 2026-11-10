import { useState, useEffect, useRef } from "react";
import Library from "./components/Library";
import Uploader from "./components/Uploader";
import Queue from "./components/Queue";
import Player from "./components/Player";
import "./App.css";
import type { Track } from "./types";
import { loadTracksFromDB } from "./db";

export default function App() {
  const [library, setLibrary] = useState<Track[]>([
    { 
      id: "track-1", 
      title: "295", 
      url: "/music/295.mp3",
    },
    { 
      id: "track-2", 
      title: "Agar Tum Saath Ho", 
      url: "/music/agarTumSaathHo.mp3" 
    }
  ]);
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const addToQueue = (track: Track) => {
    setQueue(prev => [...prev, track]);
  };


useEffect(() => {
    const initializeLibrary = async () => {
      try {
        const savedTracks = await loadTracksFromDB();
        if (savedTracks.length > 0) {
          setLibrary(prev => [...prev, ...savedTracks]);
        }
      } catch (error) {
        console.error("Failed to load tracks from IndexedDB:", error);
      }
    };
    
    initializeLibrary();
  }, []);


  return (
    <div className="saloon-layout">
      <section className="panel-library">
        <h2>Available Tracks</h2>
        <Library library={library} onAddToQueue={addToQueue} />
      </section>

      <section className="panel-right">
        <div className="uploader-section">
          <h2>Load Music</h2>
          <Uploader setLibrary={setLibrary} />
        </div>
        
        <div className="queue-section">
          <h2>Up Next</h2>
          <Queue queue={queue} />
        </div>
      </section>

      <footer className="panel-player">
        <Player 
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          queue={queue}
          setQueue={setQueue}
          setCurrentTrack={setCurrentTrack}
        />
        <audio 
          ref={audioRef} 
          src={currentTrack?.url} 
          onEnded={() => {
            if (queue.length > 0) {
              const nextTrack = queue[0];
              setCurrentTrack(nextTrack);
              setQueue(prev => prev.slice(1));
              setTimeout(() => {
                audioRef.current?.play().then(() => setIsPlaying(true));
              }, 0);
            } else {
              setCurrentTrack(null);
              setIsPlaying(false);
            }
          }}
        />
      </footer>
    </div>
  );
}