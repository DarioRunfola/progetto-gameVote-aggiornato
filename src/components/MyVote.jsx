import { Form, Button } from 'react-bootstrap'




const MyVote = (props) => {


   

    return (

        <>
            <Form.Group
                onSubmit={props.hendelSubmit}
            >
                <Form.Select aria-label="Default select example"
                    as='select'
                    value={props.myVoto}
                    onChange={props.handleChange}
                >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </Form.Select>

                <Form.Label>Vota il tuo gioco:</Form.Label>
                <Button
                    className='btn btn-dark'
                    type="submit"
                >Salva</Button>
            </Form.Group>

        </>
    );

}






export default MyVote



