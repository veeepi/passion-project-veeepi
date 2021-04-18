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
            <Card variant="outlined" className={classes.userBanner}>

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
                    <Box className={classes.userInfo}>
                        <Typography className={classes.username}>{dataUser?.username}</Typography>
                    </Box>
                </Box>
		    </Card>
    )
}
