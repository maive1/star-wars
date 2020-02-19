const getState = ({getStore, getActions,setStore }) => {
	return {
		store: {
			people: [],
			vehicles:[],
			planets:[],
			favorites: []			
		},

		actions: {
			
			setPeople: ()=>{
				fetch('https://swapi.co/api/people/')
				.then(res => res.json())	
				.then(data =>{setStore({people: data.results})})
				.catch((error)=>{ console.log(error); });
			},
			
			setPlanets: ()=>{
				const store = getStore()
				fetch('https://swapi.co/api/planets/')
				.then(res=>res.json())
				.then(data=>{setStore({planets: data.results})
				console.log(store.planets)
			})
				.catch(error=>console.log(error))
			},

			loadVehicles: ()=>{
				const store = getStore()
				fetch('https://swapi.co/api/vehicles/')
				.then(res=>res.json())
				.then(data=>{setStore({vehicles: data.results})
				console.log(store.vehicles)
			})
				.catch(error=>console.log(error))				
			},
			
			favoritesItem: (e, name)=>{
				const {vehicles, favorites} = getStore();				
				let favVehicles = vehicles.find((elem)=>{
					return elem.name === name
				});
							
				if(favorites.length === 0){
					setStore({favorites: favorites.concat(favVehicles)});					
				} else {
					let x = favorites.find(item=> item.name === favVehicles.name);
					if(x === undefined) {
						setStore({favorites: favorites.concat(favVehicles)});
					}
				};
			},		
			

		}
	};
};

export default getState;
