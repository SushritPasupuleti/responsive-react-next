import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import CardStack from '../containers/cardstack';
import { makeStyles } from '@material-ui/core/styles';
import { Navbar, CyberPunkButton } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <Box my={4}>
          <Navbar></Navbar>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
        </Typography>
        <CyberPunkButton primary></CyberPunkButton>
        <CyberPunkButton></CyberPunkButton>
          <CardStack></CardStack>
          <Link href="/about" color="secondary">
            Go to the about page
        </Link>
        </Box>
      </Container>
      <Container maxWidth="xl" className={classes.root}>
        <Box my={4}>
          <CardStack></CardStack>
        </Box>
      </Container>
    </>
  );
}