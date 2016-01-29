var Jukebox = {
	
	playList: ["daft_punk/alive_2007/08-OneMoreTime,Aerodynamic.mp3","daft_punk/alive_2007/05-AroundTheWorld,HarderBetterFasterStronger.mp3","daft_punk/alive_2007/01-Robot Rock,OhYeah.mp3","daft_punk/alive_2007/04-TooLong,SteamMachine.mp3"],
	currentSong: 0,

	choice: document.getElementById("playlist").value,
	
	play: function(){
			document.getElementById("song").setAttribute("src", this.playList[this.currentSong]);
			document.getElementById("song").play();
	},

	pause: function(){
				document.getElementById("song").pause();
	},

	next: function(){
			this.currentSong++;
			if (this.currentSong > this.playList.length - 1){
				this.currentSong = 0;
			}
			document.getElementById("song").setAttribute("src", this.playList[this.currentSong]);
				this.play();
	},
	prev: function(){
			this.currentSong--;
			if (this.currentSong < 0){
				this.currentSong = 0;
			}
			document.getElementById("song").setAttribute("src",this.playList[this.currentSong]);
				this.play();
	},
	
	
	select: function(){
			this.currentSong = document.getElementById("playlist").value;
			console.log(document.getElementById("playlist").value)
		
	}
}




// prev: document.getElementById("prev-button").onclick = function(){

// }

// document.getElementById("volume").oninput = function(){
// 	x.volume-= 0.1;
// }
// function(){
// 	document.getElementById("volume").volume = -0.01
// }
// document.getElementById("volumedown").onclick= function(){
// volume-=-0.1
// }

// maxVolume.addEventListener("change", function() {
// 	currentVolume = maxVolume;
// 	if (currentVolume < maxVolume){
// 		currentVolume 
// 	}

//   console.log(e.detail); // Prints "Example of an event"
// });

// var mute = document.getElementBy