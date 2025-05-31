import React from 'react'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import version from '../version.js'

const Footer = () => {
    return (
        <Box sx={{ marginTop: 'auto' }}>
            { /* Made in Germany :D */}
            <Box sx={{ mx: 'auto', mt: 0 }}>
                <Typography
                align='center'
                display='block'>
                <Link href='#' target='_blank' underline='hover' color='inherit'>Meow~!</Link>
                </Typography>
            </Box>

            { /* Version */}
            <Typography
                variant='caption'
                align='center'
                display='block'
                sx={{ color: '#ddd' }}>
                <Link href='#' target='_blank' underline='hover' color='inherit'>{version.name}</Link>
            </Typography>
        </Box>
    )
}

export default Footer

      