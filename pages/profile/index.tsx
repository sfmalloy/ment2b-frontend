import { Grid, Collapse, List, ListItem, ListItemButton, ListItemText, ListSubheader, Typography, Divider, Avatar, Stack } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import * as React from 'react'

function makeName({first="Some", last="Person"}: {first?:string,last?:string} = {}): string {
    return first + ' ' + last;
}

function Profile() {
    const [skills, showSkills] = React.useState(false);
    const [dSkills, showDSkills] = React.useState(false)
    const [grades, showGrades ] = React.useState(false)
    const [userInfo, setUserInfo] = React.useState<any>(undefined);
    const [mentorInfo, setMentorInfo] = React.useState<any>(undefined);

    const handleSkillsClick = () => {
        showSkills(!skills);
    }
    const handleDSkillsClick = () => {
        showDSkills(!dSkills);
    }
    const handleGradesClick = () => {
        showGrades(!grades);
    }

    React.useEffect(() => {
        let loading = false;
        fetch('http://localhost:8080/user', {
            credentials: 'include'
        }).then((res) => {
            if (!loading) {
                return res.json();
            }
        }).then(json => {
            setUserInfo(json);
            console.log('hi there wow neat');
            console.log(json);
        });

        fetch('http://localhost:8080/match', {
            credentials: 'include'
        }).then((res) => {
            if (!loading) {
                return res.json();
            }
        }).then(json => {
            setMentorInfo(json)
        });

        return () => {
            loading = true;
        }
    }, []);

    if (userInfo) {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={4} justifyContent="left">
                        <Typography variant="h3" component="h3" gutterBottom>
                            { makeName((userInfo.first_name, userInfo.last_name)) }
                        </Typography>
                        <Grid item xs='auto'>
                        <Typography variant="subtitle1">
                            { 
                                userInfo.position
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle2'>
                            {
                                userInfo.sub_division
                            }
                        </Typography>
                    </Grid>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4} justifyContent='right'>
                           
                        <Avatar sx={{ width:125, height:125 }} alt="Avatar"><AccountCircleIcon fontSize='large'/></Avatar>
                         
                    </Grid>
                </Grid>
                <Divider/>
                <React.Fragment>
                    <Grid container justifyContent="center" spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Personal Info
                            </Typography>
                            <List
                                sx={{ width:'100%', maxWidth:360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby='nested-list-subheader'
                                subheader={ <ListSubheader component="div" id="nested-list-subheader"></ListSubheader> }>
                                <ListItem>
                                    <ListItemText primary="Email" />
                                    { userInfo.email }
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Grade" />
                                    { userInfo.grade }
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Description" />
                                    { userInfo.profile_description }
                                </ListItem>
                                <ListItemButton onClick={handleSkillsClick}>
                                    <ListItemText primary="Skills" />
                                    {skills ? <ExpandLess /> :<ExpandMore />}
                                </ListItemButton>
                                <Collapse in={skills} timeout="auto" unmountOnExit>
                                    <List sx={{ maxHeight:200, overflow:'auto' }} component="div" disablePadding>
                                        {userInfo.skills.map((value: string) => 
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
                                    <List sx={{ maxHeight:200, overflow:'auto' }} component="div" disablePadding>
                                        {userInfo.desired_skills.map((value: string) => 
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
                                    <List sx={{ maxHeight:200, overflow:'auto' }} component="div" disablePadding>
                                        {userInfo.desired_grades.map((value: string) => 
                                            <ListItem key={value} sx={{ pl: 6 }}>
                                                <ListItemText primary={value}/>
                                            </ListItem>
                                        )}
                                    </List>
                                </Collapse>
                            </List>
                        </Grid>
                        { userInfo.open_to_mentor && (
                            <Grid item xs={6} sm={3}>
                            <List
                                sx={{ width:'100%', maxWidth:360, maxHeight:'auto', bgcolor:'background.paper', overflow:'auto' }}
                                component="nav"
                                aria-labelledby='nested-list-subheader'
                                subheader={ <ListSubheader component="div" id="nested-list-subheader">Mentor Matches</ListSubheader> }>
                                <List sx={{ maxHeight:300, overflow:'auto' }} component="div" disablePadding>
                                {userInfo.mentee_list.map((value: string) => 
                                    <ListItem key={value} sx={{ pl: 6 }}>
                                        <ListItemText primary={value}/>
                                    </ListItem>
                                )}
                                </List>
                            </List></Grid>)}
                        { userInfo.open_to_be_mentored && ( 
                        <Grid item xs={6} sm={3}>
                            <List
                            sx={{  width:'100%', maxWidth:360, maxHeight:'auto', bgcolor:'background.paper', overflow:'auto' }}
                            component="nav"
                            aria-labelledby='nested-list-subheader'
                            subheader={ <ListSubheader component="div" id="nested-list-subheader">Mentee Matches</ListSubheader> }>
                            <List sx={{ maxHeight:300, overflow:'auto' }} component="div" disablePadding>
                            {userInfo.mentor_list.map((value: string) => 
                                <ListItem key={value} sx={{ pl: 6 }}>
                                    <ListItemText primary={value}/>
                                </ListItem>
                            )}
                            </List>
                        </List></Grid>)}
                    </Grid>    
                </React.Fragment>
            </div>
        )
    } else {
        return <></>
    }
}

export default Profile;
