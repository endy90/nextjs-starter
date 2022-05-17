import React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";


const CardEvent = (props) => {
    return (
        <Link href={`/${props.eventId}`}>
      <div className="card items-center" key={props.event.id}>
        <div className="bgcolor">
          <img
            className="card-image justify-center"
            src={props.event.Image.data.attributes.name}
          />
        </div>

        <div className="product_data">
          <h1>{props.event.title}</h1>
          <div className="pricecolor">
            <p className="price">{props.event.category}</p>
          </div>
          <p className="card_desc">{props.event.url}</p>
          {/* <Link href={`/shop/${props.product.id}`}> */}
          {/* <div><Button text="See product" type="button" class="btn_card rounded_2"/></div> */}
          {/* </Link> */}
        </div>

        <div className="product_button">
          <Button variant="contained" color="error">
            Participer
          </Button>
        </div>
      </div>
    </Link>
    );
}

export default CardEvent;




