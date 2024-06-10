import React, { useState, useEffect } from "react";                  // useEffect so our alan Btn is initialized once our platform runs
import alanBtn from '@alan-ai/alan-sdk-web';               //importing the alan ai 
import NewsCards from "./components/NewsCards/NewsCards";
import { Typography } from '@material-ui/core';

import wordsToNumbers from "words-to-numbers";
import useStyles from './styles.js';

const alanKey = '3bdbf3c51a1dfe6597f5c89bf1e764922e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);            //set active article
    
    const classes = useStyles();    


    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles( articles ); 
                    setActiveArticle(-1);
                } else if(command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);                 //using previous state to change the current state - call it as callback function and simply increment it
                } else if(command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers( (number), { fuzzy: true} ) : number;
                    const article = articles[parsedNumber - 1];

                    if ( parsedNumber > articles.length ) {
                        alanBtn().playText('Please try that again...');
                    } else if (article){
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    } else {
                        alanBtn().playText('Please try that again...');
                    }
                }
            },
        });
    }, []);                                                                                        //useeffect takes two components - callback function and a dependency array                         
   
    return (
        <div style={{backgroundImage: `url("https://aimadeimage.net/wp-content/uploads/2023/11/ai-future-robots-2.jpg")`, minHeight: '100%', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', minWidth: '100%'}}>
            <div className={classes.logoContainer}>
                {newsArticles.length ? (
                    <div className={classes.infoContainer}>
                        <div className={classes.card}  style={{borderRadius: '0'}}><Typography variant="h6" component="h2" style={{fontFamily: 'Montserrat, sans-serif'}}>TRY SAYING: <br /><br />Open article number [4]</Typography></div>
                        <div className={classes.card}  style={{borderRadius: '0'}}><Typography variant="h6" component="h2" style={{fontFamily: 'Montserrat, sans-serif'}}>TRY SAYING: <br /><br />Go back</Typography></div>
                    </div>
                    ) : null} 

                <img src="https://storage.buzzsprout.com/tlnzjvd9v8uzx0gfd16wtbbrieym" className={classes.alanLogo} alt="alan logo" style={{opacity: '0.9'}}/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />

            {!newsArticles.length ? (
            <div className={classes.footer}>
                <Typography variant="body1" component="h2">
                        <a className={classes.link} href="https://www.linkedin.com/in/pharaoh-massimo-732a4024a"> Creator | Pharaoh Massimo </a>        
                </Typography>
            </div>
            ) : null}    

        </div>
    );
};

export default App;