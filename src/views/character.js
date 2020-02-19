import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const Character = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card-deck">
            {store.people.map((item,i)=>{
                return (
                    <div className="col-3">
                        <div className="card my-2" key={i}>
                            <img
                            src="https://media.timeout.com/images/103670273/750/422/image.jpg"	
                            className="card-img-top"
                            alt="vehicles starwars"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>				
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item model">Birth Year: {item.birth_year}</li>                             
                                    <li class="list-group-item films">Height: {item.height}</li>
                                    <li class="list-group-item manufacturer">Mass: {item.mass}</li>                                
                                </ul>
                                <Link to="/favorite" className="btn btn-primary">
                                <FontAwesomeIcon icon={faHeart} />
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );    
    
}

export default Character