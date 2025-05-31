import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const Header = () => {
    return (
        <AppBar
            position='static'
            sx={{
                background: '#2c387e',
            }}
        >
            <Toolbar>
                <img
                    src='logo768.png'
                    alt='Logo'
                    height='30px'
                />

                <Typography
                    variant='h6'
                    component='h1'
                    noWrap
                    sx={{ 
                        flexGrow: 1,
                        fontFamily: 'Bungee',
                    }}
                >
                    &nbsp;&nbsp;Serial Terminal
                </Typography>

            </Toolbar>
        </AppBar>
    )
}

export default Header