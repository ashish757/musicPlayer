import { Plus } from "lucide-react";
import "./library.css";

export default function Library({ library, onAddToQueue }) {
  if (library.length === 0) {
    return (
      <div className="library-empty">
        <p>No tracks loaded.</p>
        <span>Use the Load Music panel to add your audio files.</span>
      </div>
    );
  }

  return (
    <div className="library-list">
      {library.map((track, index) => (
        <div key={track.id} className="library-track">
          <span className="track-index">{index + 1}</span>
          <span className="track-title">{track.title}</span>
          
          <button 
            className="queue-add-btn" 
            onClick={() => onAddToQueue(track)}
            title="Add to queue"
          >
            <Plus size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}