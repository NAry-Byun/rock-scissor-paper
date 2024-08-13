import React from 'react';

const Box = (props) => {
  return (
    <div className="box">
        <h1>{props.title}</h1>
      <img 
        className="item-img" 
        src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/c578d42d-0cc3-4f72-8035-4d57dd9a24de/a0b37cf1-b8a9-4e83-bf4f-889864692138.png" 
        alt="Box Image" 
      />
      <h2>Win</h2>
    </div>
  );
}

export default Box;
