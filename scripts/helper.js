class Helper {
  playPauseAndUpdate(song) {

    player.playPause(song);

    //sets total-time to song length
    const songLength = player.currentlyPlaying.duration;
    const totalTime = player.prettyTime(songLength);
    $('#time-control .total-time').text( totalTime );
  }
}

const helper = new Helper();
