class Helper {
  playPauseAndUpdate(song) {

    player.playPause(song);

    //sets total-time to song length
    const duration = player.getDuration();
    $('#time-control .total-time').text( duration );
  }
}

const helper = new Helper;
