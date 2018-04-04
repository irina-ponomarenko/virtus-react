import React from 'react';
import store from '../../../redux/store';

class Select extends React.Component {
    onChange = (e) => {
        store.dispatch({
            type: 'SORT_STATUS',
            payload: {
                status: e.target.value,
            }
        });
    };
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
export default Select;