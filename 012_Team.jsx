import { useEffect, useState } from "react";

export const Team = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState([]);
  //Se utiliza un useState con un script para mostrar en pantalla un mensaje Loading si aún
  //no se ha recibido la información de fetch.

  useEffect(() => {
    try {
      const getTeam = async () => {
        const request = await fetch("https://randomuser.me/api/?results=10")
        const data = await request.json()
        setPeople(data.results);
        setIsLoading(false);
      }
      getTeam();    //!Llamado a función fetch
    }
    catch (error) {
      console.error(error);
    }
  }, []);
  /*
  Utilizamos useEffect para el llamado y toma de información de la API a través de fetch.
  Se utiliza try&catch para el manejo de errores. Abajo está el código sencillo de fetch
  sin try&catch y sin async&await. 
  !Pilas que dentro del mismo useEffect DEBE IR EL LLAMADO A LA FUNCIÓN QUE CONTIENE FETCH
  */

  if (isLoading) {
    return (<>
      <h1>Loading...</h1>
    </>)
  } else {
    return (
      <>
        <h1>Our Team</h1>
        {people.map(({ name: { title, first, last }, picture: { medium } }, id) => {
          return (<div key={id}>
            <img src={medium}></img>
            <h3>{title} {first} {last}</h3>
            <hr />
          </div>
          )
        })}
      </>
    )
  }
}


//Fetch sin async&await
/*
useEffect(() => {
  fetch("https://randomuser.me/api/?results=10")
    .then(data => data.json())
    .then(response => {
      setPeople(response.results);
      setIsLoading(false);
    })
    .catch(error => console.error(error))
}, []);
*/