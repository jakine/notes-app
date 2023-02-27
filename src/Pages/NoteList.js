import React from 'react'
import Note from '../components/Note'
import styles from './NoteList.module.css'


import { useDispatch, useSelector } from "react-redux";
import {noteActions, noteSlice } from '../store/noteSlice'




const NoteList = (props) => {

	const dispatch=useDispatch()

	const deleteNote=(note)=>{	
		dispatch(noteActions.deleteNote(note))
		{console.log(props.noteList)}
	}

	// {debugger}
	return (
	
    <div className={styles.noteList}>
			{props.noteList.length>0 && props.noteList.map((note) => (
				<Note
					key={note.id}
					text={note.notetext}
          tag={note.notetag}
					date={note.date}
					handleDeleteNote={()=>deleteNote(note)}
				/>
			))}
		
		</div>
  )
}

export default NoteList
