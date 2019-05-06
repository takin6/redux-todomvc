import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import createReactClass from 'create-react-class';

export default createReactClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return {value: this.props.text};
  },
  _handleKeyDown: function(e) {
    switch (e.key) {
      case 'Enter':
        return this.props.doneEditing(this.props.itemId, this.state.value);
      case 'Escape':
        return this.cancelEditing(this.props.itemId);
    }
  },
  _handleOnBlur: function(e) {
    return this.cancelEditing(this.props.itemId);
  },
  _handleOnChange: function(e) {
    this.setState({value: e.target.value});
  },
  cancelEditing: function() {
    this.setState({'value': this.props.text});
    return this.props.cancelEditing(this.props.itemId);
  },
  render: function () {
    return <input className="edit"
                  autoFocus={true}
                  value={this.state.value}
                  onChange={this._handleOnChange}
                  type="text"
                  ref="itemInput"
                  onKeyDown={this._handleKeyDown}
                  onBlur={this._handleOnBlur}
                  />
  }
});