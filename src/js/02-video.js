import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(STORAGE_KEY, seconds);
  }, 500)
);

window.addEventListener('load', onload);

function onload() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    player.setCurrentTime(data);
  } catch (error) {
    console.log(error.message);
  }
}
