import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Civilizations = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [civs, setCivs] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
        const response = await data.json();
        setCivs(response.civilizations);
        setIsLoading(false);
      }
      fetchData()     //!Llamado a función fetch
    }
    catch (error) {
      console.error(error)
    }
  }, [])

  if (isLoading) {
    return (<>
      <h1>Loading...</h1>
    </>)
  } else {
    return (<>
      <h1>Civilizations</h1>
      <ul>
        {civs.map(civ => {
          return (
            <li key={civ.id}>
              <Link to={`/Civilizations/${civ.id}`}>{civ.name} - Bonus:{civ.team_bonus}</Link>
            </li>
          )
        })}
      </ul>
    </>)
  }

}



//Fetch sin async&await
/*
useEffect(() => {
  fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
    .then(data => data.json())
    .then(response => {
      setCivs(response.civilizations);
      setIsLoading(false);
    })
    .catch(error => console.error(error))
},[])
*/
