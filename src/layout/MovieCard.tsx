import {Show} from "../utils/types/Show";
import '../styles/Card.css';

type Props = {
    show: Show,
}
function MovieCard(props: Props) {
    const show = props.show;
    return (
        <div key={show.id} className='Card'>
            <div className='card-image img-container'>
                <img src={show.poster} alt={show.title} />
            </div>
            <div className='text'>
                <h3>{show.title}</h3>
                <div className="infos">
                    <span>{show.duration}min</span>
                    <span>{show.year}</span>
                    {show.seasons && <span>{show.seasons} seasons</span>}
                </div>
                <p className='director'>{show.director}</p>
            </div>
        </div>
    )
}

export default MovieCard;
