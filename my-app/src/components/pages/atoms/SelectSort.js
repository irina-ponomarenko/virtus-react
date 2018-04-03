import React from 'react';
import store from '../../../redux/store';

class SelectSort extends React.Component {
    onChange = (e) => {
        store.dispatch({
            type: 'SORT_STATUS',
            typePage: 'PROJECT_SORT',
            payload: {
                status: e.target.value,
                sortProject: e.target.value
            }
        });

        console.log(store.getState());
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
export default SelectSort;