const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let nome = document.getElementById('nome').value
    let dataNasc = document.getElementById('dataNasc').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let rua = document.getElementById('rua').value
    let uf = document.getElementById('uf').value
    let numero = document.getElementById('numero').value
    let cep = document.getElementById('cep').value
    let data = {
        nome,
        dataNasc,
        email,
        telefone,
        rua,
        uf,
        numero,
        cep,
    }
    let converteData = JSON.stringify(data)

    localStorage.setItem('lead', converteData)
    let carregar = `<p>Aguarde por favor!</p>`
    let finalizar = `<p>Finalizado</p>`
    let content = document.getElementById('content')
    content.innerHTML = carregar

    setTimeout(() => {
        content.innerHTML = finalizar
    }, 1000)
})