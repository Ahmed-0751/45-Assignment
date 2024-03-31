// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
function make_shirt(_size, _message) {
    if (_size === void 0) { _size = "large"; }
    if (_message === void 0) { _message = "I love Typescript."; }
    console.log("Size of the shirt is ".concat(_size, " & the message on it is ").concat(_message));
}
;
// Make a large shirt with the default message.
make_shirt();
// Make a medium shirt with the default message.
make_shirt("medium");
// Make a shirt of any size with a different message.
make_shirt("small", "Leave me alone");
