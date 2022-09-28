import SingleCard from './SingleCard';
import { Col } from 'react-bootstrap';




const GameList = ({ games }) => (
    <div >
        {
            games.map((game) => (
                <Col xs={12} md={3}>
                    <SingleCard
                        key={game.id}
                        game={game}
                       
                    />
                </Col>

            ))
        }
    </div>
)




export default GameList

