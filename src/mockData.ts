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
  coverArt: string; // URL or path to the album cover image
  tracks: Track[];
}



export const mockAlbums = [
  {
    id: "a1",
    title: "Midnight in the Mojave",
    artist: "The Dusty Drifters",
    coverArt: "/covers/mojave.jpg", 
    tracks: [
      { id: "t1", title: "Coyote Call", duration: "3:42", url: "" },
      { id: "t2", title: "Red Rock Echo", duration: "4:15", url: "" }
    ]
  },
  {
    id: "a2",
    title: "Piano on the Frontier",
    artist: "Saloon Sadie",
    coverArt: "/covers/frontier.jpg",
    tracks: [
      { id: "t3", title: "Whiskey Keys", duration: "2:50", url: "" },
      { id: "t4", title: "Bounty Hunter Blues", duration: "3:10", url: "" }
    ]
  }
];
