import './sponsors.scss';
import { Container } from "react-bootstrap";

function Sponsors() {
  return (
    <div className='sponsors-section'>
      <div className='Sponsors pt-4' id="sponsors">
        <div className='sponsors-thank-you'>
          <h1>Thank you to our sponsors</h1>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='sponsors-image'>
              <img src='assets/sponsors/SD308-Community-Unit.png' alt='sd308sponsors'></img>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='sponsors-image'>
              <img src='assets/sponsors/TE_Connectivity_logo.svg' alt='TE Connectivity'></img>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='sponsors-image'>
              <img src='assets/sponsors/CAT-Symbol.png' alt='Caterpillar Inc'></img>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='sponsors-image'>
              <img src='assets/sponsors/americas-navy-vector-logo.png' alt='Navy'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors;