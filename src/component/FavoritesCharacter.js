import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardCharacter from  "../component/CardCharacter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const FavoritesCharacter = () => {
    const { store, actions } = useContext(Context);

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col mb-5 title-favorites border-top border-bottom">
                    <h3>FAVORITES CHARACTER//</h3>                
                </div>            
            </div> 
            <div className="row">
                <div className="card-deck col-12">
                    {store.favoritesCharacter.map((item, i)=>{
                        return (
                            <div className="col-3" key={i}>
                                <CardCharacter
                                    imageUrl="https://media.timeout.com/images/103670273/750/422/image.jpg"
                                    imageName="starwars character"
                                    name={item.name}
                                    birth_year={item.birth_year}
                                    height={item.height}
                                    mass={item.mass}
                                    event={(e)=>actions.favoritesCharacter(e, item.name )}
                                    route="/favorites"
                                    iconLink={<FontAwesomeIcon icon={faHeart}/>}
                                />         
                            </div>
                        );
                    })}
                </div>
            </div>    
        </div>
    );
};

export default FavoritesCharacter;