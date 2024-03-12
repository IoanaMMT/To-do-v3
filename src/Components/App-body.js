import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Button from '@mui/material/Button';

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


  return (
    <>
    {/* To do items Incompleted */}
            <FormControl >
                <div className='new_list'>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="femalenewItems"
                    name="radio-buttons-group"
                >
                    {[...newItems].reverse().map((item, index) => (
                        <FormControlLabel
                        className = "new_item"
                        key = {index} 
                        value= {index.toString()} 
                        control={<Radio onClick= {() => handleClick(newItems.length - 1 - index)} checked={item.completed}/>} 
                        label={item.text} />
                
                    ))}
                    </RadioGroup>
                </div>
            </FormControl>
            <div className= {`completed_list ${showCompletedItems ? 'show' : 'hide'}`}>
                        <Box sx={{ '& button': { m: 1 } }}>
                            <div className='completed_button'>
                                <Button 
                                variant="contained" 
                                size="medium"
                                onClick={toggleCompletedItems}>
                                {showCompletedItems? 'Completed >' : 'Completed V'}
                                </Button>
                            </div>
                        </Box>
                        <ul className= 'completed_item_list'>
                            {[...completedItems].reverse().map((item,index) =>
                            (<li 
                                key = {index}
                                className='completed_item'
                                >{item.text}</li>))}
                        </ul>
            </div>

        {/* Entry field */}
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