const insatllBtn =document.querySelector('#installButton')
let deferredPrompt

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault()
    deferredPrompt = event
    insatllBtn.style.display ='block'
})

insatllBtn.addEventListener('click', async (event) => {
    event.preventDefault()

    if(deferredPrompt) {
        deferredPrompt.prompt()
        const choiceUser = await deferredPrompt.userChoice
        if (choiceUser === 'accepted') {
            insatllBtn.style.display = "none"
        }
        deferredPrompt = null
    }
})

window.addEventListener('appinstalled', event =>{
    insatllBtn.style.display ="none"
})