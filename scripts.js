const input = document.getElementById("item-input")
const button = document.getElementById("add-item")
const list = document.querySelector("ul")
const deleteButton = document.getElementsByClassName("delete-button")

button.addEventListener("click", (e) => {
    e.preventDefault()
    const newItem = input.value.trim();

    // Verifica se o input não está vazio
    if (newItem) {
        const listItem = document.createElement("li")
        const label = document.createElement("label")
        const inputCheck = document.createElement("input")
        inputCheck.setAttribute("type", "checkbox")
        
        const span = document.createElement("span")
        span.textContent = newItem

        const binButton = document.createElement("button")
        binButton.classList.add("delete-button")

        // Cria o botão de exclusão
        binButton.setAttribute('arial-label', "Remover item")

        // Adiciona evento para remover o item
        binButton.addEventListener("click", () => {
            // Remove o li da lista
            listItem.remove()

            // Exibe o alert
            alert("O item foi removido da lista")
        })

        listItem.classList.add("item")

    
        label.appendChild(inputCheck)
        label.appendChild(span)
        label.appendChild(binButton)
        listItem.appendChild(label)
        list.appendChild(listItem)

        input.value = '';
        input.focus(); // Retorna o foco para o input
    } else {
        alert("Por favor, digite um item antes de adicionar.")
    }

})


// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const value = input.value

//     const regex = /\D+/g

//     if(regex.test(value)){
//         alert("Padrão Encontrado") // só letras
//     } else {
//         alert("Valor inválido. Digite corretamente") // só números
//     }
// })