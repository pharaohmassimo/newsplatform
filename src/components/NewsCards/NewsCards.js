import React from 'react';     
import { Grid, Grow, Typography} from '@material-ui/core';
import useStyles from './styles.js'
import NewsCard from '../NewsCard/NewsCard';


const infoCards = [
    { color: '#00838f', title: 'LATEST NEWS', info: 'Get the latest international breaking news from across all the sources...', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'BY CATEGORIES', info: 'Business, Entertainment, General, Health, Science, Sports, Technology...', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'BY TERMS', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with Donald Trump' },
    { color: '#283593', title: 'BY SOURCES', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({ articles, activeArticle }) => {                 // destructuring the activeArticle from the props
    const classes = useStyles();

    if(!articles.length){

        return (
        <Grow in>
            <Grid className={classes.container}  container alignItems="stretch" spacing={3}>
                {infoCards.map((infoCard) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                        <div className={classes.card} style={{backgroundColor: infoCard.color, fontFamily: 'Montserrat, sans-serif'}}> 
                            <Typography variant="h5" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 400}}>{infoCard.title}</Typography>
                            { infoCard.info ? (<Typography variant="h6" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 100}}><strong>{infoCard.title.split(' ')[1]}: </strong><br />{infoCard.info}</Typography>) : null} 
                            <Typography variant="h6"  style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 100}}><strong>Try Saying :</strong> <br /> <i>{infoCard.text}</i></Typography>
                        </div>
                    </Grid>
                )) }
            </Grid>
        </Grow>
        );
    }


    return (
        <Grow in >
            <Grid className={classes.container}  container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={ {display : 'flex'} }>           
                         <NewsCard article={article} activeArticle={activeArticle} i={i}/>                                     
                    </Grid>
                ))}

        </Grid>
        
    </Grow>
  )
}

export default NewsCards;