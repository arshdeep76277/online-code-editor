
import { useEffect, useState } from 'react';
import './App.css';
import Editor from './Editor';
function App() {
  const [html,setHtml]=useState(' ');
  const [css,setCss]=useState(' ');
  const [js,setJs]=useState(' ');
  const [srcDoc,setSrcDoc]=useState(' ');

  useEffect(()=>{

  const timeout= setTimeout(()=>{
     setSrcDoc(`
     <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
     `);
     console.log(srcDoc);
   },250)
   return()=> clearTimeout(timeout);
  },[html,js,css]);

  return (
    <div className="App">
     <div className="pane top-pane">
       <Editor language='xml' value={html} onChange={setHtml} />
       <Editor language='css' value={css} onChange={setCss} />
       <Editor language='javascript' value={js} onChange={setJs}/>
     </div>
     <div className="bottom-pane">
       <iframe title="Output" srcDoc={srcDoc} 
       width="100%" height="100%" sandbox="allow-scripts" frameBorder="0"></iframe>
     </div>
    </div>
  );
}

export default App;
