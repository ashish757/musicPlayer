export interface Track {
  id: string;
  title: string;
  duration: string; 
  url: string; 
}


export interface Album {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  tracks: Track[];
}