import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState,useEffect } from 'react'
import SingleCard from "./SingleCard";
import MyVote from './MyVote';


// struttura portatnte dove andiamo a mappare i giochi così che possiamo avevre una struttura a card a ordinata e responsive per la nostra app

const CardGame = (props) => {
// gestisce lo stato
    const [myVoto, setMyVoto] = useState("");


    useEffect(() => {
    localStorage.setItem(props.games.title, JSON.stringify())
    })

// seleziona il voto
    const handleChange = (event) => {
        setMyVoto(event.target.value)
    }
    // salva il voto (in teoria)
    const hendelSubmit = (e) => {
        e.preventDefault()

    }

    console.log(myVoto);


    return (
        <>
            <Container >
                <Row className="justify-content-space-between">

                    {props.games.map((g) => (

                        <Col xs={12} sm={6} md={4} xl={3} key={g.id}>
                            <Card className='mb-3 mt-5 --card'>

                                <SingleCard
                                    game={g}
                                />
                                <MyVote
                                    game={g}
                                    onSubmit={hendelSubmit}
                                    onChange={handleChange}
                                    impostaVoto={setMyVoto}
                                />
                            </Card>

                        </Col>
                    ))
                    }
                </Row>

            </Container>
        </>
    )







}


export default CardGame



