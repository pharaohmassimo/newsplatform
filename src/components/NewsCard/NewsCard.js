import React from 'react';                     // useState, useEffect, createRef
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './styles.js';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
  const classes = useStyles();
  /*const {elRefs, setElRefs} = useState([]);     */                                  //storing all the refs in an array - empty initially
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);      //get exactly to the top of the card and also bring it a bit above so that we are not exactly on top of it

  /* our useEffect to create our references at the start of our application  *
  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));   //20 empty elements,fill it with nothing, map over them, only concerned with index - j
  }, []);

  //second useEffect called each time that i, activeActiveArticle or elRefs changes 
  useEffect(() => {
    if(i === activeArticle && elRefs[activeArticle]) {
        scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);  */
 

  return (

    <Card className={ classNames(classes.card, activeArticle === i ? classes.activeCard : null)} style={{fontFamily: 'Montserrat, sans-serif'}}>
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}/>
        <div className={classes.details}>
            <Typography variant='body2' color='textSecondary' component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
            <Typography variant='body2' color='textSecondary' component="h2">{source.name}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">Learn More</Button>
          <Typography variant='h5' color="textSecondary">{i + 1}</Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;