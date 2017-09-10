import React from "react";

import NotesActions from "../actions/NotesAction";
import NotesStore from "../store/NotesStore";

import NotesEditor from "./NotesEditor.jsx";
import NotesGrid from "./NotesGrid.jsx";
import "./App.less";

function getStateFromFlux(){
    return{
      isLoading: NotesStore.isLoading(),
      notes: NotesStore.getNotes()
    };
}

const App = React.createClass({
    getInitialState(){
        return getStateFromFlux();
    },

    componentWillMount(){
      NotesActions.loadNotes();
    },

    componentDidMount(){
      NotesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount(){
        NotesStore.removeChangeListener(this._onChange);
    },

    handleNoteAdd(data){
        NotesActions.createNote(data);
    },

    handleNoteDelete(note){
        NotesActions.deleteNote(note.id);
    },

    render(){
        return (
         <div className="App">
             <h2 className="App__header">Notes App</h2>
             <NotesEditor onNoteAdd={this.handleNoteAdd}/>
             <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
         </div>
        )
    },

    _onChange(){
        this.setState(getStateFromFlux());
    }
});

// onNoteAdd={this.handleNoteAdd}
// notes={this.state.notes} onNoteDelete={this.handleNoteDelete}

export default App;