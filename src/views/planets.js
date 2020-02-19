import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Planets = () => {
    const { store, actions } = useContext(Context);

    return(
        <div className="card-deck">
            {store.planets.map((item,i)=>{
                return (
                 <div className="col-3">
                 <div className="card my-2" key={i}>
                     <img
                     src="https://inteng-storage.s3.amazonaws.com/images/uploads/sizes/starwars-1_resize_md.jpg"	
                     className="card-img-top"
                     alt="vehicles starwars"
                     />
                     <div className="card-body">
                         <h5 className="card-title">{item.name}</h5>				
                         <ul class="list-group list-group-flush">
                             <li class="list-group-item model">Climate: {item.climate}</li>                             
                             <li class="list-group-item films">Gravity: {item.gravity}</li>
                             <li class="list-group-item manufacturer">Population: {item.population}</li>
                             <li class="list-group-item cost_in_credits">Terrain: {item.terrain}</li>
                             <li class="list-group-item length">Diameter:: {item.diameter}</li>
                         </ul>
                         <Link to="/favorite" className="btn btn-primary">
                             Like
                         </Link>
                     </div>
                 </div>
                 </div>
                );
            })}            
        </div>
    );

}

export default Planets