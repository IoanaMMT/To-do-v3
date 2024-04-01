import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { MdOutlineDelete } from "react-icons/md";

export default function TaskFields() {

    const [newItems, setNewItems] = useState([]);
    const [completedItems, setCompletedItems] = useState([]);
    const [showCompletedItems, setShowCompletedItems] = useState([]);

    const addItem = (newItemText) => {
        setNewItems([...newItems, {text: newItemText , completed : false}])
    }

    const handleClick = (index) => {
            // capture the entry and add it to a list
        const newItemList = [...newItems];
        newItemList[index].completed = !newItemList[index].completed;
        setNewItems(newItemList);

        if(newItemList[index].completed) {
            setCompletedItems([...completedItems, newItemList[index]]);
            newItemList.splice(index, 1);
        }
};

    const toggleCompletedItems = () => {
        setShowCompletedItems(!showCompletedItems);
    };

    const removeAll = () => {
        setCompletedItems([]);
    }


  return (
    <>
{(newItems.length || completedItems.length) ? (
    <div className='all_lists'>
    {/* **********  Incompleted List  *********** */}
    <FormControl >
                <div className='new_list'>
                <RadioGroup
                    className='radio-button'
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="newItems"
                    name="radio-buttons-group"
                >
                    {[...newItems].reverse().map((item, index) => (
                        <FormControlLabel
                        className = "new_item"
                        key = {index} 
                        value= {index.toString()} 
                        control={<Radio onClick= {() => handleClick(newItems.length - 1 - index)} checked={item.completed}/>} 
                        label={item.text} 
                        />
                
                    ))}
                    </RadioGroup>
                </div>
            </FormControl>

 {/* ***********  Completed items list  *********** */}
            {completedItems.length ? (
                <div className= 'completed_list'>
                <Box sx={{ '& button': { m: 1 } }}>
                    <div className='completed_button'>
                        <Button 
                        variant="contained" 
                        size="medium"
                        onClick={toggleCompletedItems}>
                        {showCompletedItems? 'Completed V' : 'Completed >'}
                        </Button>
                    </div>
                </Box>
        <div className='container_completed_item_list'>
            <ul className=  {`completed_item_list ${showCompletedItems ? 'show' : 'hide'}`}>
                        {[...completedItems].reverse().map((item,index) =>
                        (<li 
                            key = {index}
                            className='completed_item'
                            > 
                                <MdOutlineDelete 
                                class= "remove_each_item"
                            
                                />
                                {item.text} 
                            </li>
                            ))}
            </ul>
        </div>
    </div>
            ): ''}
 {/* ********* Remove button to clear the list  ******* */}
            {completedItems.length ?  
                (<div className='remove_button'>
                <Stack direction="row" spacing={2}>
                    <Button 
                    variant="outlined" 
                    size="small" 
                    startIcon={<DeleteIcon />}
                    onClick= {removeAll}>
                        Remove all
                    </Button>
                </Stack>
            </div>): ''
            }

</div>
): 
<div className='intro'>
                <div className='intro_text'>
                    <h2>Time is precious,</h2>
                    <h3>waste it wisely</h3> <br/>
                    <h5>Create your daily tasks</h5>
                </div>
                
            </div>
}

 {/* *******  Entry Field  ********* */}
            <div className='entry_field'>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField 
                sx={{
                    backgroundColor: (theme) => alpha(theme.palette.common.white, 0.7),
                }}
                    id="outlined-basic" 
                    label= "+ Add Task" 
                    variant="outlined" 
                    onKeyDown = {(e) => { if (e.key === "Enter" && e.target.value.trim() !== "") {       
                                                        e.preventDefault();
                                                    addItem(e.target.value);
                                                    e.target.value = "";
                                                }} }/>
                </Box>
            </div>
    </>
  );
}