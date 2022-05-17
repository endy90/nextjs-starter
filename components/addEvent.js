import { Button } from '@mui/material';
import React, { useState } from 'react';
import eventService from '../services/event.service';


const AddEvent = () => {

    const [event, setEvent] = useState({})

    const addEvent = () => {
    
        eventService.addEvent(event)
        .then((res) => {
            console.log(res)
        })

    }
    return (
        <div>
            <form className='auth_textfield' onSubmit={(e) => submitLogin(e)}>

            <input className='textfield input' type="text" placeholder='Titre' onChange={(e) => setEvent({ ...event, title: e.target.value })}
            />

            <input className='textfield input' type="text" placeholder='Categorie' onChange={(e) => setEvent({ ...event, category: e.target.value })}

            />

        <input className='textfield input' type="text" placeholder='Location' onChange={(e) => setEvent({ ...event, location: e.target.value })}

        />

        <input className='textfield input' type="text" placeholder='Url' onChange={(e) => setEvent({ ...event, url: e.target.value })}

         />
             <input className='textfield input_date' type="date" placeholder='Date' onChange={(e) => setEvent({ ...event, date: e.target.value })}

            />

        <div className='addEvent_btn'>
            <Button variant="contained" color="success" onClick={()=> addEvent()} >
                        Créer
            </Button>
        </div>
            
           
            </form>
        </div>
    );
}

export default AddEvent;
