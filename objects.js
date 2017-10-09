var playlist = {jayz: "blueprint", nas: "rewind", biggie: "juicy"}

function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign ( {}, playlist, {[artistName] : songTitle})
}

function removeFromPlaylist(playlist, artistName) {

     return delete playlist.;
}
