import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadVehicles()
    }, [])
    console.log(store.vehicles)
    return (
        <div className="container-fluid p-3 bg-dark">
            <div className="row">
            <div className="card-deck">
                {store.vehicles.map((item,i)=>{
                    return (
                        <div className="col-3" key={i}>
                        <div className="card card-vehicles p-3 mb-5" >
                            <img
                            src="https://onkawa.com/wp-content/uploads/2014/05/sandcrawler.jpg"	
                            className="card-img-top"
                            alt="vehicles starwars"
                            />
                            <div className="card-body row">
                                <h5 className="card-title">{item.name}</h5>				
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item model">Model: {item.model}</li>
                                    
                                    <li className="list-group-item films">Consumables: {item.consumables}</li>
                                    <li className="list-group-item manufacturer">Manufacturer: {item.manufacturer}</li>
                                    <li className="list-group-item cost_in_credits">Cost: {item.cost_in_credits}</li>
                                    <li className="list-group-item length">lenght: {item.length}</li>
                                </ul>
                                <span className=" d-flex align-content-end flex-wrap">
                                <Link  className="btn btn-primary bg-warning " onClick={(e)=>actions.favoritesItem(e, item.name )} to="/vehicles">
                                Like
                                </Link>
                                </span>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
            </div>
            <div className="row mt-4">
                <div className="col mb-5 title-favorites border-top border-bottom">
                    <h3>FAVORITES //</h3>                
                </div>            
            </div>
            <div className="row">
                <div className="card-group">
                    {store.favorites.map((item, i)=>{
                        return (
                            <div className="col-3" key={i}>
                            <div className="card card-vehicles mb-5" >
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
                                    <Link  className="btn btn-primary" onClick={(j)=>actions.deletefavoritesItem(j)} to="/vehicles">
                                    Like
                                    </Link>
                                </div>w
                            </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}



export default Vehicles