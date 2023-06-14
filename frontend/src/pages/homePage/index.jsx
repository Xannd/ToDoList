import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Api from '../../services/api'
// components
import Button from '../../components/Button';
import TaskComponent from '../../components/Task';
import { AddTask } from '../../controllers/addTask';
import TypesStatus from '../../components/TypesStatus';

export default function HomePage(){
    const [tasksItems, setTasksItems] = useState(undefined)
    const [titleTask, setTitleTask] = useState("")
    
    async function getTask(){
        const response = await Api.get('/tasks')
        setTasksItems(response.data)
    }

    async function addTask(e){
        e.preventDefault()
        await AddTask(titleTask, getTask)
    }

    useEffect(() => {
        getTask()
    }, [])

    return(
        <S.Container>
            <S.AddTask onSubmit={addTask}>
                <S.Input placeholder='Add task...' value={titleTask} onChange={(e)=> setTitleTask(e.target.value)}></S.Input>
                <Button type="submit"/>
            </S.AddTask>
            <TypesStatus/>
            <S.ListTask>
                <S.ColumnsTask>
                    <S.Task>Task</S.Task>
                    <S.Date>Create in</S.Date>
                    <S.Status>Status</S.Status>
                    <S.Action>Actions</S.Action>
                </S.ColumnsTask>
                {tasksItems?.length > 0 &&
                    tasksItems?.map((item)=> {
                        return(<TaskComponent key={item.id} data={item} getAll={getTask}/>)
                    })
                }
            </S.ListTask>
        </S.Container>
    )
}
