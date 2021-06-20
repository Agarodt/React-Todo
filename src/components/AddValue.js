import React, {useState} from 'react'

function AddValue({onCreate}) {
    const[value, setValue] = useState('')
    function submitHandler(event){
        event.preventDefault()
        if (value.trim()){
            onCreate(value)
        }
    }
    return(
        <form onSubmit = {submitHandler}>
        <input name = {value} onChange = {event => setValue(event.target.value)}/>
        <button type ='submit'>ok</button>
        </form>)}

        export default AddValue