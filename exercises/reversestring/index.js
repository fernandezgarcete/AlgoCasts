// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reversed(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

function reversing(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

function reverse(str) {
    let reversed = '';
    for (let charac of str) {
        reversed = charac + reversed;
    }
    return reversed;
}

module.exports = reverse;
module.exports = reversing;
module.exports = reversed;