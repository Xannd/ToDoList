import React, { useEffect, useState } from 'react';
import { Container,Task, Date, Status, Action, Button, Stripe, Text, ButtonEdit, TextArea } from './style'
import  {AiFillEdit}  from 'react-icons/ai';
import  {BsTrash3Fill}  from 'react-icons/bs';
import { EditTask } from '../../controllers/editTask';
import { DeleteTask } from '../../controllers/deleteTask';

function TaskComponent({data, getAll}){
    const [fieldStatus, setFieldStatus] = useState("")
    const [fieldTitle, setTitleStatus] = useState("")
    const [activeButton, setActiveButton] = useState(true)
    const [editFieldTask, setEditFieldTask] = useState(false)

    function handleStatus(e){
        setFieldStatus(e)
        setActiveButton(false)
    }

    async function deleteTask(){
        await DeleteTask(data?.id, getAll)
    }

    async function editTask(){
        await EditTask(data,fieldTitle, fieldStatus, getAll, setActiveButton, setEditFieldTask, setTitleStatus, setEditFieldTask)
    }

    useEffect(()=> {
        setFieldStatus(data?.status)
    },[data])

    return(
        <Container>
            <Task>
                <Stripe color={data?.status == 'Pending' ? '#5ba4cf' : data?.status == 'In progress' ? '#ffa600' : '#7bc86c'}/>
                <Text>
                    {editFieldTask ? <TextArea onChange={(e)=> setTitleStatus(e.target.value)} /> : data?.title}
                    <ButtonEdit title="Edit task" onClick={()=> setEditFieldTask(!editFieldTask)}>
                        <AiFillEdit style={{width:'20px',height:'20px'}}/>
                    </ButtonEdit>
                </Text>
            </Task>
            <Date>{data?.created_at}</Date>
            <Status>
                <select onChange={(e)=> handleStatus(e.target.value)} value={fieldStatus}>
                    <option value="Pending">Pending</option>
                    <option value="In progress">In progress</option>
                    <option value="Finished">Finished</option>
                </select>
            </Status>
            <Action>
                <Button color="#ffa600" onClick={()=> editTask()} disabled={activeButton && fieldTitle === ""}>
                    <AiFillEdit style={{width:'25px',height:'25px', color: '#fff'}}/>
                </Button>
                <Button color="#d44246" onClick={()=> deleteTask()}>
                    <BsTrash3Fill style={{width:'20px',height:'20px', color: '#fff'}}/>
                </Button>
            </Action>
        </Container>
    )
} 

export default TaskComponent;