
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

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get','/2.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/3.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            console.log(dom)
            const text = dom.getElementsByTagName('warning')[0].textContent.trim()
            console.log(text)
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/4.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const text = request.response
            const object = JSON.parse(text)
            console.log(typeof object)
            console.log(object)
            myName.innerText = object.name
            myName.style.color= 'grey'
        }
    }
    request.send()
}
let n = 2
getPAGE.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', `/page${n}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                hope.appendChild(li)
            });
        }
    }
    n+=1
    request.send()
}