function toggleMenu() {
    document.querySelector('#primaryNav').classList.toggle('open')
}
let btn = document.querySelector('button')
btn.onclick = toggleMenu

const rightNow = new Date()
document.querySelector('#year').textContent = rightNow.getFullYear();
