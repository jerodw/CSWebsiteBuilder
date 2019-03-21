import React, { Component } from 'react';

export class PersonInformation extends Component {

  render() {
    const person = this.props.person;
    const contactInformation = person.contactInformation;
    console.log("Person Information")
    console.log(person)

    return (
      <div class="row mt-3">
        <div class="col-md-2 text-center">
          <img class="img-responsive rounded professor-img" alt={`${contactInformation.name}'s picture`} src={person.pictureReference.filePath} />
        </div>
        <div class="col-md-10 mt-2">
          <h3>{contactInformation.name}</h3>
          <div class="row">
            <div class="col-lg-2 font-weight-bold">Email: </div>
            <div class="col-lg-10">{contactInformation.email} </div>

            <div class="col-lg-2 font-weight-bold">Phone: </div>
            <div class="col-lg-10">{contactInformation.phoneNumber} </div>

            <div class="col-lg-2 font-weight-bold">Office: </div>
            <div class="col-lg-10">{contactInformation.officeLocation} </div>

            <div class="col-lg-2 font-weight-bold">Office Hours: </div>
            <div class="col-lg-10">TBD</div>
          </div>
        </div>
      </div>
    );
  }
}