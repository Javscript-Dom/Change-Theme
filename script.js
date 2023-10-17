

    let theme = document.getElementById('icon')

    document.body.style.background = localStorage.getItem('theme')
    document.body.style.color = localStorage.getItem('color')
    theme.style.marginLeft = localStorage.getItem('space')
    
    
theme.addEventListener('click', (e) => {
    if(localStorage.getItem('theme') == 'black'){
        localStorage.setItem('theme', 'white')
        localStorage.setItem('color', 'black')
        localStorage.setItem('space', "0px")

        theme.src = './Sun_light.svg'
        document.body.style.background = localStorage.getItem('theme')
        document.body.style.color = localStorage.getItem('color')
        theme.style.marginLeft = localStorage.getItem('space')
    }
    else{
        localStorage.setItem('theme', 'black')
        localStorage.setItem('color', 'white')
        localStorage.setItem('space', '70px')
        theme.src = './Sun_fill.svg'
        document.body.style.background = localStorage.getItem('theme')
        document.body.style.color = localStorage.getItem('color')
        theme.style.marginLeft= localStorage.getItem('space')

    }
})