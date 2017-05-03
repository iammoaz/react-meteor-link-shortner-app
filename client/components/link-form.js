import React, { Component } from 'react';

class LinkForm extends Component {
   constructor(props) {
      super(props);

      this.state = { error: '' };
   }

   handleSubmit(event) {
      event.preventDefault();
      Meteor.call('links.insert', this.refs.link.value, (error) => {
         if (error) {
            this.setState({ error: 'Enter a valid URL' });
         } else {
            this.setState({ error: '' });
            this.refs.link.value = ""
         }
      });
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
               <label className="sr-only" for="inputLink">Link</label>
               <input className="form-control" type="link" id="inputLink" placeholder="Enter Link to Shorten" ref="link" />
            </div>
            <div className="text-danger">{this.state.error}</div>
            <button className="btn btn-primary" type="submit">Shorten</button>
         </form>
      );
   }
};

export default LinkForm;
