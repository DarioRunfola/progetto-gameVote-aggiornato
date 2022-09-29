import { Card } from 'react-bootstrap'



// card singola come da nome dove renderizziamo le singole info di ogni gioco 


const SingleCard = ({ game }) => {

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