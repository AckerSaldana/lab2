export const Card = ({ id, name, albumImage }) => {
    return (
      <section style={{ height: 300 }}>
        <h2 className="text-capitalize"> {name} </h2>
  
        {/* Display the album cover */}
        <div>
          {albumImage ? (
            <img src={albumImage} alt={name} style={{ width: 150, height: 150 }} />
          ) : (
            <p>No image available</p>
          )}
        </div>
  
        {/* Spotify Player */}
        <iframe
          style={{ marginTop: 10 }}
          src={`https://open.spotify.com/embed/track/${id}`}
          width="300"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </section>
    );
  };
  
  


