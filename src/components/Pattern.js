import React, { useState } from 'react'
import { createPattern } from '../modules/pattern-maker'

function Pattern() {

    const [chars,setChars] = useState("")
    const [hightlighedIndex,setHighlightedIndex] = useState(null)

    return (
        <div id="pattern">
            <div className='textarea-container'>
                <textarea rows={chars.split("\n").length+1} value={chars} onChange={(evt) => setChars(evt.target.value)}></textarea>
            </div>
            <ol className='pattern-text'>
                {createPattern(chars).map((line,index) => (
                    <li onClick={() => setHighlightedIndex(index)} className={`pattern-line ${hightlighedIndex == index ? "highlighted-line" : ""}`} key={index}><code>{line}</code><br /></li>
                ))}
            </ol>
        </div>
    )
}

export default Pattern