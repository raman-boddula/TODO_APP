import React from 'react';
import { Input, Button ,DatePicker,TimePicker} from 'antd';
import {TodoContext} from "../Context/TodoContext"
import './Styles.css';
export const Todo = () => {
    const [todo, setTodo] = React.useState({ title: "", status:"", time: "",date:"" });
    const {list,handleSet,handleDelete,handleToggle}=React.useContext(TodoContext)
    const handleTodo = (e) => {
        setTodo({ title:e.target.value,status:false})
    }
    const handleTime = (e,time) => {
        // console.log(e._d)
        setTodo({...todo,time:time})

    }
    const handleDate = (e,date) => {
        // console.log(e._d)
        setTodo({...todo,date:date})

    }
    const handleAdd = (e) => {
        e.preventDefault();
        let value = Object.values(todo);
        let flag = true;
        console.log(value);
        if (value.length < 4) {
            flag = false;
         }
        value.forEach((el) => {
            if (el.length === 0) {
                flag = false;
            }
        })
        if (!flag) {
            alert("Please fill the details")
        } else { 
            handleSet(todo);
        }
    }
    return (
        <>
            <h1>Simple Todo Application</h1>
         <div className="todoContainer">
            <Input type="text" placeholder="add todo" onChange={handleTodo} /><br/>
            <DatePicker onChange={handleDate} /><br/>
            <TimePicker onChange={handleTime}/><br/>
        <Button type="primary" onClick={handleAdd}>ADD TODO</Button>
            </div>
            {list.length > 0 ? <div className="tableDiv">
                <tr style={{padding:'5em'}}>
                    <th style={{border:'2px solid black'}}>Title</th>
                    <th style={{border:'2px solid black'}}>Status</th>
                    <th style={{border:'2px solid black'}}>Date</th>
                    <th style={{border:'2px solid black'}}>Time</th>
                    <th style={{border:'2px solid black'}}>Toggle / Remove</th>
                </tr>
                {list.map((el,i)=>{
                    return(
                        <tr key={i}>
                            <td style={{border:'2px solid black',padding:'1em 5em',textDecoration :el.status ? "line-through" : "none"}}>{el.title}</td>
                            <td style={{border:'2px solid black',padding:'1em 5em' }}>{el.status?"Completed":"Incomplete"}</td>
                            <td style={{border:'2px solid black',padding:'1em 5em' }}>{el.date}</td>
                            <td style={{ border: '2px solid black', padding: '1em 5em' }}>{el.time}</td>
                            <td style={{ border: '2px solid black',padding:'1em' }}>
                                <Button type="primary" onClick={() => handleToggle(el)}>TOGGLE</Button><br/>
                                <Button type="danger" onClick={()=>handleDelete(el)}>DELETE</Button>
                            </td>
                        </tr>
                    )
                })}
            </div>:null}
        </>
    )
}