import * as React from 'react';
let str:string = 'loading...';
let style:any = {
  width: '100px',
  height: '100px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '10'
}

const Loading = () => {
  return <h1 sty={{ ...style}}>{str}</h1>;
}

export default Loading;