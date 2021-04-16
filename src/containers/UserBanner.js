import React, {useState} from 'react'
import { Card, Typography, IconButton, Avatar, Box } from '@material-ui/core'
// import { getAuthor, getPostsByUser, saveUserBio } from '../../network';
// import Post from '../../components/Post';
import { PhotoCamera } from '@material-ui/icons'
import { dashStyles } from '../styles/dashStyles';

export default function UserBanner({ dataUser }) {
    const classes = dashStyles()
    const [editBioMode, setEditBioMode] = useState(false)
    console.log(dataUser)
    return (
        // <Box maxWidth="sm" className={classes.dash}>
            
            /* <Typography className={classes.dashTitle} >
                Dashboard
            </Typography> */
            
            <Card variant="outlined" className={classes.userBanner}>
					
                {/* <CardMedia
                    className={classes.userBannerImage}
                    // https://images.unsplash.com/photo-1506813561347-cbbdf7b3f520?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1547&q=80
                    // https://images.unsplash.com/photo-1597761081347-b9d37f912156?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80
					image={dataUser?.bannerUrl ? dataUser.bannerUrl : "https://images.unsplash.com/photo-1495463349271-af9a2bf23aff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1390&q=80"}
					title={dataUser?.username}

                /> */}

                <Box className={classes.userAvatarBox}>
                    <Avatar 
                        alt={dataUser?.username||dataUser?.firstName+' '+dataUser?.lastName} 
                        src={dataUser?.profilePicture ? dataUser.profilePicture : "https://images.unsplash.com/photo-1574352067721-72d5913bd35c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"}  
                        className={classes.userAvatarImage}
                    />
                    {
                        dataUser?.email === dataUser?.email &&
                        <IconButton className={classes.userAvatarUploadIcon}>
                            <PhotoCamera />
                        </IconButton>
                    }
                </Box>
                
                <Box className={classes.userPanel}>
                    {/* {
                        dataUser?.email === dataUser?.email &&
                        <IconButton className={classes.uploadProfilePicture}>
                            <PhotoCamera />
                        </IconButton>
                    } */}

                    <Box className={classes.userInfo}>
                        <Typography className={classes.username}>{dataUser?.username}</Typography>
                        {/* {
                            editBioMode 
                            ? <TextField 
                                className={classes.formField} 
                                value={dataUser?.bio}
                                // onChange={(e) => setUserBioText(e.target.value)} 
                                id="outlined-basic" 
                                label="User Bio" 
                                variant="outlined" 
                                multiline
                            />	
                            : <Typography className={classes.userBio}>{dataUser?.bio && dataUser.bio}</Typography>
                        } */}
                        
                        
                        {/* {
                            dataUser?.email === dataUser?.email &&
                            editBioMode
                            ? 
                            <Box className={classes.editBox}>
                                <IconButton 
                                    className={classes.editButton} 
                                    // onClick={() => {
                                    //     saveUserBioEdit()
                                    //     toggleEdit()
                                    // }}
                                >
                                    <DoneIcon fontSize="small"/>
                                </IconButton>
                                <IconButton 
                                    className={classes.editButton} 
                                    onClick={() => {
                                        // toggleEdit()
                                    }}
                                >
                                    <ClearIcon fontSize="small"/>
                                </IconButton>
                            </Box>
                            : dataUser?.email === dataUser?.email &&
                            <Box className={classes.editBox}>
                                <IconButton 
                                    className={classes.editButton} 
                                    // onClick={() => {toggleEdit()}}
                                >
                                    <EditIcon fontSize="small"/>
                                </IconButton>
                            </Box>
                        } */}
                    </Box>
                </Box>
                
        
                {/* <Box className={classes.userPosts}>
                { 
                    posts?.length > 0 &&
                    <Box >
                        <Typography className={classes.name}>{userDetail?.username||userDetail?.firstName+' '+userDetail?.lastName}'s posts</Typography>			
                        {
                            posts.map((item, index) => (                        
                            <Post 
                                key={index} 
                                post={item} 
                                token={token}
                                currentUser={currentUser}
                                currentUserDB={currentUserDB}
                            />                       
                        ))}
                    </Box>
                }
                </Box> */}
		    </Card>
        // </Box>
    )
}
