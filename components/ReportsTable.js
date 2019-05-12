import React from 'react';
import { Table, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withBaseDir } from '../util/helpers';

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
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret>
                            2018 - 2019
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/r18-19.pdf`} target="_blank">Report and Events</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>                                  
                </td>
            </tr>
            <tr>
                <td>
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret>
                            2017 - 2018
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/r17-18.pdf`} target="_blank">Report</DropdownItem>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/l17-18.pdf`} target="_blank">Events</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>                
                </td>
            </tr>
            <tr>
                <td>
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret>
                            2016 - 2017
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/r16-17.pdf`} target="_blank">Report</DropdownItem>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/l16-17.pdf`} target="_blank">Events</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>                 
                </td>
            </tr>
            <tr>
                <td>
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret>
                            2015 - 2016
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/r15-16.pdf`} target="_blank">Report</DropdownItem>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/l15-16.pdf`} target="_blank">Events</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>                
                </td>
            </tr>
            <tr>
                <td>
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret>
                            2014 - 2015
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/r14-15.pdf`} target="_blank">Report</DropdownItem>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/l14-15.pdf`} target="_blank">Events</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>                
                </td>
            </tr> 
            <tr>
                <td>
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret>
                            2013 - 2014
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/r13-14.pdf`} target="_blank">Report</DropdownItem>
                            <DropdownItem tag="a" href={withBaseDir`/static/documents/l13-14.pdf`} target="_blank">Events</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>                
                </td>
            </tr>                                                
        </tbody>
    </Table>
);

export default ReportsTable;
