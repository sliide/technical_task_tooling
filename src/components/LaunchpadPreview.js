import React from "react"

const LaunchpadPreview = (props) => {
  const Phone = {
      border: '2px solid #CCC',
      width: '300px',
      height: '550px',
      padding: '10px',
      marginLeft: 'auto',
      borderRadius: '10px',
  }

  const Screen = {
    width: '100%',
    height: '100%',
    border: '2px solid #CCC',
    borderRadius: '5px',
    background: `
         linear-gradient(to top left,
             rgba(204,204,204,0) 0%,
             rgba(204,204,204,0) calc(50% - 0.8px),
             rgba(204,204,204,1) 50%,
             rgba(204,204,204,0) calc(50% + 0.8px),
             rgba(204,204,204,0) 100%),
         linear-gradient(to top right,
             rgba(204,204,204,0) 0%,
             rgba(204,204,204,0) calc(50% - 0.8px),
             rgba(204,204,204,1) 50%,
             rgba(204,204,204,0) calc(50% + 0.8px),
             rgba(204,204,204,0) 100%)`,
  }

  return (
    <div style={Phone}>
      <div style={Screen} />
    </div>
  );
}

export default LaunchpadPreview;
