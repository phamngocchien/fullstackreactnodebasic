import React, { Component } from 'react';

class HeadTitle extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3 d-flex justify-content-center">List product</h1>
                    <p className="lead d-flex justify-content-center">Sử dụng reactJS lấy dữ liệu nodeJS</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default HeadTitle;