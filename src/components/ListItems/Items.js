import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Box, Grid } from '@material-ui/core';
import {
    Link, LinkProps
} from "react-router-dom";


const AdapterLink = (props) => (
    <Link {...props} />
);

const useStyles = makeStyles(theme => ({
    root: {
        // padding: theme.spacing(3, 2),
        // maxWidth: 360,

        backgroundColor: theme.palette.background.paper,
    },
    block: {
        display: 'block',
        color: "black"
    },
}));

export default function Items() {
    const classes = useStyles();

    const handleMenuItemClick = (event, index) => {

    };



    return (
        <Paper className={classes.root}>
            <ListItem
                component={Link}
                to="/detail"
                alignItems="center">
                <ListItemText
                    primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    secondary={
                        <React.Fragment>
                            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                        </React.Fragment>
                    }
                />
                <Grid
                    container
                    alignItems="flex-end"
                    direction="column"
                >
                    <Grid
                        item
                    >
                        <Typography
                            component="span"
                            variant="body2"
                            // className={classes.inline}
                            color="textSecondary"
                        >
                            {"08:30"}

                        </Typography>
                    </Grid>
                    <Grid
                        item
                    >
                        <Typography
                            component="span"
                            variant="body2"
                            // className={classes.inline}
                            color="textSecondary"
                        >
                            {"10/12/2019"}

                        </Typography>
                    </Grid>


                </Grid>

            </ListItem>
        </Paper>
    );
}