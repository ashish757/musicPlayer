import { ListMusic } from "lucide-react";
import "./queue.css";

export default function Queue({ queue }) {
  if (queue.length === 0) {
    return (
      <div className="queue-empty">
        <ListMusic size={32} opacity={0.2} />
        <p>The queue is empty.</p>
        <span>Add a track from the library.</span>
      </div>
    );
  }

  return (
    <div className="queue-list">
      {queue.map((track, index) => (
        <div key={`${track.id}-${index}`} className="queue-item">
          <span className="queue-index">{index + 1}</span>
          <span className="queue-title">{track.title}</span>
        </div>
      ))}
    </div>
  );
}