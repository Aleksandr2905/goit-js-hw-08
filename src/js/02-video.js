import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('eventName', function(data) {
    
    });

    var callback = function() {};

    player.off('eventName', callback);