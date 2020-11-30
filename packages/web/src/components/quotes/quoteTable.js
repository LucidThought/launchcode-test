import React, { useEffect, useState } from "react";
import { Container, Table, Modal, Button } from "react-bootstrap";
import moment from "moment";

const QuoteModal = (props) => {
  const [detailQuote, setDetailQuote] = useState({});

  useEffect(() => {
    fetch(`//localhost:3333/quote/${props.quoteId}`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        response.length > 0 ? setDetailQuote(response[0]) : setDetailQuote({});
      })
      .catch((err) => console.log(err));
  }, [props.quoteId]);

  return (
    <Modal size="lg" centered show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title>
          {detailQuote.name} for {detailQuote.number_travellers} travellers
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered>
          <tbody>
            <tr>
              <td>Departing From</td>
              <td>{detailQuote.departure_location}</td>
            </tr>
            <tr>
              <td>Destination</td>
              <td>{detailQuote.destination_location}</td>
            </tr>
            <tr>
              <td>Departing Date</td>
              <td>
                {detailQuote
                  ? moment(detailQuote.depart_date).format(
                      "MMMM Do YYYY, h:mm a"
                    )
                  : ""}
              </td>
            </tr>
            <tr>
              <td>Return Date</td>
              <td>
                {detailQuote
                  ? moment(detailQuote.return_date).format(
                      "MMMM Do YYYY, h:mm a"
                    )
                  : ""}
              </td>
            </tr>
            <tr>
              <td>Additional Transportation Required</td>
              <td>
                {detailQuote && detailQuote.transportation
                  ? JSON.parse(detailQuote.transportation).map((t) => t)
                  : ""}
              </td>
            </tr>
            <tr>
              <td>Contact Info</td>
              <td>{detailQuote.contact}</td>
            </tr>
            <tr>
              <td>Quoted Price</td>
              <td>
                $
                {detailQuote && detailQuote.price
                  ? detailQuote.price.toFixed(2)
                  : ""}
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const QuoteTable = () => {
  const [quotes, setQuotes] = useState([]);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [openQuoteId, setOpenQuoteId] = useState(0);

  useEffect(() => {
    fetch("//localhost:3333/quotes", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setQuotes(response);
      })
      .catch((err) => console.log(err));
  }, []);

  let openModal = (quoteIdToOpen) => {
    setOpenQuoteId(quoteIdToOpen);
    setQuoteModalOpen(true);
  };

  return (
    <Container>
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th>ID #</th>
            <th>Name</th>
            <th>Destination</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((q, index) => {
            return (
              <tr key={index} onClick={() => openModal(q.id)}>
                <td>{q.id}</td>
                <td>{q.name}</td>
                <td>{q.destination_location}</td>
                <td>$ {q.price.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <QuoteModal
        show={quoteModalOpen}
        onHide={() => setQuoteModalOpen(false)}
        quoteId={openQuoteId}
      />
    </Container>
  );
};

export default QuoteTable;
