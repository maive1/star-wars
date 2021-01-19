const getState = ({ getStore, setStore }) => {
  return {
    store: {
      people: [],
      vehicles: [],
      planets: [],
      favorites: [],
      favoritesPlanets: [],
      favoritesCharacter: [],
      loading: true,
    },

    actions: {
      setPeople: () => {
        fetch("https://swapi.dev/api/people/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ people: data.results, loading: false });
          })
          .catch((error) => {
            console.log(error);
            setStore({ loading: false });
          });
      },

      setPlanets: () => {
        fetch("https://swapi.dev/api/planets/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ planets: data.results, loading: false });
          })
          .catch((error) => {
            console.log("ERROR", error);
            setStore({ loading: false });
          });
      },

      loadVehicles: () => {
        fetch("https://swapi.dev/api/vehicles/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ vehicles: data.results, loading: false });
          })
          .catch((error) => {
            console.log(error);
            setStore({ loading: false });
          });
      },

      favoritesItem: (e, name) => {
        e.preventDefault();
        const store = getStore();
        let favVehicles = store.vehicles.find((elem) => {
          return elem.name === name;
        });
        if (store.favorites.length === 0) {
          setStore({ favorites: store.favorites.concat(favVehicles) });
        } else {
          let x = store.favorites.find(
            (item) => item.name === favVehicles.name
          );
          if (x === undefined) {
            setStore({ favorites: store.favorites.concat(favVehicles) });
          }
        }
      },

      favoritesCharacter: (e, name) => {
        e.preventDefault();
        const store = getStore();
        let favCharacter = store.people.find((elem) => {
          return elem.name === name;
        });
        if (store.favoritesCharacter.length === 0) {
          setStore({
            favoritesCharacter: store.favoritesCharacter.concat(favCharacter),
          });
        } else {
          let x = store.favoritesCharacter.find(
            (item) => item.name === favCharacter.name
          );
          if (x === undefined) {
            setStore({
              favoritesCharacter: store.favoritesCharacter.concat(favCharacter),
            });
          }
        }
      },

      favoritesPlanets: (e, name) => {
        e.preventDefault();
        const store = getStore();
        let favPlanets = store.planets.find((elem) => {
          return elem.name === name;
        });
        if (store.favoritesPlanets.length === 0) {
          setStore({
            favoritesPlanets: store.favoritesPlanets.concat(favPlanets),
          });
        } else {
          let x = store.favoritesPlanets.find(
            (item) => item.name === favPlanets.name
          );
          if (x === undefined) {
            setStore({
              favoritesPlanets: store.favoritesPlanets.concat(favPlanets),
            });
          }
        }
      },
    },
  };
};

export default getState;
