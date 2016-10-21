var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
      <div>
        <Nav/>
        <div className="row">
           <div className="column medium-6 large-4 small-centered">
             <h3>Main Components</h3>
             {props.children}
           </div>
        </div>
      </div>
    );
};

module.exports = Main;
