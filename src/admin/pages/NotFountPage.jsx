import React from "react";
import { SiGithub, SiReact } from 'react-icons/si';

function NotFoundPage(){
    return (
        <>
        <h1>Not Found Page </h1>
        <div>
      <h1>Simple Icons Example</h1>
      <div>
        <SiGithub size={32} color="#181717" /> {/* GitHub icon */}
        <SiReact size={32} color="#61DAFB" />  {/* React icon */}
      </div>
    </div>
        </>
        
    );
}

export default NotFoundPage;
