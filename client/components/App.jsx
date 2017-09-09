import React from "react";

import NotesEditor from "./NotesEditor.jsx";
import NotesGrid from "./NotesGrid.jsx";
import "./App.less";

const App = React.createClass({
    handleNoteAdd(data){
        console.log(data);
    },

    render(){
        return (
         <div className="App">
             <h2 className="App__header">Notes App</h2>
             <NotesEditor onNoteAdd={this.handleNoteAdd}/>
             <NotesGrid />
         </div>
        )
    }
});

// onNoteAdd={this.handleNoteAdd}
// notes={this.state.notes} onNoteDelete={this.handleNoteDelete}

export default App;