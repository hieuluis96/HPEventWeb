import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DenseAppBar from '../components/HeaderBar/HeaderBar';
import { Grid, Paper, Typography, Box, CssBaseline, Container, AppBar } from '@material-ui/core';
import LabelBottomNavigation from '../components/BottomNavigation/LabelBottomNavigation';
import SingleLineGridList from '../components/ListItems/SingleList';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';



const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100vw',
    },
    container: {
        display: 'flex',
    },
    paper: {
        // margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        display: 'block',
        color:"white"

    },
    detailsInfo: {
        // margin: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),

    },
    itemCount: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
    mainText: {
        ...theme.typography.h5,
    },
    textSpan: {
        display: 'flex',
        alignItems: 'flex-start',
        paddingLeft: theme.spacing(1),
    },
    spanContainer: {
        ...theme.typography.button,
        backgroundColor: '#d9d9d9',
        padding: theme.spacing(1),
        display: "flex"
    }
}));


export default function ChiTietSuKien(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Paper style={{ paddingBottom: "10vh" }}>
                <DenseAppBar
                    title={"THỜI GIAN CÒN LẠI"}
                    backAction
                />
                <Grid className={classes.itemCount} container>
                    <Grid item xs={3}>
                        <Box
                            component="span"
                            className={classes.paper}>
                            <Typography
                                // className={classes.itemCount}
                                variant="h6"
                            >
                                O9
                        </Typography>
                            <Typography
                                component="h6"
                                color="secondary"
                            >
                                NGÀY
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className={classes.paper}>
                            <Typography
                                variant="h6"
                                component="h6"
                            >
                                O9
                        </Typography>
                            <Typography
                                color={"textSecondary"}
                                // className={classes.itemCount}
                                component="h6"
                                color="secondary"
                            >
                                GIỜ
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className={classes.paper}>
                            <Typography
                                variant="h6"
                                component="h6"
                            >
                                O9
                        </Typography>
                            <Typography
                                // className={classes.itemCount}
                                component="h6"
                                color="secondary"
                            >
                                PHÚT
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className={classes.paper}>
                            <Typography
                                variant="h6"

                                component="h6"
                            >
                                O9
                        </Typography>
                            <Typography
                                color="secondary"
                                // className={classes.itemCount}
                                component="h6"
                            >
                                GIÂY
                        </Typography>
                        </Box>
                    </Grid>

                </Grid>

                <Container >
                    <Typography
                        // className={classes.itemCount}
                        variant="h6"
                    >
                        {"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                    >
                        {"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    </Typography>
                    <Typography
                        // className={classes.itemCount}
                        variant="subtitle2"
                    >
                        {"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                    </Typography>
                </Container>

                <Box component="div" className={classes.spanContainer}>
                    <Typography className={classes.textSpan}>
                        Diễn giả
                 </Typography>
                </Box>


                <SingleLineGridList />


                <Box component="div" className={classes.spanContainer}>
                    <Typography className={classes.textSpan}>
                        THÔNG TIN VÀ ĐỊA ĐIỂM
                 </Typography>
                </Box>



                <Container className={classes.detailsInfo} style={{ display: 'flex', boxShadow: "none" }}>
                    {/* <Box style={{ display: 'flex', flexDirection: 'row' ,alignItems:'space-around'}}>
                    <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <PhoneAndroidIcon />
                        <Typography className={classes.textSpan}>
                            Điện thoại
                 </Typography>
                    </Box>
                    <Box>
                        {"mskamdks"}
                    </Box>
                </Box> */}

                    <Grid container spacing={1}>

                        <Grid item xs={6} sm={6}>
                            <Grid container direction="row">
                                <PhoneAndroidIcon style={{color:"green"}} />
                                <Typography style={{color:"green"}} component="span" variant={"subtitle2"} className={classes.textSpan}>
                                    Điện thoại
                        </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Typography component="span" variant={"subtitle2"} className={classes.textSpan}>
                                00000000000
                        </Typography>
                        </Grid>

                        <Grid style={{ alignSelf: "center" }} item xs={6} sm={6}>
                            <Grid container alignItems="center" direction="row">
                                <PhoneAndroidIcon style={{color:"green"}} />
                                <Typography style={{color:"green"}}  gutterBottom className={classes.textSpan} component="span" variant={"subtitle2"}>
                                  Địa điểm
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Typography  component="span" style={{textAlign: "left"}} variant={"subtitle1"} className={classes.textSpan}>
                                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                            </Typography>
                        </Grid>


                        <Grid item xs={6} sm={6}>
                            <Grid container direction="row">
                                <PhoneAndroidIcon  style={{color:"green"}}/>
                                <Typography style={{color:"green"}}  component="span" variant={"subtitle2"} className={classes.textSpan}>
                                    Email
                        </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Typography className={classes.textSpan}>
                                00000000000
                        </Typography>
                        </Grid>
                    </Grid>


                </Container>
            </Paper>


            <LabelBottomNavigation />

        </React.Fragment>
    )
}