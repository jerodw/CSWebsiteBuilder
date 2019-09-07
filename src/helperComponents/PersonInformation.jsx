import React, { Component } from 'react';
import { OfficeHour } from '../config/OfficeHour';

export class PersonInformation extends Component {

  renderOfficeHours = () => {
    const officeHours = this.props.person.officeHours;
    if (officeHours.length > 0){
      return officeHours.map((officeHour) => {
        return <span key={officeHour}>{officeHour.dayOfWeek} {officeHour.startTime}-{officeHour.stopTime}<br/></span>
      })
    } else {
		if(this.props.person.byAppointment == true) {
	        return (
	          <span>By Appointment</span>
	        )
		} else {
	        return (
	          <span>TBD</span>
	        )
		}
    }    
  }

  render() {
    const person = this.props.person;
    const contactInformation = person.contactInformation;

    return (
      <div className="PersonInformation">
        <div className="row mt-3">
          <div className="col-md-2 text-center">
            <img className="img-responsive rounded professor-img" style={{width: "100%"}} src={person.pictureReference.filePath} />
          </div>
          <div className="col-md-10 mt-2">
            <h3>{contactInformation.name}</h3>
            <div className="row">
              <div className="col-lg-3 font-weight-bold">Email: </div>
              <div className="col-lg-9">{contactInformation.email} </div>

              <div className="col-lg-3 font-weight-bold">Phone: </div>
              <div className="col-lg-9">{contactInformation.phoneNumber} </div>

              <div className="col-lg-3 font-weight-bold">Office: </div>
              <div className="col-lg-9">{contactInformation.officeLocation} </div>

              <div className="col-lg-3 font-weight-bold">Office Hours: </div>
              <div className="col-lg-9">{this.renderOfficeHours()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}