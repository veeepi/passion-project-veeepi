import React, {useState, useEffect, useRef} from 'react';
import { Box, Button, Card, FormControl, IconButton, Input, InputLabel, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import RemoveIcon from '@material-ui/icons/Remove';
import RemoveCircleTwoToneIcon from '@material-ui/icons/RemoveCircleTwoTone';
import { newActionFormStyles } from '../../styles/sessionStyles';
import firebase from '../../firebase/config';

export default function NewActionForm({authUser, dataUser, action, toggleAddAction}) {
    const classes = newActionFormStyles();

    const [clientUserId, setClientUserId] = useState(action.clientUserId)
    const [name, setName] = useState(action.name)
    const [orderIndex, setOrderIndex] = useState(action.orderIndex + 100)
    const [notes, setNotes] = useState(action.notes)

    const [qty, setQty] = useState(0)
    const [qtyTarget, setQtyTarget] = useState(action.qtyTarget)
    const [qtyType, setQtyType] = useState(action.qtyType)
    
    const [stress, setStress] = useState(0)
    const [stressTarget, setStressTarget] = useState(action.stressTarget)
    const [stressType, setStressType] = useState(action.stressType)
    
    // Save Action function
    const actionsRef = firebase.firestore().collection('actions')
    const sessionsRef = firebase.firestore().collection('sessions')
    const saveAction = (e) => {
        e?.preventDefault()
        actionsRef
            .add({
                clientUserId: clientUserId,
                coachUserId: authUser.uid,
                name: name,
                notes: notes,
                orderIndex: orderIndex,
                qty: qty,
                qtyTarget: qtyTarget,
                qtyType: qtyType,
                sessionId: action.sessionId,
                stress: stress,
                stressTarget: stressTarget,
                stressType: stressType,
                timestamp: Date.now()
            }).then(docRef => {
                actionsRef.doc(docRef.id).update({
                    id: docRef.id,
                })
                sessionsRef.doc(action.sessionId).update({
                    lastOrderIndex: orderIndex,
                })
                toggleAddAction()
            })
    }

    return (
        <Card className={classes.container}>
            <Box className={classes.actionInfo}>
                <TextField className={classes.actionTitle} id="Name" label="name" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField className={classes.notes} id="notes" label="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} multiline />
            </Box>
            <Box className={classes.actionData}>
                <Typography>{'target'}</Typography>
                <TextField className={classes.qtyTarget} id="qtyTarget" label={action.qtyType} value={qtyTarget} onChange={(e) => setQtyTarget(e.target.value)} />
                <TextField className={classes.stressTarget} id="stressTarget" label={action.stressType} value={stressTarget} onChange={(e) => setStressTarget(e.target.value)} />
            </Box>
            <Box className={classes.actionData}>
                <Typography>{'actual'}</Typography>
                <Box className={classes.dataBox}>
                    <IconButton className={classes.dataButton} onClick={() => {if (qty > 0) {setQty(qty-1)} }}><RemoveCircleTwoToneIcon fontSize="small" className={classes.dataIcon} /></IconButton>
                    <TextField className={classes.qty} id="qty" label={action.qtyType} value={qty} onChange={(e) => setQty(e.target.value)} />
                    <IconButton className={classes.dataButton} onClick={() => setQty(qty+1)}><AddCircleTwoToneIcon fontSize="small" className={classes.dataIcon} /></IconButton>                
                </Box>
                <Box className={classes.dataBox}>
                    <IconButton className={classes.dataButton} onClick={() => {if (stress > 0) {setStress(stress-1)} }}><RemoveCircleTwoToneIcon fontSize="small" className={classes.dataIcon} /></IconButton>
                    <TextField className={classes.stress} id="stress" label={action.stressType} value={stress} onChange={(e) => setStress(e.target.value)} />
                    <IconButton className={classes.dataButton} onClick={() => setStress(stress+1)}><AddCircleTwoToneIcon fontSize="small" className={classes.dataIcon} /></IconButton>
                </Box>
            </Box>
            <Box className={classes.actionButtons}>
                {/* Coach Only */}
                <Typography>{'New Set'}</Typography>
                <TextField className={classes.orderIndex} id="orderIndex" label="order index" value={orderIndex} onChange={(e) => setOrderIndex(e.target.value)} />
                <Button className={classes.buttonPrimary} onClick={(e) => saveAction(e)} >SAVE</Button>
            </Box>
        </Card>
    )
}
