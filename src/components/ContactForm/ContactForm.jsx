import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired
            })
        ).isRequired,
        onAddContact: PropTypes.func.isRequired
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, number } = this.state;
        const { onAddContact } = this.props;


        onAddContact(name, number);
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Number:</label>
                    <input
                        type="tel"
                        id="number"
                        className="form-control"
                        name="number"
                        placeholder="+380(97)-000-00-00"
                        value={number}
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add contact</button>
            </form>
        );
    }
}

export default ContactForm;