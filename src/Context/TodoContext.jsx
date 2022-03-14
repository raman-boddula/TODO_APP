import React from 'react';

export const TodoContext = React.createContext();

export const TodoContextProvider = ({ children }) => {
    const [list, setList] = React.useState([]);
    const handleSet = (todo) => {
        console.log('todo from context',todo)
        setList([...list, todo]);
    }
    const handleToggle = (item) => {
        let modified = list.filter((el) => {
            return el.title !== item.title;
        })
        item.status=item.status ? false : true;
        setList([...modified,item])
    }
    const handleDelete = (id) => {
        let modifiedData = list.filter((el) => {
           return  el.title!==id.title
        })
        setList(modifiedData)
    }
    const handleCompleted = () => {
        let modified = list.filter((el) => {
            return !el.status
        });
        setList(modified)
    }
    return (
        <TodoContext.Provider value={{list,setList,handleSet,handleDelete,handleToggle,handleCompleted}}>{ children }</TodoContext.Provider>
    )

}