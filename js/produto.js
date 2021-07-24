const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let nome = document.getElementById('nome').value
    let codigo = document.getElementById('codigo').value
    let descricao = document.getElementById('descricao').value
    let quantidade = document.getElementById('quantidade').value
    let preco = document.getElementById('preco').value
    let data = {
        nome,
        codigo,
        descricao,
        quantidade,
        preco,
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