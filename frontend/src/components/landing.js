import React from 'react';

const styles = { height: window.innerHeight }

const Landing = () => {
    return (
        <div className="full-height d-flex justify-content-center sticky-top" id="landing" style={styles}>
            <div className="d-flex justify-content-center align-items-center border-right border-light" id="customer-panel">
                <a className="clear-link p-3 border border-light" href="/customer">Customer Login</a>
            </div>
            <div className="d-flex justify-content-center align-items-center border-left border-light" id="employee-panel">
                <a className="clear-link p-3 border border-light" href="/employee">Employee Login</a>
            </div>
        </div>
    );
}

export default Landing;