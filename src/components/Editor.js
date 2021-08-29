import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import './editor.css'
import { useState } from 'react';
import { Controlled as CodeMirrorEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt,faExpandAlt } from '@fortawesome/free-solid-svg-icons';

const Editor=({language,onChange,value})=>{
    const [open,setOpen]=useState(true);
    const handleChange=(editor,data,value)=>{
        onChange(value);
    }
    const handleClick=()=>{
         setOpen(prevOpen=>!prevOpen);
    }
    return (
        <div className={`editor__container ${open ? '' : 'collapsed'}`}>
        <div className="editor__title">
            {language}
            <button className="btn" onClick={handleClick}>
                <FontAwesomeIcon icon={open?faCompressAlt: faExpandAlt} />
            </button>
        </div>
        <CodeMirrorEditor 
           onBeforeChange={handleChange} 
           value={value}
           className="codemirror__editor"
           options={{
               lineWrapping:true,
               lint:true,
               mode:language,
               lineNumbers:true,
               theme:'material'
           }}
        />
        </div>
       
    )
}
export default Editor;