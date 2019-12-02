import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button, ListItemIcon, ListItemText, ListItem, Chip } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/CloseOutlined';
import { useAddToHomescreenPrompt } from '../../libs/useAddToHomeScreen';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
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

export default function InstallBanner() {
    const classes = useStyles();
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isVisible, setVisibleState] = React.useState(false);

    const hide = () => setVisibleState(false);

    React.useEffect(
        () => {
            if (prompt) {
                setVisibleState(true);
            }
        },
        [prompt]
    );

    if (!isVisible) {
        return <div />;
    }
    return (
        <div className={classes.root}>
            <ListItem>
                <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText
                    primary="Install HPEvent"
                    secondary={"Add HPEvent to home screen to using app"}
                />
                <Chip onClick={promptToInstall} label="Install" />
            </ListItem>
        </div>
    );
}