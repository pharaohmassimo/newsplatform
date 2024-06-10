import { StylesProvider, makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    container: {
        padding: '0 5%',
        width: '100%' ,
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '45vh',
        padding: '10%',
        borderRadius: 0,
        border: '1px solid white',
        color: 'white'
    }, 
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    }
}) ;                                                          //this creates a hook that we then call in our NewsCard 


