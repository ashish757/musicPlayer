const DB_NAME = "saloonJukebox";
const STORE_NAME = "tracks";


const initDB = () => {
    return new Promise((res, rej) => {
        const req = indexedDB.open(DB_NAME, 1);

        req.onupgradeneeded = (event) => {
            const db = event.target.result;
            if(!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };

        // FIX: Move these outside of the onupgradeneeded block!
        req.onsuccess = () => res(req.result);
        req.onerror = (event) => rej(event.target.error);
    })
}



export const saveTrackToDB = async (id, file) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    
    store.put(file, id); 

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};


export const loadTracksFromDB = async () => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    
    const requestFiles = store.getAll();
    const requestKeys = store.getAllKeys();

    tx.oncomplete = () => {
      const files = requestFiles.result;
      const keys = requestKeys.result;
      
      const tracks = files.map((file, index) => ({
        id: keys[index],
        title: file.name.replace(/\.[^/.]+$/, ""),
        url: URL.createObjectURL(file)
      }));
      
      resolve(tracks);
    };
    
    tx.onerror = () => reject(tx.error);
  });
};