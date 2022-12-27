import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
    },
    bigSpace: {
      marginTop: "3rem"
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    pageTitle:{
        marginTop: "3rem",
        marginBottom: "4rem",
    },
  })

export default function ContactUs() {
    const classes = styles()
    return (
        <>
            <Typography variant="h3" color="primary" className={classes.pageTitle}>
                Contact <strong>Ochoa's Mobile Notary</strong>
            </Typography>

            <Typography variant="h5" color="primary" className={classes.pageTitle}>
                If you have any questions or need more information, 
                please feel free to contact us:
            </Typography>

            <Typography variant="h5" color="primary" className={classes.littleSpace}>
                <strong>Telephone: </strong>  415-123-4567
            </Typography>

            <Typography variant="h5" color="primary" className={classes.littleSpace}>
                <strong>Email:  </strong>  ochoanotary@email.com
            </Typography>

        </>

    )
}
