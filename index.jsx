import "./banner.css"; 

const BannerFilme = ({ filme }) => {
    if (!filme) {
        return null;
    }

    return (
        <div
            className="banner"
            style={{
                backgroundImage: `
                    linear-gradient(
                        90deg,
                        #111 0%,
                        rgba(17, 17, 17, 0.92) 45%,
                        rgba(17, 17, 17, 0.6) 100%
                    ),
                    url(${filme.Poster})
                `
            }}
        >
            <div className="banner-conteudo">
                <h2 className="banner-titulo">{filme.Title}</h2>

                <div className="informacoes">
                    <span>{filme.Year}</span>
                    <span>•</span>
                    <span>{filme.Runtime}</span>
                    <span>•</span>
                    <span className="nota">⭐ {filme.imdbRating}/10</span>
                </div>

                <p className="banner-sinopse">{filme.Plot}</p>
            </div>

            {/* Mostra o pôster completo sem cortes ao lado */}
            <img 
                src={filme.Poster} 
                alt={filme.Title} 
                className="banner-poster" 
            />
        </div>
    );
};

export default BannerFilme;