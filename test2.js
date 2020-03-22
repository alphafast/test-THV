const stringInput = '(tavi(h(ia)v)t)'

const revwersRecur = (src) => {
    let sub = new RegExp(/\(([^()]*)\)/).exec(src)[1]
    sub = sub.split('').reverse().join('')
    console.log(sub)
    return src.replace(/\(([^()]*\))/, sub)
}

const reverseParentheses = (src) => {
    if (src.includes('(')) {
        return reverseParentheses(revwersRecur(src))
    }
    return src
}

console.log(reverseParentheses(stringInput))