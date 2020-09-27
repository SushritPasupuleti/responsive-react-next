import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'next/link';

function Navbar() {
    return (
        <Container maxWidth="sm" style={{'background': 'rgb(0 208 255)'}}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
        </Typography>
            </Box>
        </Container>
    )
}

export default Navbar
