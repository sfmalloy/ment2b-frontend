import { Box, Grid, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography, Stack } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import * as React from 'react'

function Profile(userInfo: any) {
    
    const [skills, showSkills] = React.useState(false);
    const [dSkills, showDSkills] = React.useState(false)
    const [grades, showGrades ] = React.useState(false)

    const handleSkillsClick = () => {
        showSkills(!skills);
    }
    const handleDSkillsClick = () => {
        showDSkills(!dSkills);
    }
    const handleGradesClick = () => {
        showGrades(!grades);
    }

    const dSkillsList = ["yes","no","something"];
    const skillsList = ["skill1","skill2"];
    const gradesList = ["grade1"];

    // const dSkillsList = userInfo.desiredSkills;
    // const skillsList = userInfo.skills;
    // const gradesList = userInfo.grades;

    return (
        <div>
            <Typography variant="h1" component="h2">
                Profile
            </Typography>
            <React.Fragment>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Personal Info
                        </Typography>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                            component="nav"
                            aria-labelledby='nested-list-subheader'
                            subheader={ <ListSubheader component="div" id="nested-list-subheader"></ListSubheader> }>
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
                            <ListItemButton onClick={handleSkillsClick}>
                                <ListItemText primary="Skills" />
                                {skills ? <ExpandLess /> :<ExpandMore />}
                            </ListItemButton>
                            <Collapse in={skills} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {skillsList.map((value: string) => 
                                        <ListItem key={value} sx={{ pl: 6 }}>
                                            <ListItemText primary={value}/>
                                        </ListItem>
                                    )}
                                </List>
                            </Collapse>
                            <ListItemButton onClick={handleDSkillsClick}>
                                <ListItemText primary="Desired Skills" />
                                {dSkills ? <ExpandLess /> :<ExpandMore />}
                            </ListItemButton>
                            <Collapse in={dSkills} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {dSkillsList.map((value: string) => 
                                        <ListItem key={value} sx={{ pl: 6 }}>
                                            <ListItemText primary={value}/>
                                        </ListItem>
                                    )}
                                </List>
                            </Collapse>
                            <ListItemButton onClick={handleGradesClick}>
                                <ListItemText primary="Desired Grade" />
                                {grades ? <ExpandLess /> :<ExpandMore />}
                            </ListItemButton>
                            <Collapse in={grades} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {gradesList.map((value: string) => 
                                        <ListItem key={value} sx={{ pl: 6 }}>
                                            <ListItemText primary={value}/>
                                        </ListItem>
                                    )}
                                </List>
                            </Collapse>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ width: '100%' }}>
                            <Stack spacing={2}>
                                <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                                component="nav"
                                aria-labelledby='nested-list-subheader'
                                subheader={ <ListSubheader component="div" id="nested-list-subheader">Mentor Matches</ListSubheader> }>

                                </List>
                                <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                                component="nav"
                                aria-labelledby='nested-list-subheader'
                                subheader={ <ListSubheader component="div" id="nested-list-subheader">Mentee Matches</ListSubheader> }>

                                </List>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>    
            </React.Fragment>
        </div>
    )
}

export default Profile;
