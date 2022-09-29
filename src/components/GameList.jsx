import SingleCard from './SingleCard';
import { Col, Card } from 'react-bootstrap';
import MyVote from './MyVote';





const GameList = ({ games }) => (
    <>
        {
            games.map((game) => (
                <Col xs={12} md={9} lg={6} xl={3} key={game.id} >
                    <Card className="mb-3 mt-5 --card">
                        <SingleCard
                            game={game}
                        />
                        <Card.Footer>
                            <MyVote game={game} />
                        </Card.Footer>
                    </Card>
                </Col>

            ))
        }
    </>
)




export default GameList

