const Legend:React.FC = () => {
    return (
        <div className="legend">
            <h1>The social media for <b className="text-accent">developers</b></h1>
            <span>The number one social media designed for Developers, Software Engineers and Data Scientists alike.</span>
            <img className="box-shadow" src={require('../Images/Phone.png')}></img>
        </div>
    );
}

export default Legend;