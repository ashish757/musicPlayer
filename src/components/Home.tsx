import "./home.css";
import { mockAlbums } from "../mockData"; 

export default function Home({ setView, setActiveAlbum }) {
  const handleAlbumClick = (album) => {
    setActiveAlbum(album);
    setview("album")
  }

  return (
    <div className="home">
      <h2>Available Albums</h2>
      <div className="album-grid">
        {mockAlbums.map((album) => (
          <div 
            key={album.id} 
            className="album-card"
            onClick={() => handleAlbumClick(album)}
          >
            <div className="cover-wrapper">
              <img 
                src={album.coverArt || "https://via.placeholder.com/150"} 
                alt={album.title} 
              />
            </div>
            <div className="album-info">
              <h3>{album.title}</h3>
              <p>{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}