import React, {useState, useEffect} from 'react';
import { Box, Button, Card, FormControl, Input, InputLabel, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { sessionActionStyles } from '../../styles/sessionStyles';
import firebase from '../../firebase/config';

export default function SessionAction({action, authUser, dataUser}) {
    const classes = sessionActionStyles();

    const [ownerCoach, setOwnerCoach] = useState(authUser.uid === action.coachUserId)

    const [name, setName] = useState(action.name)
    const [orderIndex, setOrderIndex] = useState(action.orderIndex)
    const [notes, setNotes] = useState(action.notes)

    const [qtyTarget, setQtyTarget] = useState(action.qtyTarget)
    const [stressTarget, setStressTarget] = useState(action.stressTarget)
    
    const [qty, setQty] = useState(action.qty)
    const [stress, setStress] = useState(action.stress)

    const [actionEditMode, setActionEditMode] = useState(false)
    const saveAction = (e) => {
        e.preventDefault()
        console.log("doneSessionCreate clicked")
        setActionEditMode(false)
    }
    
    const test = true
    console.log("SessionAction, action: ", action)
    return (
        <Card className={classes.container}>
            <Box className={classes.actionInfo}>
                <TextField className={classes.actionTitle} disabled={!test} id="Name" label="name" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField className={classes.notes} disabled={!test} id="notes" label="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} multiline />
            </Box>
            <Box className={classes.actionData}>
                <TextField className={classes.qtyTarget} disabled={!test} id="qtyTarget" label={action.qtyType} value={qtyTarget} onChange={(e) => setQtyTarget(e.target.value)} />
                <TextField className={classes.stressTarget} disabled={!test} id="stressTarget" label={action.stressType} value={stressTarget} onChange={(e) => setStressTarget(e.target.value)} />
            </Box>
            <Box className={classes.actionData}>
                <TextField className={classes.qty} disabled={!test} id="qty" label={action.qtyType} value={qty} onChange={(e) => setQty(e.target.value)} />
                <TextField className={classes.stress} disabled={!test} id="stress" label={action.stress} value={stress} onChange={(e) => setStress(e.target.value)} />
            </Box>
            <Box className={classes.actionButtons}>
                {/* Coach Only */}
                <Button className={classes.buttonSecondary} disabled={!ownerCoach} onClick={() => setActionEditMode(!actionEditMode)} >{actionEditMode ? 'EDIT' : 'done edit'}</Button>
                <TextField className={classes.orderIndex} disabled={!test} id="orderIndex" label="order index" value={orderIndex} onChange={(e) => setOrderIndex(e.target.value)} />
                <Button className={classes.buttonPrimary} disabled={!ownerCoach} onClick={(e) => saveAction(e)} >DONE</Button>
            </Box>
        </Card>
    )
}
