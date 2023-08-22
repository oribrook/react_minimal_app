import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { getNotesPagination } from "./client/notes_client";
import Note from "./Note";


const PageNumServer = () => {  
  const [curPage, setCurPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [dataPage, setDataPage] = useState([]);

    const loadMore = async () => {
        const res = await getNotesPagination(curPage - 1, 10); // pageSize = 10
        console.log(res.data);
        setDataPage(res.data)
        setLastPage(Math.ceil(res.total / 10))
    }
    
  useEffect(() => {
        loadMore()    
    // setLastPage(Math.ceil(data.length / 10));
  }, []);

  useEffect(() => {
    loadMore()
  }, [curPage]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {dataPage.map((elem) => {
            return <Note key={elem.id} note={elem} />;
        })}
      </div>
<br/>
          <div>
      <Pagination style={{ display: "flex", justifyContent: "center" }}>
        <Pagination.First
          disabled={curPage === 1}
          onClick={() => {
            setCurPage(1);
          }}
        />

        <Pagination.Prev
          disabled={curPage === 1}
          onClick={() => {
            setCurPage((p) => {
              return p - 1;
            });
          }}
        />

        {curPage !== 1 && (
          <Pagination.Item
            onClick={() => {
              setCurPage((p) => {
                return p - 1;
              });
            }}
          >
            {curPage - 1}
          </Pagination.Item>
        )}

        <Pagination.Item active>{curPage}</Pagination.Item>        

        {curPage !== lastPage && (
          <Pagination.Item
            onClick={() => {
              setCurPage((p) => {
                return p + 1;
              });
            }}
          >
            {curPage + 1}
          </Pagination.Item>
        )}

        <Pagination.Next
          disabled={curPage == lastPage}
          onClick={() => {
            setCurPage((p) => {
              return p + 1;
            });
          }}
        />

        <Pagination.Last
          disabled={curPage === lastPage}
          onClick={() => {
            setCurPage(lastPage);
          }}
        />
              </Pagination>
              </div>
    </div>
  );
};

export default PageNumServer;
