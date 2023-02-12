export default function Car(props) {
    return (
        <div className='car-container'>
            <div className='flex-box'>
                <img
                    src={props.car.primary_photo_url}
                    height="250px"
                    className="car-img"
                ></img>
            </div>
            <div className='flex-box info'>
                <h3><b></b>{props.car.dealer_name}</h3>
                <h4><b></b>{props.car.city} {props.car.state}</h4>
            </div>
            <div className='flex-box info'>
                <p><b>Make: </b>{props.car.make}</p>
                <p><b>Model: </b>{props.car.model}</p>
                <p><b>Condition: </b>{props.car.condition}</p>
                <p><b>Mileage: </b>{props.car.mileage}</p>
                <p><b>Year: </b>{props.car.year}</p>
                <h1><b>Price: </b>{props.car.price}</h1>
            </div>
        </div>)
}