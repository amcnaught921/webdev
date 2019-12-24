import * as React from 'react';  
import Table from '@material-ui/core/Table'; 
import TableBody from '@material-ui/core/TableBody'; 
import TableCell from '@material-ui/core/TableCell'; 
import TableHead from '@material-ui/core/TableHead'; 
import TableRow from '@material-ui/core/TableRow'; 
interface UserData {  
    first: string  
    last: string  
    email: string  
    address: string  
    created: string  
    balance: string  
} 
const UsersDummyData: UserData[] = [
    {  
        first: 'Floyd',  
        last: 'Brown',  
        email: 'orchidrabbit12@gmail.com',  
        address: '49996 Margarete Trafficway',  
        created: 'December 2, 2014',  
        balance: '$4,945.37'  
    },  
    {  
        first: 'James',  
        last: 'Stokes',  
        email: 'goldrabbit84@gmail.com',  
        address: '9444 Hazel Meadows',  
        created: 'February 14, 2019',  
        balance: '$5,618.38'  
    }  
];
export default class Users extends React.Component {  
    render() {  
        return (  
            <div>  
                <Table> 
                    <TableHead>  
                        <TableRow>  
                            <TableCell>First Name</TableCell>  
                            <TableCell>Surname</TableCell>  
                            <TableCell>Email</TableCell>  
                            <TableCell>Address</TableCell>  
                            <TableCell>Created</TableCell>  
                            <TableCell>Balance</TableCell>  
                        </TableRow>  
                    </TableHead>  
                    <TableBody>  
                        {UsersDummyData.map((data, idx) => (  
                            <TableRow key={`users-table-${idx}`}>  
                                <TableCell>{data.first}</TableCell>  
                                <TableCell>{data.last}</TableCell>  
                                <TableCell>{data.email}</TableCell>  
                                <TableCell>{data.address}</TableCell>  
                                <TableCell>{data.created}</TableCell>  
                                <TableCell>{data.balance}</TableCell>  
                            </TableRow>  
                        ))}  
                    </TableBody>  
                </Table> 
            </div>  
        )  
    }
}