import React from "react";
import { Col, Row } from "react-bootstrap";
import { columns } from "../data/columns";
import { getData } from "../redux/retail/retailActions";
import DataChart from "./DataChart";
import DataTable from "./DataTable";
import ProductDetails from "./ProductDetails";
import { connect } from 'react-redux'

function MainPage(props) {
    const info= props.retailData;

    return (
        <div className="mt-4">
            <Row>
                <Col lg={3}>
                    <ProductDetails />
                </Col>
                <Col>
                <Row>
                  <Col>
                    <DataChart />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <DataTable columns={columns} data={info.sales} />
                  </Col>
                </Row>
                </Col>
            </Row>
        </div>
    );
}
const mapStateToProps = state => {
  return {
      retailData: state.retailData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getData: () => dispatch(getData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
