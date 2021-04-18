import React, {useState, useEffect} from 'react';
import { Box, Button, Card, FormControl, Input, InputLabel, InputAdornment, Typography } from '@material-ui/core';
import { searchBoxStyles} from '../../styles/atomStyles';
// import UserSearchListItem from '../components/atoms/UserSearchListItem';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

export default function SearchBox({label, placeholder, onChange}) {
    
    const classes = searchBoxStyles();
    
    return (
        <FormControl className={classes.container}>
            <InputLabel className={classes.label}>{label}</InputLabel>
            <Input
                className={classes.input}
                onChange={(e) => onChange(e.target.value)}
                id="searchBox"
                placeholder={placeholder}
                disableUnderline={true}
                // shrink={true}
                required
                startAdornment={
                    <InputAdornment className={classes.adornment} position="start">
                        <SearchTwoToneIcon className={classes.icon} />
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}
