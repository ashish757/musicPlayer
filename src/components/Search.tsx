
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { mockAlbums } from "../mockData";
import "./search.css";
import type {Album} from "../types"

  
interface Props {
  setView: (view: string) => void;
  setActiveAlbum: (album: Album) => void;
}

export default function Search({ setView, setActiveAlbum }: Props) {
  const [query, setQuery] = useState("");

  const filteredAlbums = mockAlbums.filter(album => 
    album.title.toLowerCase().includes(query.toLowerCase()) ||
    album.artist.toLowerCase().includes(query.toLowerCase())
  );

  const handleAlbumClick = (album : Album) => {
    setActiveAlbum(album);
    setView("albumDetail");
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <div className="search-input-wrapper">
          <SearchIcon className="search-icon" />
          <input 
            type="text" 
            placeholder="Search for albums or artists..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
      </div>

      <div className="search-results">
        {query && <h2>Results for "{query}"</h2>}
        
        {filteredAlbums.length > 0 ? (
          <div className="album-grid">
            {filteredAlbums.map((album) => (
              <div 
                key={album.id} 
                className="album-card"
                onClick={() => handleAlbumClick(album)}
              >
                <div className="cover-wrapper">
                  <img src={album.coverArt || "https://via.placeholder.com/150"} alt={album.title} />
                </div>
                <div className="album-info">
                  <h3>{album.title}</h3>
                  <p>{album.artist}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No albums found.</p>
          </div>
        )}
      </div>
    </div>
  );
}