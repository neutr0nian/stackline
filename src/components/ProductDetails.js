import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Feature from './Feature'

function ProductDetails(props) {
    const info = props.retailData
  return (
    <div className="bg-light bx-shadow center" style={{height: '100%'}}>
      <img src={info.image} alt="shark ninja" className="prod-img"/>
      <h4 className='mt-3'>{info.title}</h4>
      <p style={{padding: '2px 20px 2px 20px'}} className="text-gray">{info.subtitle}</p>
      <Row>
        {
            info.tags.map((tag, index) => (
                <Col className='m-0 mb-2'>
                    <Feature key={index} text={tag}></Feature>
                </Col>
            ))
        }
      </Row>

    </div>
  )
}

const mapStateToProps = state => {
    return {
        retailData: state.retailData,
    }
  }

export default connect(mapStateToProps, null)(ProductDetails)
