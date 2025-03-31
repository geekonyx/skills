const quote = "Je ne crains pas l’homme qui a pratiqué 10.000 coups une fois, mais je crains l’homme qui a pratiqué un coup 10.000 fois."
const frequencies = {}
const ignored = [',', '?', ':', '!', '«', '»', '…', '’']

let cleanedPhrase = quote.toLowerCase()

for(let character of ignored) {
    cleanedPhrase = cleanedPhrase.replaceAll(character, '')
}

const words = cleanedPhrase.split(' ')

for(let word of words) {
    if (word !== '' && word.length >= 4) {
        if(frequencies[word]) {
            frequencies[word]++
        } else {
            frequencies[word] = 1
        }
    }
}

const frequenciesArray = []
for (let k in frequencies) {
    frequenciesArray.push({
        word: k,
        count: frequencies[k]
    })
}
frequenciesArray.sort((a, b) => b.count - a.count)

console.log(frequenciesArray)