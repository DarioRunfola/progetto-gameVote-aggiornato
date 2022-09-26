
import Card from 'react-bootstrap/Card';








// card singola come da nome dove renderizziamo le singole info di ogni gioco 


const SingleCard = (props) => {

    return (
        <>

            <Card.Img variant="top" src={props.game.thumbnail} />
            <Card.Body>
                <Card.Title className='--card-text-title'>
                    {props.game.title}
                </Card.Title>
                <Card.Text className='--card-text'>
                    {props.game.short_description}
                </Card.Text>
            </Card.Body>

        </>
    )

}





export default SingleCard