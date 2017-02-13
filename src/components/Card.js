var React = require('react')

var Card = React.createClass({

  render: function() {
    var srcStr = "http://golearntocode.com/images/cards/" + this.props.idStr + ".png"
    return (
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={srcStr} /></h1>
          </div>
    )
  }

})

module.exports = Card
