const overlay = document.getElementById("overlay")
const paper = document.getElementById("paper")
const lines = document.querySelectorAll(".line")
const music = document.getElementById("music")

let musicPlayed = false

overlay.onclick = () => {
  if(musicPlayed) return

  overlay.classList.add("opening")

  setTimeout(() => {
    overlay.style.display = "none"
    paper.style.display = "block"

    music.volume = 0.3
    music.currentTime = 3
    music.play()
    musicPlayed = true

    let delay = 0
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.style.opacity = 1
        if(index === lines.length - 1){
          fadeOutMusic()
        }
      }, delay)
      delay += 1200
    })
  }, 900)
}

function fadeOutMusic(){
  let vol = music.volume
  const fadeInterval = setInterval(() => {
    if(vol > 0.01){
      vol -= 0.01
      music.volume = vol
    } else{
      music.pause()
      music.volume = 0
      clearInterval(fadeInterval)
    }
  },50)
}
