import React from 'react';
import {Input,Button} from 'antd'
export const Todo = () => {
    const [todo, setTodo] = React.useState("");
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
        <Input type="text" placeholder="add todo" />
        <Button>ADD TODO</Button>
        </div>
    )
}