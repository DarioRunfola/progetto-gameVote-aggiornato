import { Card } from 'react-bootstrap'
import MyVote from './MyVote';
import { useEffect } from 'react';




// card singola come da nome dove renderizziamo le singole info di ogni gioco 


const SingleCard = ({ game }) => {


    useEffect(() => {
        console.log("singleCard funziona");
        localStorage.setItem(game.title,JSON.stringify({MyVote}) );
    });


    return (
        <>


            <Card.Img variant="top" src={game.thumbnail} alt="immagine game">

            </Card.Img>
            <Card.Body>
                <Card.Title className='--card-text-title'>
                    {game.title}
                </Card.Title>
                <Card.Text className='--card-text'>
                    {game.short_description}
                </Card.Text>

            </Card.Body>


        </>
    )

}





export default SingleCard