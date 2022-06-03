let video = document.getElementsByClassName("videosol")[0];
// let velocidade = video.playbackRate;
// let paragrafo = document.getElementsById("velocity");

function play() {
  video.play();
  video.playbackRate = 1.0;
  let velocidade = video.playbackRate;
  let paragrafo = document.getElementById("velocity");
  paragrafo.innerHTML = velocidade;
}

function pause() {
  video.pause();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function slow() {
  if (video.playbackRate >= 0.6) {
    video.playbackRate -= 0.1;
  } else {
    video.playbackRate = 0.5;
  }
  let velocidade = video.playbackRate;
  let paragrafo = document.getElementById("velocity");
  paragrafo.innerHTML = velocidade;
}

function fast() {
  video.playbackRate += 0.1;
  let velocidade = video.playbackRate;
  let paragrafo = document.getElementById("velocity");
  paragrafo.innerHTML = velocidade;
}

function retroceder() {
  video.currentTime -= 10;
}

function avancar() {
  video.currentTime += 10;
}
