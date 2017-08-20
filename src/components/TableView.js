import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const TableView = (props) => (
    <Table>
        <TableHeader>
            <TableRow>
            {
                props.headers.map((name, index) =>
                    <TableHeaderColumn key={index}>{name}</TableHeaderColumn>
                )
            }
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                props.data.map((row, index) =>
                    <TableRow key={index}>
                        {
                            row && row.map((column, index) =>
                                <TableRowColumn key={index}>{column}</TableRowColumn>
                           )
                        }
                    </TableRow>
                )
             }
        </TableBody>
    </Table>
);

export default TableView;
