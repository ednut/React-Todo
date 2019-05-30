import React from "react";

const Archive = props => (
  <div>
    {props.archive.length !== 0 && (
      <div className="archivedWrap">
        <div className="title">Saved Archive</div>
        {props.archive.map(x => (
          <span key={x.id} className="myarchived">
            {x.text}{" "}
            <button
              onClick={() => props.deleteArchive(x)}
              className="delete-archived"
            >
              <i className="fas fa-times" />
            </button>
          </span>
        ))}
      </div>
    )}
  </div>
);

export default Archive;
