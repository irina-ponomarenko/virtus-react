import React from 'react';

class SortHeader extends React.Component {
    handlerClick = () =>{
        this.props.handler();
    };

    render() {
        return(
          <th onClick={this.handlerClick}>
              {this.props.data.title}
              <i className={"fa "+ this.props.data.chevron}
                 aria-hidden="true">
              </i>
          </th>
        );
    }
}

export default SortHeader;