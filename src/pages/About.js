import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'; 
import napaPic from '../napa.jpg'

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
    bigImage:{
        marginTop: "3rem",
        width: "65%",
    }
    
  })

export default function About() {
    const classes = styles(); 
    return (
        <div className={classes.wrapper}>
            <Typography variant="h3" className={classes.pageTitle} color="primary">
                About Us
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="primary">
                Ochoa's Mobile Notary is a trusted and reliable mobile notary business serving the city of Napa
                and the surrounding areas. Our team of professional and certified notaries are available to travel to your home, 
                office, or any location of your choice to notarize your documents. Whether you need a document notarized for a real estate transaction, a power of attorney, or any other legal matter, 
                let the expertise at Ochoa's Mobile Notary handle it. 
            </Typography>

            <img src={napaPic} className={classes.bigImage}></img>

            <Typography variant="h3" className={classes.pageTitle} color="primary">
                FAQ
            </Typography>

            <Typography variant="h5" className={classes.littleSpace} color="primary">
                <strong> Q: What is a mobile notary? </strong>
            </Typography>

            <Typography variant="h5" className={classes.littleSpace} color="primary">
                A notary is a public official who is authorized to witness the signing of documents, 
                administer oaths and affirmations, and perform other duties related to the authentication of documents. 
                Notaries are often called upon to verify the identity of individuals signing documents and to 
                ensure that the documents are properly executed. Notaries are typically appointed by state 
                governments and are required to pass an examination and undergo background checks. 
                A mobile notary is a notary public who travels to a location chosen by the
                 client to perform notarial services. Mobile notaries are often used when the
                  client is unable to visit a traditional notary office, such as when they are
                   physically unable to leave their home, are out of town, or have a busy schedule.
            </Typography>


            <Typography variant="h5" className={classes.littleSpace} color="primary">
                <strong> Q: What services does Ochoa's Mobile Notary offer? </strong>
            </Typography>

            <Typography variant="h5" className={classes.littleSpace} color="primary">
                Ochoa's Mobile Notary offers a variety of notary services,
                 including document notarization, certification of documents, and administration
                  of oaths and affirmations. We can also provide witness services for legal
                   documents, such as wills and powers of attorney.
            </Typography>

            <Typography variant="h5" className={classes.littleSpace} color="primary">
                <strong> Q: How do I schedule an appointment with Ochoa's Mobile Notary? </strong>
            </Typography>

            <Typography variant="h5" className={classes.littleSpace} color="primary">
                 To schedule an appointment with Ochoa's Mobile Notary, you can
                 call us at the phone number listed on our Contact page or send us an email 
                 with your request. We will respond to your request as quickly as possible and 
                 work with you to schedule an appointment at a time and location that 
                 is convenient for you.
            </Typography>
            
            <Typography variant="h5" className={classes.littleSpace} color="primary">
                <strong> Q:  What I need to bring anything to my appointment with Ochoa's Mobile Notary? </strong>
            </Typography>

            <Typography variant="h5" className={classes.littleSpace} color="primary">
                It is important to bring all necessary documents to your 
                appointment with Ochoa's Mobile Notary. This may include identification documents,
                 such as a driver's license or passport, and any documents that need to be notarized.
                  It is also a good idea to bring any instructions or specific requirements for 
                  the notarization process that have been provided by the requesting party.
            </Typography>

            <Typography variant="h5" className={classes.littleSpace} color="primary">
                <strong> Q: How much does it cost to use Ochoa's Mobile Notary services? </strong>
            </Typography>

            <Typography variant="h5" className={classes.littleSpace} color="primary">
                The cost of our mobile notary services will depend 
                on the specific services being requested and the number of documents 
                being notarized. We will provide you with a quote for our services 
                before your appointment so that you know exactly what to expect. 
                Our rates are competitive and we strive to provide our clients 
                with the most affordable and convenient mobile notary services in the Napa area.
            </Typography>

        </div>
    )
}
