import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { getAllDealers } from '../services/api';

class DatatablePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {
                    label: 'Fullname',
                    field: 'fullname',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Mobile',
                    field: 'mobile',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Address',
                    field: 'address',
                    sort: 'asc',
                    width: 350
                }
            ],
            rows: []
        }
    }

    componentDidMount() {
        getAllDealers().then(res => {
            this.setState({rows: res.data.data})
        })
    }

    render() {
        return (
            <div className="container" style={{ fontSize: '16px' }}>
                <h2 className="col text-center">Datatable</h2><br />
                <MDBDataTable
                    striped
                    hover
                    data={this.state}
                />
                <br />
            </div>
        );
    }
}

export default DatatablePage;