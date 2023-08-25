import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

const PaginationControlExample = () => {
  const [page, setPage] = useState(1)

  return <PaginationControl
    page={page}
    between={4}
    total={1000} // total records
    limit={8}  // record per page
    changePage={(page) => {
      setPage(page)
    }}
    ellipsis={1}
  />
}

export default PaginationControlExample