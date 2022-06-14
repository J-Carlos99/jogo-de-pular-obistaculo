Let personagem = document.querySelector(“#personagem”)

Let quadrado = document.querySelector(“#quadrado”)

Function pular(){
    If(personagem.classlist != “animar”){
        Personagem.classlist.add(“animar”)
    }
    setTimeOut(function(){
        personagem.classlist.remove(“animar”)
    }, 500)
}

Var testarcolisao = setInterval(function testar-colisao(){//pegar valor do topo do personagem
    Var topoPersonagem = parseInt(
      Window.getComputedStyle(personagem).getProperTyValue(“top”)
    )
    Var esquerdaQuadrado = parseInt(
      Window.getComputedStyle(quadrado).getProperTyValue(“left”)
      )
      If(esquerdaQuadrado < 20 && esquerdaQuadrado > 0 && topoPersonagem >= 130){
      Quadrado.style.animation = ‘none’
      Quadrado.style.display = ‘none’
      Alert(‘você perdeu!’)
      }
}, 10)

