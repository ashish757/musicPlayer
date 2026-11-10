import { Upload } from "lucide-react";
import { saveTrackToDB } from "../db";
import "./uploader.css";

export default function Uploader({ setLibrary }) {
  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const newTracks = await Promise.all(files.map(async (file) => {
      const id = crypto.randomUUID();
      
      await saveTrackToDB(id, file); 
      
      return {
        id,
        title: file.name.replace(/\.[^/.]+$/, ""),
        url: URL.createObjectURL(file)
      };
    }));

    setLibrary((prev) => [...prev, ...newTracks]);
    
    e.target.value = null; 
  };

  return (
    <div className="uploader-container">
      <label className="upload-button">
        <Upload size={18} />

        <span>Upload (mp3, m4a, FLAC, WAV)</span>
        <input 
          type="file" 
          accept="audio/*" 
          multiple 
          onChange={handleFileUpload} 
          hidden 
        />
      </label>
    </div>
  );
}