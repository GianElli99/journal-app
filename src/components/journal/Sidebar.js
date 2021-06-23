import React from 'react';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="jounal__sidebar-navbar">
        <h3>
          <span>Gian!</span>
        </h3>
        <button className="btn">Logout</button>
      </div>

      <div className="journal__new-entry">
        <i className="far fa-plus-square fa-6x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
