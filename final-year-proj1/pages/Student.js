import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button } from 'antd';
import {Input , DatePicker ,Modal} from "rsuite"


const localizer = momentLocalizer(moment)

export default function Student (){
    const [Lec,  setLec] = React.useState({
        title:"",
        start:"",
        end:""
    })
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return(
        <>
            <div className = "container" style={{
                display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        width:"100vw",
        height:"100vh",
        gap:10,
        background:"pink"
            }}>

                student
                <Calendar
      localizer={localizer}
      events={event}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
            </div>

            <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder="Default Input" onChange={(e)=>{
        console.log(e)
        setLec({...Lec ,title:e })
      }}/>
      <DatePicker format="yyyy-MM-dd HH:mm:ss" style={{zIndex:10000}} onChange={(e)=>{setLec({...Lec , start:e})}} />
      <DatePicker format="yyyy-MM-dd HH:mm:ss" style={{zIndex:10000}} onChange={(e)=>{setLec({...Lec , end:e})}} />

      <Button type="primary" onClick={handleCancel}>
        close 
      </Button>
      <Button type="primary" onClick={handleOk}>
        create 
      </Button>
      </Modal>
        </>
    )
}

const event  =[
    {
        start:new Date(2023,2,4),
        end:new Date(2023,2,5),
        title : "eflwefierb"
    }
]