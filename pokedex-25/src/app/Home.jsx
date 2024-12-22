import { useRef } from "react";
import { useNameContext, types } from "../contexts/nameContext";
import { Link, useNavigate } from "react-router-dom";
import '../styles/home_Content.css';
function Home() {
  const inputRef = useRef();
  const [ name, dispatch ] = useNameContext();
  const navigate = useNavigate();

  // Establecer el nombre en el contexto y navegar a la Pokédex
  const setName = () => {
    const enteredName = inputRef.current.value.trim();

    if (enteredName) {
      dispatch({
        type: types.SET_NAME,
        payload: enteredName,
      });
      inputRef.current.value = ""; // Limpiar el campo
      navigate("/pokedex"); // Navegar a la Pokédex
    } else {
      alert("Por favor, ingresa un nombre válido."); // Validación adicional
    }
  };

  // Limpiar el nombre del contexto
  const clearName = () => {
    dispatch({
      type: types.CLEAR_NAME,
    });
  };

  return (
    <div className="home">
        <div className ='home_image'>            
      <div className="home_content">
        {/* Título de la página */}
        <h2 className="home_title">
          Hola{" "}
          {name ? (
              <>de nuevo <b>{name}</b></>
          ) : (
            <p clasName ="home_subtitulo">Entrenador</p>
            
          )}
        </h2>

        <div>
          {name ? (
            <>
              {/* Usuario registrado */}
              <p className="home_text">¡Continuemos con tu viaje !Entrenador</p>
              <p className="home_text1"> Ve a tu{" "}
                <Link className="home_link" to="/pokedex">
                  Pokédex favorito
                </Link>
              </p>
              <button
                onClick={clearName}
                className="home_btn btn--radius"
              >
                Salir
              </button>
            </>
          ) : (
            <>
              {/* Usuario no registrado */}
              <p>Para poder comenzar, introduce tu nombre:</p>
              <input
                ref={inputRef}
                type="text"
                placeholder="Tu Nombre"
                className="home_input"
              />
              <button
                onClick={setName}
                className="home_btn"
              >
                Comencemos
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Home;
