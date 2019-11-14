import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { ClimbingBoxLoader } from 'react-spinners';


// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: black;
    margin-top: 100px;
`;

class AwesomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className='sweet-loading'>
                <ClimbingBoxLoader
                    css={override}
                    sizeUnit={"px"}
                    size={50}
                    color={'#9B9B9B'}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default AwesomeComponent;