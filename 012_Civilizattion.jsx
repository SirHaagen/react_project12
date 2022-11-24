import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Civilization = () => {

  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
      .then(data => data.json())
      .then(response => {
        setInfo(response);
        setIsLoading(false);
      })
      .catch(error => console.error(error))
  }, [])

  if (isLoading) {
    return (<>
      <h1>Loading...</h1>
    </>)
  } else {
    return (<>
      <h1>{info.name}</h1>
      <h2>{info.team_bonus}</h2>
      <p>{info.civilization_bonus}</p>
    </>)
  }

}