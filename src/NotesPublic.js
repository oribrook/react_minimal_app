import React from "react";
import { useState } from "react";
import {getNotesPaginationPublic} from "./client/notes_client"
import Note from "./Note";
import InfiniteScroll from "react-infinite-scroller";

function NotesPublic() {
  const [notes, setNotes] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);


  const onLoadMore = async () => {
    const res = await getNotesPaginationPublic(nextPage, 10);

    if (!res.has_more) {
      setHasMore(false)
    }
    setNextPage((prev) => {
      return prev + 1;
    });
    const newNotes = [...notes, ...res.data];
    setNotes(newNotes);
  }

  return (
    <div >       
      
      <InfiniteScroll
        loadMore={onLoadMore}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {notes &&
          notes.map((n) => {
            return <Note key={n.id} note={n} />;
          })}
        </div>
        
      </InfiniteScroll>
    </div>
  );
}

export default NotesPublic;