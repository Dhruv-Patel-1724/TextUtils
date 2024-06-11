import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text);//state vlaue is change   && console clin mate comment out kairu
        let newText = text.toUpperCase();//converd uppercase
        setText(newText);//update text value
        props.showAlert("Converted to uppercase!", "success");

    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked"+text);//state vlaue is change   && console clin mate comment out kairu
        let newText = text.toLowerCase();//converd uppercase
        setText(newText);//update text value
        props.showAlert("Converted to lowercase!", "success");

    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        //alert('Text copied to clipboard!');
        props.showAlert("Copy to Clipboard", "success");
    }

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');//split method is like array ='h','e','l','l','o'
        setText(newText);
        props.showAlert("Converted to reverse text!", "success");
    }
    const handleReplaceClick = () => {
        let oldWord = prompt("Enter the word you want to replace:");
        let newWord = prompt("Enter the new word:");
        if (!text.includes(oldWord)) {
            alert(`The word "${oldWord}" was not found in the text.`);
            return;
        }
        let newText = text.replace(new RegExp(oldWord, 'g'), newWord);
        setText(newText);
        props.showAlert("Replace text!", "success");
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared !", "success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Exrta spaces removed!", "success");
    }
    const handleOnChange = (event) => {//onchange event object
        // console.log("On Change");//only debugging mate on compelseri
        setText(event.target.value);//type kari shaki ye
    }

    const [text, setText] = useState('');//text is state variable
    //text = "new text"; //Wrong way to change the state
    //setText("new text");//Correct way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1 className='mb-4'>
                    {props.heding}
                </h1>
                <div className="mb-3"> 
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8 "></textarea>
                </div>
                
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverseClick}>Reverse Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>ExtraSpaces Remove</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReplaceClick}>Replace Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-3"  style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h2>You Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview! "}</p>
            </div>

        </>
    )
}

