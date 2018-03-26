import React from 'react';

class Select extends React.Component {
    onChange = (e) => {
        console.log(e.target.value);
    };
    render() {
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
export default Select;