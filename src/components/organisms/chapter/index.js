import "./styles.scss"

function Chapter(props) {
    return (
        <div className={`chapter chapter--${props.type}`}>
            <div className="container">
                {props.prefixSVG}
                {props.children}
            </div>
            {props.suffixSVG &&
                <div className="container-fluid chapter__suffix-svg">
                    <img src={props.suffixSVG} alt="example imgae" />
                </div>}
        </div>

    )
}

export default Chapter;