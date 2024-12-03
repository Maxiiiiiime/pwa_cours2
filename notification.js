const NotifMy = () => {

    let myNotif = null

    const options = {
        body: "Corpds du message",
        icon: "icons/favicon.32x32.png",
        url:"https://cepegra.be"
    }
    if ( Notification.permission === "granted") {
        myNotif = new Notification('Hello !!', options)
    }

}

if(Notification.permission !== 'granted') {
    if(confirm('Accepter les notifications ?')){
        Notification.requestPermission()
        .then( permission => {
           
            console.log(permission)
            if ( permission === 'granted'){
                console.log("Notification possible")
            }
        })
            
    }
}