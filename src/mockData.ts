import type { Album } from "./types";

export const mockAlbums: Album[] = [
  {
    id: "a1",
    title: "Fine Line",
    artist: "Harry Styles",
    coverArt: "/covers/mojave.jpg", 
    tracks: [
      { id: "t1", title: "Golden",  url: "" },
      { id: "t2", title: "Watermelon Sugar", url: "" }
    ]
  },
  {
    id: "a2",
    title: "Raaz",
    artist: "Alka Yagnik",
    coverArt: "/covers/frontier.jpg",
    tracks: [
      { id: "t3", title: "Aapke Pyar Mein Hum", url: "" },
      { id: "t4", title: "Jo Bhi Kasmein", url: "" }
    ]
  }
];
