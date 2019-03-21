import React, { Component } from 'react';

import { Head } from '../helperComponenets/Head.jsx';
import { Header } from '../helperComponenets/Header.jsx';
import { PersonInformation } from '../helperComponenets/PersonInfromation.jsx';
import { DayOfWeek, OfficeHour } from '../config/OfficeHour'

const workingStyle = {
  backgroundColor: '#E8F5E9',
};

const notWorkingStyle = {
  backgroundColor: '#F9FBE7',
};

export class TAInfo extends Component {

  renderCell = (hour, weekDay) => {
    const config = this.props.config;

    var tasWorking = ""
    for (let i = 0; i < config.tas.length; i++) {
      var ta = config.tas[i];
      if (ta.isWorking(weekDay, hour)) {
        tasWorking += ta.contactInformation.name + ", "
      }
    }

    if (tasWorking != "") {
      return <td key={hour + weekDay} style={workingStyle}>
        {tasWorking.slice(0, tasWorking.length - 2)}
      </td>
    } else {
      return <td key={hour + weekDay} style={notWorkingStyle}></td>
    }



  }

  renderRow = (hour) => {
    const weekDays = [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday]
    return (<tr key={hour}>
      <td>
        {OfficeHour.toTimeString(hour)}
      </td>
      {weekDays.map((weekDay) => {
        return this.renderCell(hour, weekDay);
      })}
    </tr>)
  }

  renderTable = () => {
    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return hours.map((hour) => {
      return this.renderRow(hour);
    })
  }

  renderTaInformation = () => {
    const tas = this.props.config.tas;
    return tas.map((ta) => {
      return <PersonInformation key={ta} person={ta} />
    })
  }

  render() {
    const config = this.props.config;

    return (
      <html>
        <Head />
        <Header config={config} baseURL={''} />
        <div className="TAInfo container content">
          <h1>TA Information</h1>

          <h2>TA Schedule</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <th></th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </thead>
              <tbody id="table-body">
                {this.renderTable()}
              </tbody>
            </table>
          </div>

          <h2>TA Contact Information</h2>
          {this.renderTaInformation()}
        </div>
      </html>
    );
  }
}