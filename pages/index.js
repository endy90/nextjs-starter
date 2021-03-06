import { Button } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CardEvent from "../components/CardEvent";

import eventService from "../services/event.service";

export default function Auth() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    eventService.getEvents()
    .then((res) =>{
      setEvents(res.data)
    } )
  }, []);
  return  <div className="home_page">
      
      <Link href="/addEvent" passHref>
      <Button style={{backgroundColor: "blue"}} variant="contained"   >
               Ajouter un évenement
            </Button>
      </Link>

      <div className='cards-products'>
    {events &&
        events.map((event) => (
          // <h1 key={event.id}>{event.attributes.title}</h1>
          <CardEvent event={event.attributes} eventId={event.id} />

        ))}
      </div>
    
  
    

  </div>;
}