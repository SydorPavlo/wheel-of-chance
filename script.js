const wheel = document.getElementById("wheel")

let i = 0

onclick = rotate

function rotate() {
  const force = rnd(3, 33)

  i += force
  wheel.style.transition = `${force / 3}s ease-out`
  wheel.style.rotate = `${i * 45}deg`
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}