import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import {Link} from "react-router-dom";
import { useState } from 'react';

const Datatable = () => {

    const [data, setData] = useState(userRows)
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    
    const actionColumn = [{
        field: "action", name: "Action", width: 200, renderCell : (params) => {
            return (
                <div className='cellAction'>
                    <div className='viewButton'>
                        <Link to={"/users/test"} style={{textDecoration:'none'}}>View</Link>
                    </div>
                    <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>
                       Delete
                    </div>
                </div>
            )
        }
    }]

    return (
        <div className='datatable'>

            <div className="datatable__title">
                Add new user
                <Link to={"/users/new"} style={{textDecoration:'none'}} className="datatable__title__link">Add new</Link>
            </div>

            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                className='datagrid'
            />

        </div>
    )
}

export default Datatable