import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import eventService from '../../services/event.service';

const Index = (props) => {
  const router = useRouter();
  const [event, setEvent] = useState();


  useEffect(() => {
    const id = router.query.id;


    eventService.getEvent(id)
      .then((res) => {
        console.log(res)
        
        setEvent(res.data.attributes);
      });
  }, []);

  return (
    <>
      <div className="one-product">
        <div className="one-product__asset">
          <img
            className="one-product__asset__image"
            src={event && event.Image.data.attributes.name}
          />
        </div>
        <span className="divider" />
        <div className="one-product__data">
          <h1 className="one-product__data__title">
            {event && event.title}
          </h1>
          <p className="one-product__data__price">
            {event && event.category} 
          </p>
          <p className="one-product__data__desc">
            {event && event.location}
          </p>

          
        </div>
      </div>
    </>
  );
};

export default Index;
