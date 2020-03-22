const inputs = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS' ]

const inputsSortted = inputs.map(input => {
    return {
        value: input,
        key: input.split('').sort().join()
    }
})

const map = new Map

const groupped = inputsSortted.forEach(input => {
    if (map.has(input.key)) {
        map.set(input.key, map.get(input.key).concat(input.value))
    } else {
        map.set(input.key, [input.value])
    }
})

console.log(Array.from(map.values()))