import { useState, useEffect } from "react";

const getSpotifyToken = async () => {
  const clientId = "bfd63cf1deeb4e00a025d9a80570da9f";
  const clientSecret = "f0873393fffd4bca9809b2fa4442271d";

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const reggaetonQueries = ["Bad Bunny", "Bellakath", "J Balvin", "Karol G", "Maluma", "Ozuna", "Rauw Alejandro", "Sech", "Wisin & Yandel"];

  const fetchData = async () => {
    try {
      setLoading(true);

      // Obtener el token solo si no existe
      let accessToken = token;
      if (!accessToken) {
        accessToken = await getSpotifyToken();
        setToken(accessToken);
      }

      // Elegir un artista aleatorio en cada ejecución
      const randomQuery = reggaetonQueries[Math.floor(Math.random() * reggaetonQueries.length)];

      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(randomQuery)}&type=track&limit=5`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!response.ok) throw new Error("Error fetching data");

      const result = await response.json();
      if (result.tracks.items.length === 0) throw new Error("No se encontraron canciones");

      // Seleccionar una canción aleatoria de las 5 primeras que devuelve la API
      const randomSong = result.tracks.items[Math.floor(Math.random() * result.tracks.items.length)];

      setData({
        id: randomSong.id,
        name: randomSong.name,
        albumImage: randomSong.album.images[0].url,
        artist: randomSong.artists[0].name,
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Obtener el token una sola vez al montar el componente
  useEffect(() => {
    if (!token) {
      getSpotifyToken().then(setToken);
    }
  }, []);

  // Ejecutar la búsqueda de canciones después de obtener el token
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]); // Solo cuando haya un token válido

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;




