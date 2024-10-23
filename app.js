const playList = [
    {
      title: 'Campana sobre campana',
      artist: 'Navidad',
      img: 'multimedia/imagenes/Campana.jpg',
      song: 'multimedia/canciones/Campana Sobre Campana  Canciones de Navidad para Niños _ Heykids.mp3'
    },
    {
      title: 'Eclusive',
      artist: 'Blessd',
      img: 'multimedia/imagenes/Exclusive.jpg',
      song: 'multimedia/canciones/BLESSD _ EXCLUSIVE .mp3'
    },
    {
      title: 'Movimiento narajan',
      artist: 'peruanito',
      img: 'multimedia/imagenes/naranja.jpg',
      song: 'multimedia/canciones/Na na na na na... Movimiento Naranja (VIDEO COMPLETO) (1).mp3'
    }
  ]

  window.addEventListener('DOMContentLoaded', makeSongs);
  let Index = 0; 

  function makeSong(song) {
      const container = document.createElement('div');
      container.id = 'container-player';
      container.classList.add('container-player');
  
      const title = document.createElement('h1');
      title.innerText = "Play Music";
  
      const Album = document.createElement('div');
      Album.id = 'controls';
      Album.classList.add('container-album');
  
      const Controls = document.createElement('div');
      Controls.id = 'player_controls';
      Controls.classList.add('player_controls');
  
      const Buttoms = document.createElement('div');
      Buttoms.classList.add("player_controls");
  
      const imgCard = document.createElement('img');
      imgCard.src = song.img;
  
      const titleArtist = document.createElement('h2');
      titleArtist.classList.add('player__artist');
      titleArtist.innerHTML = song.artist;
  
      const titleSong = document.createElement('h3');
      titleSong.classList.add('player__song');
      titleSong.innerHTML = song.title;
  
      const audio = document.createElement('audio');
      audio.classList.add('player__audio');
      audio.controls = true;
      audio.id = 'audio';
  
      const source = document.createElement('source');
      source.src = song.song; 
  
      audio.appendChild(source);
      audio.load();
  
      
      const changeSongMore= document.createElement('i')
      changeSongMore.classList.add('bx', 'bxs-chevron-right')
      changeSongMore.id = 'TenMore'
  
      const changeSongLess= document.createElement('i')
      changeSongLess.classList.add('bx', 'bxs-chevron-left')
      changeSongLess.id = 'TenLess'
  
      const rewindSong = document.createElement('i');
      rewindSong.classList.add('bx', 'bx-rewind');
      rewindSong.id = 'rewind';
  
      const playSong = document.createElement('i');
      playSong.classList.add('bx', 'bx-play');
      playSong.id = 'play';
  
      const stopSong = document.createElement('i');
      stopSong.classList.add('bx', 'bx-stop');
      stopSong.id = 'stop';
  
      const pauseSong = document.createElement('i');
      pauseSong.classList.add('bx', 'bx-pause');
      pauseSong.id = 'pause';
  
      const forwardSong = document.createElement('i');
      forwardSong.classList.add('bx', 'bx-fast-forward');
      forwardSong.id = 'forward';
  
      container.appendChild(title);
      container.appendChild(Album);
      Album.appendChild(imgCard);
      Album.appendChild(titleArtist);
      Album.appendChild(titleSong);
      container.appendChild(Controls);
      Controls.appendChild(audio);
      Controls.appendChild(Buttoms);
      Buttoms.appendChild(rewindSong);
      Buttoms.appendChild(changeSongLess)
      Buttoms.appendChild(playSong);
      Buttoms.appendChild(stopSong);
      Buttoms.appendChild(pauseSong);
      Buttoms.appendChild(changeSongMore)
      Buttoms.appendChild(forwardSong);
  
  
      document.querySelector('main').appendChild(container);
  
      // Añadir eventos a los botones
      
      
      rewindSong.addEventListener('click',()=>{
          audio.currentTime-=10
      })
      forwardSong.addEventListener('click',()=>{
          audio.currentTime+=10
      })
      playSong.addEventListener('click', () => {
          audio.play();
      });
  
      pauseSong.addEventListener('click', () => {
          audio.pause();
      });
  
      stopSong.addEventListener('click', () => {
          audio.pause();
          audio.currentTime = 0; 
      });
  
      changeSongMore.addEventListener('click', () => {
        Index = (Index + 1) % playList.length; 
          loadSong(playList[Index]);
      });
  
      changeSongLess.addEventListener('click', () => {
        Index = (Index - 1 + playList.length) % playList.length; 
          loadSong(playList[Index]);
      });
  }
  
  function loadSong(song) {
      const audio = document.getElementById('audio');
      const imgCard = document.querySelector('.container-player img');
      const titleArtist = document.querySelector('.player__artist');
      const titleSong = document.querySelector('.player__song');
  
      audio.src = song.song; 
      imgCard.src = song.img; 
      titleArtist.innerHTML = song.artist; 
      titleSong.innerHTML = song.title; 
      audio.load();
      audio.play(); 
  }
  
  function makeSongs() {
      makeSong(playList[Index]); 
  }