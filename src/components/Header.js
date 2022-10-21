import React from "react"
import trollface from "../../public/images/trollface.png"

export default function Header() {
    return (
        <header className="header">
            <img className='header--image' src={trollface} alt='jpg'></img>
            <h2 className="header--title"> Meme Generator</h2>
            <h4 className="header--project"> Project-2</h4>
      </header>
    );
}