import './assets/css/style.css';
const gettingInfo = require('./modules/gettingQR');

let qrText = document.querySelector('#qrCodeType');

const btEnviar = document.querySelector('.btEnviar')
const divQrCode = document.querySelector('.qrCode')

btEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    let qrTextValue = qrText.value;
    if(qrTextValue == "") {
        alert("Insira o texto")
        return
    }
    const url = gettingInfo(qrTextValue);

    divQrCode.innerHTML = '';
    const img = document.createElement('img')
    img.src = url;

    divQrCode.appendChild(img)
})
