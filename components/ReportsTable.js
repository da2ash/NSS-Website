import React from 'react';
import { Table, Button } from 'reactstrap';

import "./ReportsTable.css";

const ReportsTable = () => (
    <Table id="ReportsTable">
        <thead>
            <tr>
                <h3>
                    Annual&nbsp;Reports
                </h3>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <a href="/static/documents/report18-19.pdf" target="_blank">2018 - 2019</a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="/static/documents/report17-18.pdf" target="_blank">2017 - 2018</a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="/static/documents/report16-17.pdf" target="_blank">2016 - 2017</a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="/static/documents/report15-16.pdf" target="_blank">2015 - 2016</a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="/static/documents/report14-15.pdf" target="_blank">2014 - 2015</a>
                </td>
            </tr>                                    
        </tbody>
    </Table>
);

export default ReportsTable;
