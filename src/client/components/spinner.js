import React, { Component } from 'react';

const Spinner = () => (
  <div className="loading-state">
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
    <p className="loading-statement">Loading articles <span>.</span><span>.</span><span>.</span></p>
  </div>
)


export default Spinner;