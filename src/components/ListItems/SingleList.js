
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Avatar from '@material-ui/core/Avatar';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
        overflow: "hidden",
        width: '100vw',
        overflowX: "scroll",
        
    },
    gridList: {
        alignItems: 'center',
        flexWrap: 'nowrap',
        display: 'flex',
        minWidth:"20vw",
        flexDirection: 'column',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        margin: theme.spacing(1),
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box component="div" className={classes.gridList}>
                <Avatar style={{ alignSelf: 'center' }}>H</Avatar>
                <Typography component="span" variant={"subtitle2"}>
                    Ông Yeah
                </Typography>
            </Box>

            <Box component="div" className={classes.gridList}>
                <Avatar style={{ alignSelf: 'center' }}>H</Avatar>
                <Typography component="span" variant={"subtitle2"}>
                    Ông Yeah
                </Typography>
            </Box>

            <Box component="div" className={classes.gridList}>
                <Avatar style={{ alignSelf: 'center' }}>H</Avatar>
                <Typography component="span" variant={"subtitle2"}>
                    Ông Yeah
                </Typography>
            </Box>

            <Box component="div" className={classes.gridList}>
                <Avatar style={{ alignSelf: 'center' }}>H</Avatar>
                <Typography component="span" variant={"subtitle2"}>
                    Ông Yeah
                </Typography>
            </Box>

            <Box component="div" className={classes.gridList}>
                <Avatar style={{ alignSelf: 'center' }}>H</Avatar>
                <Typography component="span" variant={"subtitle2"}>
                    Ông Yeah
                </Typography>
            </Box>

            <Box component="div" className={classes.gridList}>
                <Avatar style={{ alignSelf: 'center' }}>H</Avatar>
                <Typography component="span" variant={"subtitle2"}>
                    Ông Yeah
                </Typography>
            </Box>

            <Box component="div" className={classes.gridList}>
                <Avatar style={{ alignSelf: 'center' }}>H</Avatar>
                <Typography component="span" variant={"subtitle2"}>
                    Ông Yeah
                </Typography>
            </Box>

            <Box component="div" className={classes.gridList}>
                <Avatar style={{ alignSelf: 'center' }}>H</Avatar>
                <Typography component="span" variant={"subtitle2"}>
                    Ông Yeah  
                </Typography>
            </Box>

            <Box component="div" className={classes.gridList}>
                <Avatar style={{ alignSelf: 'center' }}>H</Avatar>
                <Typography component="span" variant={"subtitle2"}>
                    Ông Yeah
                </Typography>
            </Box>
        </div>
    );
}