import React, { Component } from 'react';
import { Head } from '../helperComponents/Head.jsx';
import { Header } from '../helperComponents/Header.jsx';
import { FileBuilder } from '../FileBuilder.jsx';

export class Schedule extends Component {

    // This makes sure that each id is unique in the event of assignments or class notes with the same title
    static numFiles = 0;

    renderAssignment(assignment) {
        const config = this.props.config;
        const filePath = `${config.baseURL}${assignment.bodyReference.filePath}`;
        const idSafeTitle = assignment.title.replace(/\s/gms, '') + Schedule.numFiles;
        Schedule.numFiles++;
        return (
            <tr key={assignment}>
                <td>{assignment.title}</td>
                <td>

                    <a id={idSafeTitle} href="#" role="button" className="btn btn-byu float-right disabled" disabled>Not Available</a>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        var availableDate = new Date("${assignment.availableDate}") ? new Date("${assignment.availableDate}") : new Date() - 100;
                        if (availableDate <= new Date()) {
                            var button = document.getElementById("${idSafeTitle}");
                            button.disabled = false;
                            button.href = "${filePath}";
                            button.classList.remove("disabled");
                            button.innerText = "View";
                        }
                        `}}>
                    </script>
                </td>
            </tr>
        )
    }

    renderClassNote(classNote) {
        const config = this.props.config;
        const filePath = `${config.baseURL}${classNote.fileReference.filePath}`;
        const idSafeTitle = classNote.title.replace(/\s/gms, '') + Schedule.numFiles;
        Schedule.numFiles++;
        return (
            <tr key={classNote}>
                <td>{classNote.title}</td>
                <td>
                    <a id={idSafeTitle} href="#" role="button" className="btn btn-byu float-right disabled" disabled>Not Available</a>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        var availableDate = new Date("${classNote.availableDate}") ? new Date("${classNote.availableDate}") : new Date();
                        if (availableDate <= new Date()) {
                            var button = document.getElementById("${idSafeTitle}");
                            button.disabled = false;
                            button.href = "${filePath}";
                            button.classList.remove("disabled");
                            button.innerText = "Download";
                            button.target = "_blank";
                        }
                        `}}>
                    </script>
                </td>
            </tr>
        )
    }

    renderClass(classPeriod) {

        if (classPeriod.classNotes.length == 0 && classPeriod.assignments.length == 0) {
            return (<span key={classPeriod}></span>);
        }

        return (
            <div key={classPeriod}>
                <span className="float-right">{classPeriod.date.toLocaleDateString()}</span>
                <h2>{classPeriod.title}</h2>
                <table className="table table-hover">
                    {classPeriod.assignments.map((assignment) => this.renderAssignment(assignment))}
                    {classPeriod.classNotes.map((classNote) => this.renderClassNote(classNote))}
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
                    <br />
                    {
                        config.classPeriods.map((classPeriod) => this.renderClass(classPeriod))
                    }
                </div>
            </html>
        );
    }
}