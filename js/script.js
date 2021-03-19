//barra de progresso
let barraProgresso = document.querySelector('.barraprogresso')
//habilidade front
let html = document.querySelector('#html')
let css = document.querySelector('#css')
let javaScript = document.querySelector('#javascript')
let angular = document.querySelector('#angular')
let typeScript = document.querySelector('#typeScript')
//habilidade back
let spring = document.querySelector('spring')
let mysql = document.querySelector('mysql')
let objeto = document.querySelector('objeto')
let logica = document.querySelector('logica')
//habilidade soft skills
let equipe = document.querySelector('#equipe')
let proatividade = document.querySelector('#proatividade')
let comunicacao = document.querySelector('#comunicacao')
let resiliencia = document.querySelector('#resiliencia')

html.addEventListener('input', function(){
    const value = html.value;
    barraProgresso.style.setProperty('--progress', value)
})