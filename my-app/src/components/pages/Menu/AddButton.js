import React from 'react';

class AddButton extends React.Component {
    render () {
        return(
            <button type="button" className="AddButton">
                Add
                <i className="fa fa-plus"></i>
            </button>
        )
    }
}
export default AddButton;