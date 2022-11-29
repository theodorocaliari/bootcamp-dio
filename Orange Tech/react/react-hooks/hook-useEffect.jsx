import {useState, useEffect, useCallback} from "react";

export default function Teste(){

  const [name, setName] = useState("Pablo");
  const handleChangeName = () => {
    setName( prev => prev === "Pablo" ? "Pablo" : "Theodoro" );
  }

  useEffect(() => {
    alert("renderizei");

  }, [name]);

  return (
    <>
      <p>
        {name}
      </p>
      <button onClick={handleChangeName}>Change name</button>
    </>
  )
}