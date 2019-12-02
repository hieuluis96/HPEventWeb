import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Items from '../components/ListItems/Items';
import DenseAppBar from '../components/HeaderBar/HeaderBar';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import InstallBanner from '../components/InstallBanner';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        backgroundColor: theme.palette.background.paper,
    },
}));




export default function DanhSachSuKien(props) {

    const classes = useStyles();



    useEffect(() => {
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            console.log("deferredPrompt !!!!")
            e.preventDefault();
        }
        )
    },[]);



    return (
        <div className={classes.root}>
            <InstallBanner />
            <DenseAppBar
                title={"Danh Sách Sự Kiện"}
            />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />

            <Fade timeout={200}>
                <div>The content of the Popper.</div>
            </Fade>
        </div>
    )
}