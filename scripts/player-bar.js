{
  //play/pause button
  $('button#play-pause').on('click', function() {
    helper.playPauseAndUpdate();
    $(this).attr('playState', player.playState);
  });

  //skip forward button
  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    helper.playPauseAndUpdate(nextSong);
  });

  //skip backward button
  $('button#previous').on('click', function () {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

    if (currentSongIndex === 0) { return; }

    const previousSongIndex = currentSongIndex - 1;
    const previousSong = album.songs[previousSongIndex];
    helper.playPauseAndUpdate(previousSong);
  });

  //time slider responds to user
  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  //time slider accounts for song's time
  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const timeInMinSec = player.prettyTime(currentTime);
    console.log(timeInMinSec);
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( timeInMinSec );
    $('#time-control input').val(percent);
  }, 1000);

  //volume slider responds to user
  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });
}
