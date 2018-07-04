var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    },
             },
  printPlaylists: function () {
                    for(var playlist in this.playlists){
                    var tempPlaylist = this.playlists[playlist];
                    console.log(tempPlaylist.id + ": " + tempPlaylist.name + " - " + tempPlaylist.tracks.length + ' tracks');
                  }
                },
  printTracks : function () {
              for(var track in this.tracks){
                var tempTrack = this.tracks[track];
                console.log(tempTrack.id + ": " + tempTrack.name + " by " + tempTrack.artist + " (" + tempTrack.album + ")");
             }
            }
}

// library.printPlaylists();
library.printTracks();


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for(var playlist in library.playlists){
    var tempPlaylist = library.playlists[playlist];
    console.log(tempPlaylist.id + ": " + tempPlaylist.name + " - " + tempPlaylist.tracks.length + ' tracks');
  }
}

//printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for(var track in library.tracks){
    var tempTrack = library.tracks[track];
    console.log(tempTrack.id + ": " + tempTrack.name + " by " + tempTrack.artist + " (" + tempTrack.album + ")");
  }
}

//printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlist = library.playlists[playlistId];
  console.log(playlist.id + ": " + playlist.name + " - " + playlist.tracks.length + ' tracks');

  var playlistTracks = playlist.tracks;
  var tracks = library.tracks;
  for(var i = 0; i < playlistTracks.length; i++){
    var tempTrack = tracks[playlistTracks[i]];
    console.log(tempTrack.id + ": " + tempTrack.name + " by " + tempTrack.artist + " (" + tempTrack.album + ")");
  }
}

//printPlaylist('p02');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playlist = library.playlists[playlistId];

  if(!playlist.tracks.includes(trackId)){
    playlist.tracks.push(trackId);
  }
}

//addTrackToPlaylist('t03', 'p02');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {
  var id = uid();

  var tempTrack ={
    'id': id,
    'name': name,
    'artist': artist,
    'album': album
  };

  library.tracks[id] = tempTrack;
}


// adds a playlist to the library

var addPlaylist = function (name) {
  var id = uid();

  var tempPlaylist ={
    'id': id,
    'name': name,
    'tracks': []
  };

  library.playlists[id] = tempPlaylist;
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  var tracks = library.tracks;
  var results = [];

  for(var track in tracks){
    for(var property in tracks[track]){
      console.log(track, property);
      if(tracks[track][property].search(query) != -1){
        results.push(track);
      }
    }
  }

  console.log(results);
}






























