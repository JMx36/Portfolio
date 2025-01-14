import { FooterLogos } from "../components/Footer.jsx"
import { Button, LinkInfo } from '../components/utilities.jsx'

import React, { useState, useEffect } from 'react'

const TypewriterEffect = ({text, speed, text_className="work-sans-family fs-30px fw-300 to-front2", text_style={},
        delete_delay = 3000, replay=true, done_func=undefined }) => {

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true); // State to manage typing status
  const [textIndex, setTextIndex] = useState(0);

  let deleteTimer = null;
  let typeTimer = null;
  let delayedTimeout = null;

  const HandleEnd = () => 
  {
    if (replay)
    {
      setIsTyping(true);
      setTextIndex((prev) => (prev + 1) % text.length);
    }
    else if (done != undefined)
      done_func()
  }


  const DeleteText = () =>
  {
    let index = text[textIndex].length;
    deleteTimer = setInterval(() => {
      index--;
      if (index <= -1) 
        {
          clearInterval(deleteTimer);
          HandleEnd();
        }
      setDisplayedText((prev) => prev.slice(0, index - 1));
    }, speed);
  }

  const Type = () =>
  {
    let index = -1;
    typeTimer = setInterval(() => {
        index++;
        if (index >= text[textIndex].length - 1) 
        {
          clearInterval(typeTimer);
          setIsTyping(false);
        }
        setDisplayedText((prev) => prev + text[textIndex].charAt(index));
    }, speed);
  }

  useEffect(() => {
      if (isTyping) 
        Type(); // Start typing
      else
      {
        delayedTimeout = setTimeout(DeleteText
          , delete_delay);
      }

      return () => {
        if (typeTimer) clearInterval(typeTimer);
        if (deleteTimer) clearInterval(deleteTimer);
        if (delayedTimeout) clearTimeout(delayedTimeout);
      };

  }, [isTyping]);

  return (
      <div className="typewriter-effect to-front2">
          <h2 className={text_className} style={text_style}>{displayedText}<span className="bar" style={{}}>|</span></h2>
      </div>
  );
};


const Hero = ({title_text="Josh Castillo", typewriter_text = [], buttons_info = [], background = ""}) => {  

  return (
    <div className="hero blur-background" style={{backgroundImage: background}}>
        <div className="hero-content to-front2 ">
              <h1 className="pacifico-family fw-400 fs-70px to-front2" style={{lineHeight: "1.1", textAlign: "center"}}>{title_text}</h1>
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                textAlign: "center"
              }}>
                <TypewriterEffect text={typewriter_text} speed="100"/>
              </div>
              <div className="to-front2">
                <FooterLogos/>
              </div>
              <div className="hero-buttons-container to-front2">
                  {
                    buttons_info.map((info) => (
                      <Button text={info.text} color="none" text_style="work-sans-family fs-30px fw-400"
                            style={{padding: "0"}} textStyle="work-sans-family"  text_color="white" hover_color="#119DA4"
                            isLink={info.isLink} link_to={info.link} link_type={info.type} scroll_type={info.scroll_type}
                            downloadName={info.downloadName}
                            />
                    ))
                  }
              </div>
        </div>
    </div>
  )
}

export default Hero