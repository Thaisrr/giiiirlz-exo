import Header from "../layout/Header";
import {Show} from "../utils/types/Show";
import movies from "../utils/const/Shows";
import MovieCard from "../layout/MovieCard";
import {useState} from "react";

const Home = () => {
    const [shows, setShows] = useState<Show[]>(movies);
    // setShows( liste_shows ) : pour changer les films à afficher

    const Movies = () => (
        <div className='grid'>
            {shows.map((show) => (<MovieCard key={show.id} show={show}/>))}
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
            </section>
        </main>
    )
}
export default Home;
