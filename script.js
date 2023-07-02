function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  /*html.classlist.toggle('light')*/

  //Pegar a tag img

  const img = document.querySelector("#profile img")
  // substituir a img
  if (html.classList.contains("light")) {
    //setiver light mode acicionar a imagem light
    img.setAttribute('src', './assets/assets/avatar-light.png')
  } else {
    // se tiver dark mode, manter a img
    img.setAttribute('src', './assets/imagens shandiel/Avatar.png')
  }
  }

 
  