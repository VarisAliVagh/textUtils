import React,{useState} from 'react'


export default function TextForm(props) {
    let txtArea = document.getElementById("myBox");
    // state define here
    const [text,setText] = useState("this is state");

    
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert('CONVERTED TO UPPERCASE SUCCESSFULLY!','success');
    }
    const handleDownClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert('converted to lowercase successfully!','success');
    }
    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
    const handleTextCopy = ()=>{
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Text copied!','success');
    }
    const removeExtraSpace = ()=>{
        let removeSpace = txtArea.value.split(/[ ]+/).join(' ');
        setText(removeSpace)
        props.showAlert('Removed space!','success');
    }
    const clearText = ()=>{
        setText('');
        props.showAlert('Cleared text!','success');
    }
    
    return (
    <>
        <div className={`text-${props.mode === 'dark'?'light':'dark'} container my-3`}>
            <h1>Enter the text to analyze below</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="3" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}}></textarea>
            </div>
            <button type='button' className='btn btn-primary mx-2' onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
            <button type='button' className='btn btn-primary' onClick={handleDownClick}>convert to lowercase</button>
            <button type='button' className='btn btn-primary mx-2' onClick={handleTextCopy}>Text copy</button>
            <button type='button' className='btn btn-primary' onClick={removeExtraSpace}>Remove extra space</button>
            <button type='button' className='btn btn-primary mx-2' onClick={clearText}>Clear text</button>
        </div>
        <div className={`text-${props.mode === 'dark'?'light':'dark'} container`}>
            <h1>Your text summary</h1>
            <span>char :- {text.length}</span>
            <br />  
            <span>word :- <span id='word'>{text !== ''?text.replace(/\s+/g,' ').trim(' ').split(' ').length:'0'}</span></span>
            <br />
            <span>time to read :- {(0.008 * text.length).toFixed(2)}</span>
            <h1>preview</h1>
            <span>{text === ''?'enter the text to preview':text}</span>
        </div>
    </>
  )
}
