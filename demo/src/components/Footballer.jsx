import { Table, Button } from "react-bootstrap";
import {QuestionCircle, Flag} from 'react-bootstrap-icons'


function FootballerDisplay(props){

    const footballers = props.footballers;

    return <Table>
        <tbody>
            {footballers.map( f => <FootballerRow key = {f.id} footballer = {f}/>)}  
        </tbody>
        </Table>
}


function FootballerRow(props){
    const f = props.footballer
    return <tr>
        <FootballerRowData footballer = {f}/>
        <FootballerActionButtons/>
    </tr>
}

function FootballerRowData(props){
    const f = props.footballer
    return <>
        <td>{f.name}</td>
    </>
}

function FootballerActionButtons(props){
    return <td>
        <Button variant="primary">Ask<QuestionCircle/></Button>
        <Button variant="primary">Mark<Flag/></Button>
    </td>
}


export default FootballerDisplay;