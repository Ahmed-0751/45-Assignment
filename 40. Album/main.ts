// Write a function called make_album(). The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
function make_album(_artistName:string, _albumTitle:string){
    let dictionaries = {
        artist : _artistName,
        album : _albumTitle
    };
    return dictionaries;
};

let album = make_album("Ali Zafar", "Jhoom");
console.log(album);

album = make_album("Dua Lipa", "Nostalgia");
console.log(album);

album = make_album("Fueled by Ramen","The Papercut Chronicles");
console.log(album);
