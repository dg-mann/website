import "./styles.scss"

function Button(props) {
    function handleButtonClick(data) {
        console.log("Hello World", data)
    }

    return (
        <button className="button" onClick={handleButtonClick.bind(this)}>{props.text}</button>
    );
}

export default Button;