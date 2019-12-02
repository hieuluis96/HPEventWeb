import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined'
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import CropFreeIcon from '@material-ui/icons/CropFree';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CalendarViewDayOutlinedIcon from '@material-ui/icons/CalendarViewDayOutlined'
import { AppBar } from '@material-ui/core';

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        top: "auto",
        bottom: 0,
        width: '100vw',
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('info');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar position="fixed" className={classes.root}>
            <BottomNavigation value={value} onChange={handleChange} >
                <BottomNavigationAction component={Link} to="/detail" label="Chi tiết" value="info" icon={<InfoOutlinedIcon />} />
                <BottomNavigationAction label="Chủ đề" value="categories" icon={<CalendarViewDayOutlinedIcon />} />
                <BottomNavigationAction label="" value="qr" icon={<CropFreeIcon />} />

                <BottomNavigationAction label="Bản đồ" value="map" icon={<MapOutlinedIcon />} />
                <BottomNavigationAction label="Ý kiến" value="requires" icon={<PieChartOutlinedIcon />} />
            </BottomNavigation>
         </AppBar>
    );
}