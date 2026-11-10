import { ArrowLeft, Clock, Plus } from "lucide-react";
import "./albumView.css";
import type { Album, Track } from "../types";

interface Props {
  album: Album,
  onAddToQueue: (track: Track) => void,
  setView: (view: string) => void,
}

export default function AlbumView({ album, onAddToQueue, setView }: Props) {
  if (!album) return null;

  return (
    <div className="album-view">
      <button className="back-button" onClick={() => setView("home")}>
        <ArrowLeft size={20} />
      </button>

      <div className="album-hero">
        <div className="cover-wrapper">
          <img 
            src={album.coverArt || "https://via.placeholder.com/250"} 
            alt={album.title} 
          />
        </div>
        <div className="album-details">
          <span className="label">Album</span>
          <h1 className="title">{album.title}</h1>
          <p className="artist">{album.artist}</p>
          <p className="meta">{album.tracks?.length || 0} tracks</p>
        </div>
      </div>

      <div className="tracklist-container">
        <div className="tracklist-header">
          <div className="col-index">#</div>
          <div className="col-title">Title</div>
          <div className="col-duration"><Clock size={16} /></div>
          <div className="col-action"></div>
        </div>

        <div className="tracklist">
          {album.tracks?.map((track, index) => (
            <div key={track.id} className="track-row">
              <div className="col-index">{index + 1}</div>
              <div className="col-title">{track.title}</div>
              <div className="col-duration">{track.duration}</div>
              <div className="col-action">
                <button 
                  className="add-btn" 
                  onClick={() => onAddToQueue(track)}
                  title="Add to Queue"
                >
                  <Plus size={18} />
                  <span>Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}