class Helper {
  playPauseAndUpdate(song) {

    player.playPause(song);

    //sets total-time to song length
    const songLength = player.getDuration();
    $('#time-control .total-time').text( songLength );
  }
}

const helper = new Helper();
