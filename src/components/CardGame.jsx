import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react'

import GameList from './GameList';



// struttura portatnte dove andiamo a mappare i giochi così che possiamo avevre una struttura a card a ordinata e responsive per la nostra app

const CardGame = () => {
    // gestisce lo stato
    const [games, setGames] = useState([]);


    useEffect(() => {
        console.log("io funziono");
        getGames()
    }, [])

    // cambio di strada ho fatto una fetch perche è più giusto anche in visione di usare il localStorage
    const getGames = async () => {
        try {
            let resp = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games',
                {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'd59bfd6a16msh4e54974a66e38ccp1da046jsnd4a852d2d54f',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                    // ricordati di ricodare no ricordati di iscriverti per chiedere le chiavi se no non funziona nada
                }
            )
            if (resp.ok) {
                let fetchedGame = await resp.json()
                setGames(fetchedGame)
            } else {
                console.log('error');
            }
        } catch (error) {
            console.log(error, "sono in catch");
        }
    }

    // // seleziona il voto
    // const handleChange = (e) => {
    //     setMyVoto(e.target.value)
    // }
    // // salva il voto (in teoria)
    // const hendelSubmit = (e) => {
    //     e.preventDefault()

    // }

    console.log(games);


    return (
        <>
            <Container className='d-flex' >
                <Row className="m-auto">
                    

                        <GameList
                            games={games}
                        />                      
                        


                   
                </Row>

            </Container>
        </>
    )


}


export default CardGame




