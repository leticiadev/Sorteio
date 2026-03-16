function sortearCasa()
{
  const casas = ["Grifinória", "Lufa-Lufa", "Corvinal", "Sonserina"];
  const sorteio = Math.floor(Math.random() * casas.length);
  const casaSorteada = casas[sorteio];
  const resultado = document.getElementById("resultado");
    resultado.innerText = "Você foi sorteado para a casa: " + casaSorteada + "!";

      // Remove classes antigas de fundo
    document.body.classList.remove(
        "grifinoria-bg",
        "sonserina-bg",
        "corvinal-bg",
        "lufalufa-bg"
    );
 
    // Remove classes antigas de texto
    resultado.classList.remove(
        "grifinoria-text",
        "sonserina-text",
        "corvinal-text",
        "lufalufa-text"
    );
      // Verifica qual casa foi escolhida
    if (casaSorteada === "Grifinória") {
        document.body.classList.add("grifinoria-bg");
        // Adiciona cor de fundo
 
        resultado.classList.add("grifinoria-text");
        // Adiciona cor no texto
 
    } else if (casaSorteada === "Sonserina") {
        document.body.classList.add("sonserina-bg");
        resultado.classList.add("sonserina-text");
 
    } else if (casaSorteada === "Corvinal") {
        document.body.classList.add("corvinal-bg");
        resultado.classList.add("corvinal-text");
 
    } else if (casaSorteada === "Lufa-Lufa") {
        document.body.classList.add("lufalufa-bg");
        resultado.classList.add("lufalufa-text");
    }
 
  }


 