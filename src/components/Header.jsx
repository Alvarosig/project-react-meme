import troll from "../assets/troll.svg"

export default function Header() {
    
    return (
        <header>
            <div className="header--banner">
                <img src={troll} alt="troll face" />
                <h1>Meme Generator</h1>
            </div>
            <h4>React Course - Project 3</h4>
        </header>
    )
}