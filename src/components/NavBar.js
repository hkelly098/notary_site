import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo4.svg'
import logoMobile from '../logoMobile.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

const styles = makeStyles({
    bar:{
        paddingTop: "1rem",
        paddingRight: "3rem",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "25%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuList: {
        listStyle: 'none',
        display: 'flex',
        gap: '2.5rem',
    },
    menuItem: {
        paddingTop: "0.5rem",
        cursor: "pointer", 
        flexGrow: 1,
        fontSize: 25,
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

export default function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}> 

            <Link to='/' className={classes.logo}>
                <img src={logo}/> 
            </Link>

            <ul className={classes.menuList}>
                <li>
                    <Link to='/' className={classes.menuItem}>Schedule</Link>
                </li>
                <li>
                    <Link to='/about' className={classes.menuItem}>About</Link>
                </li>
                <li>
                    <Link to='/contact-us' className={classes.menuItem}>Contact Us</Link>
                </li>
            </ul>
            
        </Toolbar>    
    )
}
