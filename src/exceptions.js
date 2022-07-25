function functionThatThrowsError(message='something bad happened') {
    throw new Error(message)
}

module.exports = {
    functionThatThrowsError
};