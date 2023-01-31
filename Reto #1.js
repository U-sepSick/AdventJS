const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    return gifts.map(gift => {
        const wrapPaper = "*".repeat(gift.length + 2);
        return wrapPaper + "\n" + "*" + gift + "*" + "\n" + wrapPaper
    })
}

console.log(wrapped)
