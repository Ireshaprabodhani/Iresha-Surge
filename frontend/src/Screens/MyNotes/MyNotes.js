import React from 'react'
import { Accordion,  Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import notes from '../../data/notes.js';
import MainScreen from '../../components/MainScreen'


function MyNotes() {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
       
    }
  };


  return (
    <MainScreen title=" welcome back Iresha...">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion>
          <Card>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.onClick as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.onClick>
              </span>

              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="sucess">category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">created on-data</footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
}

export default MyNotes
