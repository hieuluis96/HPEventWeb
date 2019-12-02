import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function DenseAppBar(props) {
    const classes = useStyles();

    const { title, backAction } = props;

    return (
        <div className={classes.root}>
            <AppBar style={{boxShadow: 'none'}} color="primary" position="static">
                <Toolbar variant="dense">
                    {
                        backAction &&
                        <IconButton 
                        component={Link}
                        to="/"
                        edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <ArrowBackOutlinedIcon />
                        </IconButton>
                    }

                    <Typography variant="h6" color="inherit">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}


DenseAppBar.defaultProps = {
    title: "",
    backAction: false
}