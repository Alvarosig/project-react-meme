import { useState, useEffect } from "react";

export default function Content() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect( () => {
        // const url = "https://api.imgflip.com/get_memes"
        // fetch(url)
        //     .then( res => res.json())
        //     .then( data => setAllMemes(data.data.memes))
        
        async function getMemes() {
            const url = "https://api.imgflip.com/get_memes"
            const res = await fetch(url)
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()

    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url;
        setMeme( prevMeme => ({...prevMeme, randomImage: url}))
    }

    function handleTopInput(event) {
        const name =  event.target.name;
        const value = event.target.value;
        setMeme( prevMeme => {
            return { 
                ...prevMeme,
                [name]: value
            }
        })
    }

    function handleBottomInput(event) {
        const name =  event.target.name;
        const value = event.target.value;
        setMeme( prevMeme => {
            return { 
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    name="topText" 
                    className="form--inputs"
                    placeholder="Top text"
                    onChange={handleTopInput}
                />
                <input 
                    type="text"
                    name="bottomText" 
                    className="form--inputs"
                    placeholder="Bottom text"
                    onChange={handleBottomInput}
                />
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText.toUpperCase()}</h2>
                <h2 className="meme--text bottom">{meme.bottomText.toUpperCase()}</h2>
            </div>
        </main>
    )
}