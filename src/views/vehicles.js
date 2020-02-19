import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';



const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadVehicles()
    }, [])

    
    return (
        <div className="container-fluid p-3 bg-dark">
            <div className="row">
                <div className="card-deck">
                    {store.vehicles.map((item,i)=>{
                        return (
                            <div className="col-3" key={i}>
                                <div className="card card-vehicles mb-5" >
                                    <img
                                    src="https://onkawa.com/wp-content/uploads/2014/05/sandcrawler.jpg"	
                                    className="card-img-top"
                                    alt="vehicles starwars"
                                    />
                                    <div className="card-body row">
                                        <h5 className="card-title">{item.name}</h5>				
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item model"><h6>Model:</h6> {item.model}</li>
                                            
                                            <li className="list-group-item films"><h6>Consumables:</h6> {item.consumables}</li>
                                            <li className="list-group-item manufacturer"><h6>Manufacturer:</h6> {item.manufacturer}</li>
                                            <li className="list-group-item cost_in_credits"><h6>Cost:</h6> {item.cost_in_credits}</li>
                                            <li className="list-group-item length"><h6>Lenght:</h6> {item.length}</li>
                                        </ul>
                                        <span className=" d-flex align-content-end flex-wrap">
                                            <Link  className="btn btn-primary" onClick={(e)=>actions.favoritesItem(e,item.name)} to="/favorites">
                                                <FontAwesomeIcon icon={faHeart} />
                                            </Link>                                
                                        </span>
                                    </div>
                                </div>
                            </div>
                    
                        )
                    })}
                </div>
            </div>            
        </div>
    );
}



export default Vehicles