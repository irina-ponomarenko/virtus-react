import React from 'react';

class SelectCharts extends React.Component {
    render() {
        console.log(this.props);
        return(
            <select className={'SelectPage ' + this.props.className} onChange={this.onChange}>
                {
                    this.props.data.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })
                }
            </select>
        )
    }
}
export default SelectCharts;