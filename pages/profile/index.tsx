import { Box, CardContent, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import * as React from 'react'



function Profile() {
    
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
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Personal Info
                    </Typography>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                        component="nav"
                        aria-labelledby='nested-list-subheader'
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Nested List Items
                            </ListSubheader>
                        }
                    >
                        <ListItemButton>
                            <ListItemText primary="First Name" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Last Name" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Email" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Grade" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Position" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Subdivision" />
                        </ListItemButton>
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
                                <ListItemButton sx={{ pl: 4 }}>
                                    
                                </ListItemButton>
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
                </CardContent>
            </React.Fragment>
        </div>
    )
}

export default Profile;
