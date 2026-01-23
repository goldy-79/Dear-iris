const overlay = document.getElementById("overlay")
const paper = document.getElementById("paper")
const lines = document.querySelectorAll(".line")
const music = document.getElementById("music")

overlay.onclick = () => {
  overlay.classList.add("opening")

  setTimeout(() => {
    overlay.style.display = "none"
    paper.style.display = "block"

    music.volume = 0.3
    music.currentTime = 3
    music.play()

    let delay = 0
    lines.forEach(line => {
      setTimeout(() => {
        line.style.opacity = 1
      }, delay)
      delay += 1200
    })
  }, 900)
}
