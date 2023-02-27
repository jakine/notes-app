import React from 'react'
import styles from './NoteListBy.module.css'
import Note from '../components/Note'
const NoteListBy = (props) => {
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

export default NoteListBy
