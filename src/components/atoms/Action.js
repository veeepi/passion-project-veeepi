import React, {useState, useEffect, useRef} from 'react';
import { Box, Button, Card, IconButton, TextField, Typography } from '@material-ui/core';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import RemoveCircleTwoToneIcon from '@material-ui/icons/RemoveCircleTwoTone';
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

    
    // Save Action function
    const actionsRef = firebase.firestore().collection('actions')
    const saveAction = (e) => {
        e?.preventDefault()
        // clear delay timer, if exists
        if (instance.delayTimer) {
            clearTimeout(instance.delayTimer)
        }
        actionsRef
            .doc(action.id)
            .update({
                name: name,
                notes: notes,
                orderIndex: orderIndex,
                qty: qty,
                qtyTarget: qtyTarget,
                stress: stress,
                stressTarget: stressTarget,
                timestamp: Date.now()
            })
        console.log("doneSessionCreate clicked")
        setActionEditMode(false)
    }

    // Call SaveAction after X seconds
    const {current: instance} = useRef({});
    useEffect(() => {
        // clear delay timer, if exists
        if(qty !== action.qty || stress !== action.stress) {
            if (instance.delayTimer) {
                clearTimeout(instance.delayTimer)
            }
            // set delay timer, once expired, run POST method
            instance.delayTimer = setTimeout(() => { 
                saveAction()
            }, 4000); 
        }
    }, [action.qty, action.stress, qty, stress])

    // console.log("SessionAction, action: ", qty)
    return (
        <Card className={classes.container}>
            <Box className={classes.actionInfo}>
                <TextField className={classes.actionTitle} disabled={!actionEditMode} id="Name" label="name" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField className={classes.notes} disabled={!actionEditMode} id="notes" label="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} multiline />
            </Box>
            <Box className={classes.targetData}>
                <Typography>{'target'}</Typography>
                <TextField className={classes.qtyTarget} disabled={!actionEditMode} id="qtyTarget" label={action.qtyType} value={qtyTarget} onChange={(e) => setQtyTarget(e.target.value)} />
                <TextField className={classes.stressTarget} disabled={!actionEditMode} id="stressTarget" label={action.stressType} value={stressTarget} onChange={(e) => setStressTarget(e.target.value)} />
            </Box>
            <Box className={classes.actionData}>
                <Typography>{'actual'}</Typography>
                <Box className={classes.dataBox}>
                    <IconButton className={classes.dataButton} disabled={!actionEditMode} onClick={() => {if (qty > 0) {setQty(qty-1)} }}><RemoveCircleTwoToneIcon fontSize="small" className={classes.dataIcon} /></IconButton>
                    <TextField className={classes.qty} InputProps={{ className: classes.qty }} disabled={!actionEditMode} id="qty" label={action.qtyType} value={qty} onChange={(e) => setQty(e.target.value)} />
                    <IconButton className={classes.dataButton} disabled={!actionEditMode} onClick={() => setQty(qty+1)}><AddCircleTwoToneIcon fontSize="small" className={classes.dataIcon} /></IconButton>                
                </Box>
                <Box className={classes.dataBox}>
                    <IconButton className={classes.dataButton} disabled={!actionEditMode} onClick={() => {if (stress > 0) {setStress(stress-1)} }}><RemoveCircleTwoToneIcon fontSize="small" className={classes.dataIcon} /></IconButton>
                    <TextField className={classes.stress} disabled={!actionEditMode} id="stress" label={action.stressType} value={stress} onChange={(e) => setStress(e.target.value)} />
                    <IconButton className={classes.dataButton} disabled={!actionEditMode} onClick={() => setStress(stress+1)}><AddCircleTwoToneIcon fontSize="small" className={classes.dataIcon} /></IconButton>
                </Box>
            </Box>
            <Box className={classes.actionButtons}>
                {/* Coach Only */}
                <Button className={classes.buttonSecondary} disabled={!ownerCoach} onClick={() => setActionEditMode(!actionEditMode)} >{actionEditMode ? 'done edit' : 'EDIT'}</Button>
                <TextField className={classes.orderIndex} disabled={!actionEditMode} id="orderIndex" label="order index" value={orderIndex} onChange={(e) => setOrderIndex(e.target.value)} />
                <Button className={classes.buttonPrimary} disabled={!ownerCoach} onClick={(e) => saveAction(e)} >DONE</Button>
            </Box>
        </Card>
    )
}
