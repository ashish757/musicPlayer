import { Play, Pause, SkipForward, Volume2 } from "lucide-react";
import "./player.css";

export default function Player({ 
  currentTrack, setCurrentTrack, isPlaying, setIsPlaying, audioRef, queue, setQueue 
}) {
  
  const togglePlay = () => {
    if (!currentTrack && queue.length > 0) {
      handleSkip(); // Start the jukebox if nothing is playing
      return;
    }
    if (!currentTrack) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  const handleSkip = () => {
    if (queue.length === 0) {
      setCurrentTrack(null);
      setIsPlaying(false);
      return;
    }
    
    const nextTrack = queue[0];
    setCurrentTrack(nextTrack);
    setQueue(prev => prev.slice(1));

    // Wait a tick for React to render the new src to the <audio> tag, then play
    setTimeout(() => {
      audioRef.current.play().then(() => setIsPlaying(true));
    }, 0);
  };

  const handleVolume = (e) => {
    if (audioRef.current) {
      audioRef.current.volume = parseFloat(e.target.value);
    }
  };

  return (
    <div className="player-container">
      {/* Now Playing Info */}
      <div className="now-playing">
        {currentTrack ? (
          <div className="track-info">
            <span className="label">NOW PLAYING</span>
            <span className="title">{currentTrack.title}</span>
          </div>
        ) : (
          <span className="idle-text">Jukebox Idle</span>
        )}
      </div>

      {/* Center Controls */}
      <div className="playback-controls">
        <button className="control-btn play-btn" onClick={togglePlay}>
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
        </button>
        <button className="control-btn skip-btn" onClick={handleSkip} disabled={queue.length === 0}>
          <SkipForward size={20} />
        </button>
      </div>

      {/* Right Controls: Volume */}
      <div className="volume-control">
        <Volume2 size={18} color="var(--text-secondary)" />
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.05" 
          defaultValue="1" 
          onChange={handleVolume}
        />
      </div>
    </div>
  );
}