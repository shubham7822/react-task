import React, { useState } from 'react'
import { connect } from 'react-redux'
import { BsPlus } from "react-icons/bs";
import {AddingTask, DeletingTask} from "../../../Store/Actions"
import "./Tasks.css"
import { RiDeleteBinLine } from "react-icons/ri";
import uuid from "react-uuid"
import Avatar from 'react-avatar';
import { BiEditAlt } from "react-icons/bi";
const Task = (props) =>{

    const InitialValues = {
        id:uuid(),
        Description:"",
        Date:"",
        Time:"",
        User:""
    }
    const[values,setValues] = useState(InitialValues)
    const[open,setOpen] = useState(false)
    const[is_editable,set_is_editable] =useState(false)
    const[editableValues,setEditableValues] = useState("")
    const handleInputChange =(e) => {
        setValues(()=>({
          ...values,
          [e.target.name]:e.target.value
        }))
    }

    const TaskOpen =() => {
        setOpen((open) =>!open)
        set_is_editable((is_editable) =>!is_editable)
    }
    const handleClose = () => {
        
        setOpen((open) => !open)
                                
    }

    const check_is_Empty = () => {       
        const is_Arr_Empty = Object.values(values).filter(item => item!=="")
        console.log(is_Arr_Empty)       
        if(is_Arr_Empty.length === 5){
            return true
        }else if(is_Arr_Empty.length === 1){
            return false
        }
        return false
    }


    const handleSubmit =(e) => {
            if(check_is_Empty()){
            props.AddTask(values)
            setOpen((open) => !open)
            set_is_editable((is_editable) =>!is_editable)
            }else{
                alert("enter all the required feilds")
            }
        }  
        
    
    const handleDelete = () => {
             props.DeleteTask(editableValues.id)              
            setOpen((open) => !open)
            }
    const handleEdit = (item) => {
        setOpen(true)
        set_is_editable(true)        
        setEditableValues(() => item)
    
    };
        
       
    
    return (
            <div className="Tasks">
                   <span>
                       Tasks { props.Tasks?.length}
                       <BsPlus onClick={TaskOpen} className="Task__Add"/>
                   </span>
                 {open ? 
                            (
                 <div className={open ? "Task__Form" : "Task__FromClose"}>
                         <label htmlFor="description">Task Description</label>
                     <input className="Task__Input" name="Description" defaultValue={ is_editable ? editableValues.Description : "undefined"}  onChange ={handleInputChange}type="text"></input>
                        <div className="TimeZones">
                             <div>
                                 <label htmlFor="Date">Date</label>
                                 <input id="Task__Input__TimeZone" name="Date" defaultValue={ is_editable ? editableValues.Date : "undefined" } onChange ={handleInputChange} type="Date"></input>
                             </div>
                             <div>
                                <label htmlFor="description">Time</label>
                            <input className="Task__Input__TimeZone" name="Time" defaultValue={ is_editable ? editableValues.Time :  "undefined"  } onChange ={handleInputChange}type="Date"></input>
                             </div>
                        </div>
                         <label htmlFor="description">Assign User</label>
                         <input className="Task__Input" name="User" defaultValue={ is_editable ? editableValues.User : "undefined" } onChange ={handleInputChange}type="text"></input>
                          
        
            <div className={!is_editable ? "Task__Button__Alignment" :"Task__Button__Alignment__Two"}>
                 {is_editable ? (<span onClick={handleDelete} className="Task__Bin">
                      <RiDeleteBinLine/>
                 </span>):""}
 
                 <div className="Task__Handle">
                            <button id="Task__Cancle" onClick={handleClose}>Cancle</button>
                            <button type="reset" id="Task__Save" onClick={handleSubmit}>Save</button>
                  </div>
            </div>
     </div>
    ) : (
         props.Tasks.map(item => {
             return (
                 <div className="Task__List" key={uuid()}>
                     <div>
                      <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name="User" size="40" />                         
                     </div>
                     <div className="Task__List__TimeZone">
                     <div id="Task__Date__Time">
                        <p>{item.Description}</p>
                        <p>{item.Date}</p>
                     </div>

                       
                    <span onClick={(e) => handleEdit(item)} className="Task__Edit">                        
                        <BiEditAlt />
                     </span>
                     </div>
                 </div>                     
             )
         })
    ) 
    }

 </div>
        )

    
}

const mapStateToProps = (state) => {
   return {
       Tasks:state.Tasks
   }   
}

const mapDispatchToProps =(dispatch) => {
     return {
     AddTask:(inputValues) => dispatch(AddingTask(inputValues)),  
     DeleteTask:(id) => dispatch(DeletingTask(id))  
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)
