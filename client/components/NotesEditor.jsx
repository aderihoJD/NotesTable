import React from "react";

import ColorPicker from "./ColorPicker.jsx";

import "./NotesEditor.less";

const NotesEditor = React.createClass({
    getInitialState() {
        return {
            title: '',
            text: '',
            color: '#FFFFFF'
        };
    },

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    },

    handleTextChange(event) {
        this.setState({text: event.target.value});
    },

    handleColorChange(color) {
        this.setState({color});
    },

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({title: "", text: "", color: "#FFFFFF"});
    },

    render() {
        return (
            <div className='NotesEditor'>
                <input
                    type="text"
                    className="NotesEditor__title"
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder="Enter note text"
                    rows={5}
                    className="NotesEditor__text"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="NotesEditor__footer">
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <button
                        className="NotesEditor__button"
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
});

export default NotesEditor;