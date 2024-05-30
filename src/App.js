import React, { useState, useEffect } from "react";                  // useEffect so our alan Btn is initialized once our platform runs
import alanBtn from '@alan-ai/alan-sdk-web';               //importing the alan ai 
import NewsCards from "./components/NewsCards/NewsCards";

import useStyles from './styles.js';

const alanKey = '3bdbf3c51a1dfe6597f5c89bf1e764922e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);            //set active article
    const classes = useStyles();                            //

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles( articles ); 
                    setActiveArticle(-1);
                } else if(command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);                 //using previous state to change the current state - call it as callback function and simply increment it
                }
            }
        })
    }, [])                                                                                          //useeffect takes two components - callback function and a dependency array                         
   
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/6513eeb6c864c1282f0ea7d9_Customization_benefit1.webp" className={classes.alanLogo} alt="alan logo" />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    );
}

export default App;