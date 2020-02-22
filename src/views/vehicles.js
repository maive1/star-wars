import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardVehicle from  "../component/CardVehicle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const Vehicles = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.loadVehicles()
    }, []);
    
    return (
        <div className="container-fluid p-3 bg-dark">
            <div className="row">
                <div className="card-deck">
                    {store.vehicles.map((item,i)=>{
                        return (
                            <div className="col-3" key={i}>
                                <CardVehicle 
                                    imageUrl="https://onkawa.com/wp-content/uploads/2014/05/sandcrawler.jpg" 
                                    imageName="starwars vehicles"
                                    name={item.name}
                                    model={item.model}
                                    consumables={item.consumables}
                                    cost_in_credits={item.cost_in_credits}
                                    length={item.length}
                                    iconLink= {<FontAwesomeIcon icon={faHeart} />}
                                    event={(e)=>actions.favoritesItem(e, item.name )}
                                    route="/favorites"
                                    />                                
                            </div>                   
                        )
                    })}
                </div>
            </div>            
        </div>
    );
};

export default Vehicles;