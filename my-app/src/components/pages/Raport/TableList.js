import React from 'react';
import SortHeader from './SortHeader';


class TableList extends  React.Component{
    constructor(){
        super();
        this.titleList = [
            {
                title: 'Campaing',
                chevron: 'fa-chevron-down'
            },
            {
                title: 'Time',
                chevron: 'fa-chevron-down'
            },
            {
                title: 'Views',
                chevron: 'fa-chevron-down'
            },
            {
                title: 'Visitors',
                chevron: 'fa-chevron-down'
            },
            {
                title: 'CTR',
                chevron: 'fa-chevron-down'
            },
            {
                title: 'CPC',
                chevron: 'fa-chevron-down'
            },
            {
                title: 'CPV',
                chevron: 'fa-chevron-down'
            },
            {
                title: 'CPM',
                chevron: 'fa-chevron-down'
            },
            {
                title: 'Status',
                chevron: 'fa-chevron-down'
            }
        ];

        this.state = {
            tableList: [
            {
                campaing: 'Lorem ipsum dolor sit amet tetur',
                time: '6 days',
                views: '358 000',
                visitors: '58 200',
                ctr: '25%',
                cpc: '$3.02',
                cpv: '$2.51',
                cpm: '$28.35',
                status: 'Active',
                statusActive: 'StatusActive'
            },
            {
                campaing: 'Sed do eiusmod tempor',
                time: '7 hours',
                views: '1 200',
                visitors: '800',
                ctr: '10%',
                cpc: '$8.45',
                cpv: '$6.13',
                cpm: '$45.22',
                status: 'Disable',
                statusActive: 'StatusDisabled'
            },
            {
                campaing: 'Consectetur adipisicing elit sed',
                time: '3 days',
                views: '69 000',
                visitors: '7 300',
                ctr: '19%',
                cpc: '$6.22',
                cpv: '$3.90',
                cpm: '$37.80',
                status: 'Active',
                statusActive: 'StatusActive'
            }
        ]
        };
    }

    handleSortTable = (title, e) =>{
        let sortList = this.state.tableList.sort(function (a, b) {
            if (a[title.toLowerCase()]  > b[title.toLowerCase()]) {
                return 1;
            }
            if (a[title.toLowerCase()] < b[title.toLowerCase()]) {
                return -1;
            }
            return 0;
        });
        this.setState ({tableList: sortList});
    };

    render() {
        return(
            <div className="TableList">
                <table className="ProjectGraphList">
                    <thead>
                    <tr className="TableTitle">
                        {
                            this.titleList.map((item, index) =>{
                                return(
                                    <SortHeader
                                        key={index}
                                        data={item}
                                        handler={this.handleSortTable.bind(this, item.title)}
                                    />
                                );
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.tableList.map((item,index)=> {
                            return(
                                <tr className="TableInfo" key={index}>
                                    <td><h2>{item.campaing}</h2></td>
                                    <td><h2>{item.time}</h2></td>
                                    <td><h2>{item.views}</h2></td>
                                    <td><h2>{item.visitors}</h2></td>
                                    <td><h2>{item.ctr}</h2></td>
                                    <td><h2>{item.cpc}</h2></td>
                                    <td><h2>{item.cpv}</h2></td>
                                    <td><h2>{item.cpm}</h2></td>
                                    <td className="StatusClass"><i className={item.statusActive +" fa fa-circle"} aria-hidden="true"></i> <h2>{item.status}</h2></td>
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