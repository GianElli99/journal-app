import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          name="content"
          id="content"
          placeholder="What happened today?"
          className="notes__text-area"
        ></textarea>
        <div className="notes__images">
          <img
            src="https://es.visicadcam.com/images/icons/hexagon/darkblue/GENERAL_USE_DARK_BLUE_ICON_NEWS-71.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};
