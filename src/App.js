import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { search } from './action';
import {connect} from 'redux-zero/react'

const App = ({ items }) => {
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <button onClick={() => search()}>more</button>
          <div>{items.length != 0 ?
            items[0].pl_name

            :
            <br/>
    }</div>
        </Col>
      </Row>
    </Grid>

  );

}
const mapToPlay = ({items}) => ({items})
export default connect(mapToPlay)(App);
