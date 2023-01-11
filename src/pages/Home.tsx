import Header from "../layout/Header";
import {Show} from "../utils/types/Show";
import movies from "../utils/const/Shows";

const Home = () => {
    //const shows = ['Movie 1', 'Movie 2', 'Movie 3'];
    const shows: Show[] = movies;

    const Movies = () => (
        <div className='grid'>
            {shows.map((show) => (
                <div key={show.id} className='card'>
                    <div className='card-image img-container'>
                        <img src={show.poster} alt={show.title} />
                    </div>
                    <div className='text'>
                        <h3>{show.title}</h3>
                        <div className="infos">
                            <p>{show.duration}min</p>
                            <p>{show.year}</p>
                            <p>{show.director}</p>
                            {show.seasons && <p>{show.seasons} seasons</p>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <main className='centered'>
            <Header/>
            <section>
              <h2>Tous mes shows</h2>
                {
                    (shows?.length)?  <Movies/> : <p>Rien à afficher</p>
                    //(shows && shows.length)?  <Movies/> : <p>Rien à afficher</p>
                }
                <Movies/>
            </section>
        </main>
    )
}
export default Home;
