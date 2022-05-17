
const characters = document.querySelectorAll('.character')

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        
        const selectedId = character.attributes.id.value;       
        if(selectedId === 'doctor-doom') return;
        
        const selectedCharacter = document.querySelector('.selected-character')
        console.log(selectedCharacter.classList.remove('selected-character'))
        console.log(character.classList.add('selected-character'))

        const largePlayer1 = document.getElementById('character-player1')
        largePlayer1.src = `./src/imagens/${selectedId}.png`
            
        const player1Name = document.getElementById('name-player1')
        player1Name.innerText = (character.getAttribute('data-name'))
    })   
})