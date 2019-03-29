import React, { Component } from 'react';
import { Head } from '../helperComponents/Head.jsx';
import { Header } from '../helperComponents/Header.jsx';
import { FileBuilder } from '../FileBuilder.jsx';

export class Schedule extends Component {

    renderAssignment(assignment) {
        const config = this.props.config;
        const filePath = `${config.baseURL}${assignment.bodyReference.filePath}`;
        return (
            <tr key={assignment}>
                <td>{assignment.title}</td>
                <td>
                    {
                        assignment.availableDate <= new Date() ?
                            <a href={filePath} role="button" className="btn btn-byu float-right">View</a> :
                            <a href="#" role="button" className="btn btn-byu float-right disabled" disabled>Not Avalivable</a>
                    }
                </td>
            </tr>
        )
    }

    renderClassNote(classNote) {
        const config = this.props.config;
        const filePath = `${config.baseURL}${classNote.fileReference.filePath}`;
        return (
            <tr key={classNote}>
                <td>{classNote.title}</td>
                <td>
                    {
                        classNote.availableDate <= new Date() ?
                            <a target="_blank" href={filePath} role="button" className="btn btn-byu float-right">Download</a> :
                            <a href="#" role="button" className="btn btn-byu float-right disabled" disabled>Not Avalivable</a>
                    }
                </td>
            </tr>
        )
    }

    renderClass(classPeriod) {

        if (classPeriod.classNotes.length == 0 && classPeriod.assignments.length == 0){
            return (<span key={classPeriod}></span>);
        }

        return (
            <div key={classPeriod}>
                <span className="float-right">{classPeriod.date.toDateString()}</span>
                <h2>{classPeriod.title}</h2>
                <table className="table table-hover">
                    {classPeriod.classNotes.map((classNote) => this.renderClassNote(classNote))}
                    {classPeriod.assignments.map((assignment) => this.renderAssignment(assignment))}
                </table>
                <br />
            </div>
        )
    }

    render() {
        const config = this.props.config;

        return (
            <html>
                <Head />
                <Header config={config} baseURL={''} />
                <div className="Schedule container content">
                    <h1>Schedule</h1>
                    <hr />
                    <p>On this page you can find links to the class notes and assignments for this semester.</p>
                    <br />
                    {
                        config.classPeriods.map((classPeriod) => this.renderClass(classPeriod))
                    }
                </div>
            </html>
        );
    }
}