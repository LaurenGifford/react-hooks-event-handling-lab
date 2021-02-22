function EyesOnMe() {
    function eyesFocused(event) {
        console.log("Good!")
    }

    function eyesBlurred(event) {
        console.log("Hey! Eyes on me!")
    }

    return (
        <button onFocus={eyesFocused} onBlur={eyesBlurred}>Eyes on me</button>
    )
}

export default EyesOnMe