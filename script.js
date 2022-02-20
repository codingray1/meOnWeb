console.log('its working')


let themeDots = document.getElementsByClassName('theme_dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if (mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode == 'dark'){
        document.getElementById('theme-style').href = 'gray.css'
    }

    if (mode == 'blue'){
        document.getElementById('theme-style').href = 'turq.css'
    }

    if (mode == 'green'){
        document.getElementById('theme-style').href = 'avo.css'
    }
}