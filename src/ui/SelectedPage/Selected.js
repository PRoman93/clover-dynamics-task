import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Input, MenuItem, Select} from '@material-ui/core';
import {getData} from "../../bll/dataReducer";
import s from './Selected.module.css'
import {NavLink} from "react-router-dom";

const Selected = (props) => {

    const dispatch = useDispatch()

    const [error, setError] = useState('')
    const [rover, setRover] = useState('')
    const [camera, setCamera] = useState('')
    const [sol, setSol] = useState('')

    let onDataClick = () => {
        if (rover === 'Curiosity' && camera === 'pancam' ||
            rover === 'Curiosity' && camera === 'minites' ||
            rover === 'Opportunity' && camera === 'mast' ||
            rover === 'Opportunity' && camera === 'chemcam' ||
            rover === 'Opportunity' && camera === 'mahli' ||
            rover === 'Opportunity' && camera === 'mardi' ||
            rover === 'Spirit' && camera === 'mast' ||
            rover === 'Spirit' && camera === 'chemcam' ||
            rover === 'Spirit' && camera === 'mahli' ||
            rover === 'Spirit' && camera === 'mardi'
        ) {
            setError("we don't have such photos")
        } else if (!rover) {
            setError("rover is required")
        } else {
            dispatch(getData(rover, camera, sol))
        }

    }
    let onRoverChange = (e) => {
        setError('')
        setRover(e.currentTarget.innerText)
    }
    let onCameraChange = (e) => {
        setError('')
        setCamera(e.currentTarget.innerText)
    }
    let onSolChange = (e) => {
        setError('')
        setSol(e.currentTarget.innerText)
    }
    return (
        <>
            <h2>Choose rover, camera and sol. Rover is required</h2>
            <Select name="choose your rover" label='rover' onChange={onRoverChange} className={s.roverField}>
                <MenuItem value="Curiosity">Curiosity</MenuItem>
                <MenuItem value="Opportunity">Opportunity</MenuItem>
                <MenuItem value="Spirit">Spirit</MenuItem>
            </Select>
            <Select name="choose your camera" onChange={onCameraChange} className={s.cameraField}>
                <MenuItem value="fhaz">fhaz</MenuItem>
                <MenuItem value="rhaz">rhaz</MenuItem>
                <MenuItem value="mast">mast</MenuItem>
                <MenuItem value="chemcam">chemcam</MenuItem>
                <MenuItem value="mahli">mahli</MenuItem>
                <MenuItem value="mardi">mardi</MenuItem>
                <MenuItem value="navcam">navcam</MenuItem>
                <MenuItem value="pancam">pancam</MenuItem>
                <MenuItem value="minites">minites</MenuItem>
            </Select>
            <Input type="text" placeholder='choose sol' onChange={onSolChange}/>
            {error && <span className={'error'}>{error}</span>}
            <Button color='primary' onClick={onDataClick}><NavLink
                to={`images/${rover}/${camera}`}>show</NavLink></Button>
        </>
    )
}
export default Selected
