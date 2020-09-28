import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PicCard from '../components/card';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                        <PicCard></PicCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <PicCard></PicCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <PicCard></PicCard>
                </Grid>
                <Grid item xs={"auto"} sm={"auto"}>
                    <PicCard title="auto boi"></PicCard>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <PicCard></PicCard>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <PicCard></PicCard>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <PicCard></PicCard>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <PicCard></PicCard>
                </Grid>
                <Grid item xs={"auto"} sm={"auto"}>
                    <PicCard title="auto boi"></PicCard>
                </Grid>
                <Grid item xs={"auto"} sm={"auto"}>
                    <PicCard title="auto boi"></PicCard>
                </Grid>
                <Grid item xs={"auto"} sm={"auto"}>
                    <PicCard title="auto boi"></PicCard>
                </Grid>
                <Grid item xs={"auto"} sm={"auto"}>
                    <PicCard title="auto boi"></PicCard>
                </Grid>
            </Grid>
        </div>
    );
}
