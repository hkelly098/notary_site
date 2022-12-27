import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'; 
import { InlineWidget } from "react-calendly";

const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center",
    },
    bigSpaceBottom: {
      marginBottom: "3rem",
    },
    bigSpace: {
      marginTop: "3rem",
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    container: {
      display: "flex",
      paddingBottom: "5rem",
    },
    textHeader:{
      paddingTop: "5rem",
      paddingLeft: "5rem",
      width: "40%",
      height: "650px",
      paddingBottom: "5rem",
      textAlign: "center",
    },
    calendy:{
      paddingTop: "2rem",
      paddingRight: "4rem",
      width: "60%",
      height: "650px",
    },
    frame:{
      display:"block",
      margin:"auto",
      width: "70%",
      height: "100%",
      webkitTransform: "scale(1.25)",
      transform: "scale(1.25)",
      webkitTransformOrigin: "0 0",
      transformOrigin: "0 0",
    }
  })

export default function Home() {
    const classes = styles(); 
    return (
      <>

        <div className={classes.container}>

         
          <div className={classes.textHeader}>

            <Typography variant="h4" className={classes.bigSpace} color="secondary">
              Notarization made easy with 
            </Typography>

            <Typography variant="h3" className={classes.bigSpaceBottom} color="secondary">
              Ochoa's Mobile Notary
            </Typography>

            <Typography variant="h4" color="primary">
            Schedule an appointment here or 
            </Typography>

            <Typography variant="h4" color="primary">
            contact us by phone at <strong>415-123-4567</strong> or by email at <strong>notary@email.com</strong>.
            </Typography>

            <Typography variant="h5" className={classes.bigSpace} color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur auctor, lectus in elementum ultricies, justo elit mollis elit,
            eget euismod enim diam in orci. Aenean consectetur at lacus sed ullamcorper.
            Maecenas suscipit ultricies lectus, et mollis diam tempus non. Integer tincidunt vehicula diam,
            nec posuere ante suscipit vel. Aliquam erat volutpat.
            </Typography>

            <Typography variant="h4" className={classes.bigSpace} color="primary">
            Price: <strong>Only $15 per Signature</strong> + travel fee (if needed)
            </Typography>

          </div>

            <div className={classes.calendy}>
            
              <iframe
                src="https://calendly.com/htiffany098/notary-event?hide_event_type_details=1&hide_gdpr_banner=1"
                width= "100%"
                height="100%"
                frameborder="1"
                className={classes.frame}
              ></iframe>

            </div>
          </div>
        
        
        
      </>
    )
}
