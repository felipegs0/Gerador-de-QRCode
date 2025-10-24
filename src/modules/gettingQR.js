function getQr(qrText) {
    const res = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrText}`

    return res
}

module.exports = getQr