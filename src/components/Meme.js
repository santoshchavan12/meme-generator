import React, {useState} from "react"
import memesData from "../memesData.js"
export default function Meme() {
 


    const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/30b1gx.jpg",
    });  
 
    function getMemeImage() {
      const memesArray = memesData.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const url = memesArray[randomNumber].url
      setMeme(prevMeme => ({...prevMeme, randomImage: url}))
    }
  
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]:value
    }))
   }
    return (
      <main>
        <div className="form">
          <input
            className="form--input"
            placeholder="top text"
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}

          ></input>
          <input
            className="form--input"
            placeholder="bottom text"
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            
          ></input>
          <button className="form--btn" onClick={getMemeImage}>
            Get image{" "}
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" alt="jpg"></img>
          <div className="meme--text-top">{meme.topText}</div>
          <div className="meme--text-bottom">{meme.bottomText}</div>
        </div>
        {console.log(meme.topText)}
      </main>
    );
}
