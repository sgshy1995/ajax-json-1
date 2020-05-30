
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style')
            style.innerText = request.response
            document.body.appendChild(style)
        }
    }
    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/1.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement('script')
            script.innerText = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}