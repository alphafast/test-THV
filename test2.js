const stringInput = '(tavi(h(ia)v)t)'

const reverseAndReplaceSource = (src) => {
    let sub = new RegExp(/\(([^()]*)\)/).exec(src)[1]
    sub = sub.split('').reverse().join('')
    return src.replace(/\(([^()]*\))/, sub)
}

const reverseParentheses = (src) => {
    if (src.includes('(')) {
        return reverseParentheses(reverseAndReplaceSource(src))
    }
    return src
}

console.log(reverseParentheses(stringInput))