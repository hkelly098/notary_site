import React from 'react'
import logo from '../logo4.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

const styles = makeStyles({
    wrapper: {
        paddingTop: "5rem",
        bottom: 0
    },
    bar: {
        height:"200px",
        bottom: 0,
        paddingRight: "3rem",
        backgroundColor: "#EFF4F5",
        justifyContent: "center",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    menuList: {
        listStyle: 'none',
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        fontSize: 20,
        fontFamily: 'Noto Nastaliq Urdu',
        color: "#060B37",
        textDecoration: 'none',
        "&:hover": {
            color:  "#D2A113"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

export default function BottomNav() {
    const classes = styles()
    return (
        <div className={classes.wrapper}>
            <Toolbar position="fixed" color="rgba(0, 0, 0, 0.87)" className={classes.bar}> 

            <ul className={classes.menuList}>
                <li>
                    <Link to='/' className={classes.menuItem}>Schedule an appointment</Link>
                </li>
                <li>
                    <Link to='/about' className={classes.menuItem}>FAQ / About Us </Link>
                </li>
                <li>
                    <Link to='/contact-us' className={classes.menuItem}>Contact: <strong>415-123-4567 or notary@email.com</strong></Link>
                </li>
            </ul>

            </Toolbar>   
        </div>
         
    )
}
