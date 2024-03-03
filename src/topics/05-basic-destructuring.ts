interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
};

const song = 'New Song';
// Option #1
const {
    song: anotherSong,
    songDuration: duration,
    details
    // details: {author}
} = audioPlayer;

// Option #2
const {author} = details

console.log('Song: ', song);
console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);

const [, , trunks = 'Not found'] : string[] = ['Goku', 'Vegeta']
// const trunks = dbz[3] || 'No hay personaje'

console.log('Personaje 3', trunks);


export {};