function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains("light")) {
  //se tiver light mode, add a imagem light
  img.setAttribute("src", "./Assets/assets/Kirby-rosa.png")
  } else {
  //se tiver sem light mode, manter a img normal
  img.setAttribute("src", "./Assets/assets/Kirby-roxo.png")
  img.setAttribute("alt", "Kirby roxinho emo gótico")
  }
}
