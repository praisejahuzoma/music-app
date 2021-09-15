const music = document.querySelector('audio');
const img = document.querySelector("img");
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [
    {
    name: "img1",
        title: "HERE'S YOUR PERFECT",
    artist: "Jmie Miller",
    },
    {
        name: "img2",
        title: "Lalisa",
        artist: "Lisa",
    },
    {
        name: "img3",
        title: "Butter",
        artist: "Bts",
    },
]

let isPlaying = false;

// for play function 
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('bx-play', "bx-pause");
    img.classList.add("anime");
};

// for pause function 
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("bx-pause", "bx-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});

// changing the music data 

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "image/" + songs.name + ".jpg";
};
songIndex = 0;
// loadSong(songs[2]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
