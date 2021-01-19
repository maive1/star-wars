import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardCharacter from "../component/CardCharacter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Character = () => {
  const { store, actions } = useContext(Context);

  if (store.loading) {
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-3 bg-dark screen">
      <div className="row">
        <div className="card-deck">
          {store.people.map((item, i) => {
            return (
              <div className="col-3" key={i}>
                <CardCharacter
                  imageUrl="https://media.timeout.com/images/103670273/750/422/image.jpg"
                  imageName="starwars character"
                  name={item.name}
                  birth_year={item.birth_year}
                  height={item.height}
                  mass={item.mass}
                  event={(e) => actions.favoritesCharacter(e, item.name)}
                  route="/favorites"
                  iconLink={<FontAwesomeIcon icon={faHeart} />}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
