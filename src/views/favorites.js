import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Favorites = () => {
    const { store, actions } = useContext(Context);

    return(
        <div className='container-fluid p-3 bg-dark'>
            <div className="row mt-4">
                    <div className="col mb-5 title-favorites border-top border-bottom">
                        <h3>FAVORITES VEHICLES//</h3>                
                    </div>            
            </div>
            <div className="row">
                <div className="card-deck col-12">
                    {store.favorites.map((item, i)=>{
                        return (
                            <div className="col-3" key={i}>
                            <div className="card card-vehicles mb-5 ml-3" >
                                <img
                                src="https://onkawa.com/wp-content/uploads/2014/05/sandcrawler.jpg"	
                                className="card-img-top"
                                alt="vehicles starwars"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>				
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item model">Model: {item.model}</li>
                                        
                                        <li className="list-group-item films">Consumables: {item.consumables}</li>
                                        <li className="list-group-item manufacturer">Manufacturer: {item.manufacturer}</li>
                                        <li className="list-group-item cost_in_credits">Cost: {item.cost_in_credits}</li>
                                        <li className="list-group-item length">lenght: {item.length}</li>
                                    </ul>                                        
                                </div>
                            </div>
                            </div>
                        );
                    })}
                </div>
            </div>
                
            <div className="row mt-4">
                <div className="col mb-5 title-favorites border-top border-bottom">
                    <h3>FAVORITES PLANETS//</h3>                
                </div>            
            </div>   
            <div className="row">
                <div className="card-deck">
                    {store.favoritesPlanets.map((item,i)=>{
                        return (
                            <div className="col-3">
                            <div className="card card-planets my-2" key={i}>
                                <img
                                src="https://inteng-storage.s3.amazonaws.com/images/uploads/sizes/starwars-1_resize_md.jpg"	
                                className="card-img-top"
                                alt="vehicles starwars"
                                />
                                <div className="card-body row">
                                <h5 className="card-title">{item.name}</h5>				
                                <ul class="list-group list-group-flush">
                                        <li class="list-group-item model">Climate: {item.climate}</li>                             
                                        <li class="list-group-item films">Gravity: {item.gravity}</li>
                                        <li class="list-group-item manufacturer">Population: {item.population}</li>
                                        <li class="list-group-item cost_in_credits">Terrain: {item.terrain}</li>
                                        <li class="list-group-item length">Diameter:: {item.diameter}</li>
                                </ul>                        
                                </div>
                            </div>
                            </div>
                        );
                    })}            
                </div>
            </div> 
                    
            <div className="row mt-4">
                <div className="col mb-5 title-favorites border-top border-bottom">
                    <h3>FAVORITES CHARACTER//</h3>                
                </div>            
            </div>     
        </div>           

    );
}

export default Favorites