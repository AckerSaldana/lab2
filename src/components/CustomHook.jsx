import { useState } from "react";
import useFetch  from "../hooks/useFetch";
import Loading from "./Loading";
import { Card } from "./Card";

const CustomHook = () => {
    const { data, loading, error, refetch } = useFetch();

    return (
        <>
            <h1>¿Cual es tu cancion de Reggaeton random?</h1>
            <hr />
            {loading ? <Loading /> :
                data && <Card id={data.id} name={`${data.name} - ${data.artist}`} albumImage={data.albumImage} />}
            
            <button className='btn btn-primary' onClick={refetch}>Siguiente Canción</button>
        </>
    );
};

export default CustomHook;


