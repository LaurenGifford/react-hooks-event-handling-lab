function Keypad() {
    function showPassword(){
        console.log("Entering password...")
    }
    return (
        <input onChange={showPassword} type="password"/>
    )
}

export default Keypad
