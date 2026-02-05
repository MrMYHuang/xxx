function add(a, b) {
    return a + b;
}

if (require.main === module) {
    console.log(add(1, 1));
}

module.exports = { add };
