import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const pageSize = 10;

const dataSlicer = (data, page) => {
  return data.slice((page - 1) * pageSize, pageSize * page);
};

const PageNumNoServer = () => {
  const [data, setData] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [dataPage, setDataPage] = useState([]);

  useEffect(() => {
    //load ALL data into "data"

    for (let index = 0; index < 100; index++) {
      data.push(<p style={{minWidth: '51%'}}> This is {index}</p>);
    }

    setData([...data]);
    setLastPage(Math.ceil(data.length / 10));
  }, []);

  useEffect(() => {
    const newData = dataSlicer(data, curPage);
    setDataPage([...newData]);
  }, [curPage]);

  return (
    <div style={{ maxWidth: "70%" }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {dataPage.map((elem) => {
          return elem;
        })}
      </div>
      <br />
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

export default PageNumNoServer;
