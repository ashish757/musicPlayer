import type { Album } from "./types";

export const mockAlbums: Album[] = [
  {
    id: "a1",
    title: "Fine Line",
    artist: "Harry Styles",
    coverArt: "/covers/mojave.jpg", 
    tracks: [
      { id: "t1", title: "Golden", duration: "3:42", url: "" },
      { id: "t2", title: "Watermelon Sugar", duration: "4:15", url: "" }
    ]
  },
  {
    id: "a2",
    title: "Raaz",
    artist: "Alka Yagnik",
    coverArt: "/covers/frontier.jpg",
    tracks: [
      { id: "t3", title: "Aapke Pyar Mein Hum", duration: "2:50", url: "" },
      { id: "t4", title: "Jo Bhi Kasmein", duration: "3:10", url: "" }
    ]
  }
];
