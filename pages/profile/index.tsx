import { Box, Grid, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import * as React from 'react'

function generate(list: String[], element: React.ReactElement){
    return list.map((value) => 
        React.cloneElement(element, {
            value
        })
    )
}

function Profile(userInfo: any) {
    
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div>
            <Typography variant="h1" component="h2">
                Profile
            </Typography>
            <React.Fragment>
                <Box sx={{ flexGrow: 1, maxWidth: 752}}>
                    <Grid container spacing={2}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Personal Info
                        </Typography>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                            component="nav"
                            aria-labelledby='nested-list-subheader'
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader"></ListSubheader>
                            }
                        >
                            <ListItem>
                                <ListItemText primary="First Name" />
                                { userInfo.firstName }
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Last Name" />
                                { userInfo.lastName }
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" />
                                { userInfo.email }
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Grade" />
                                { userInfo.Grade }
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Position" />
                                { userInfo.position }
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Subdivision" />
                                { userInfo.subDivision }
                            </ListItem>
                            <ListItemButton onClick={handleClick}>
                                <ListItemText primary="Skills" />
                                {open ? <ExpandLess /> :<ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>

                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton onClick={handleClick}>
                                <ListItemText primary="Desired Skills" />
                                {open ? <ExpandLess /> :<ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {generate(
                                        userInfo.desiredSkills,
                                        <ListItem>
                                            <ListItemText
                                                primary="{value}"/>
                                        </ListItem>
                                    )}
                                </List>
                            </Collapse>
                            <ListItemButton onClick={handleClick}>
                                <ListItemText primary="Desired Grade" />
                                {open ? <ExpandLess /> :<ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Grid>    
                </Box>
            </React.Fragment>
        </div>
    )
}

export default Profile;
