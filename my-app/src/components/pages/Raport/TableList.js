import React from 'react';


class TableList extends  React.Component{
    render() {
        const TableList = [
            {
                text1: 'Lorem ipsum dolor sit amet tetur',
                text2: '6 days',
                text3: '358 000',
                text4: '58 200',
                text5: '25%',
                text6: '$3.02',
                text7: '$2.51',
                text8: '$28.35',
                text9: 'Active',
                status: 'StatusActive'
            },
            {
                text1: 'Sed do eiusmod tempor',
                text2: '7 hours',
                text3: '1 200',
                text4: '800',
                text5: '10%',
                text6: '$8.45',
                text7: '$6.13',
                text8: '$45.22',
                text9: 'Disable',
                status: 'StatusDisabled'
            },
            {
                text1: 'Consectetur adipisicing elit sed',
                text2: '3 days',
                text3: '69 000',
                text4: '7 300',
                text5: '19%',
                text6: '$6.22',
                text7: '$3.90',
                text8: '$37.80',
                text9: 'Active',
                status: 'StatusActive'
            }
        ];
        return(
            <div className="TableList">
                <table className="ProjectGraphList">
                    <thead>
                    <tr className="TableTitle">
                        <th>Campaing <i className="fa fa-chevron-down" aria-hidden="true"></i></th>
                        <th>Time <i className="fa fa-chevron-down" aria-hidden="true"></i></th>
                        <th>Views <i className="fa fa-chevron-down" aria-hidden="true"></i></th>
                        <th>Visitors <i className="fa fa-chevron-down" aria-hidden="true"></i></th>
                        <th>CTR <i className="fa fa-chevron-down" aria-hidden="true"></i></th>
                        <th>CPC <i className="fa fa-chevron-down" aria-hidden="true"></i></th>
                        <th>CPV <i className="fa fa-chevron-down" aria-hidden="true"></i></th>
                        <th>CPM <i className="fa fa-chevron-down" aria-hidden="true"></i></th>
                        <th>Status <i className="fa fa-chevron-down" aria-hidden="true"></i></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        TableList.map((item,index)=> {
                            return(
                                <tr className="TableInfo" key={index}>
                                    <td><h2>{item.text1}</h2></td>
                                    <td><h2>{item.text2}</h2></td>
                                    <td><h2>{item.text3}</h2></td>
                                    <td><h2>{item.text4}</h2></td>
                                    <td><h2>{item.text5}</h2></td>
                                    <td><h2>{item.text6}</h2></td>
                                    <td><h2>{item.text7}</h2></td>
                                    <td><h2>{item.text8}</h2></td>
                                    <td className="StatusClass"><i className={item.status +" fa fa-circle"} aria-hidden="true"></i> <h2>{item.text9}</h2></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default TableList;