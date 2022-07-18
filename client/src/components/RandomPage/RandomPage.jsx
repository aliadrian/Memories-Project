import React, { useState } from "react";
import { Container, Grow, Paper } from "@material-ui/core";

import { useLocation } from "react-router-dom";

import Pagination from "../Pagination";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const RandomPage = () => {
  const [currentId, setCurrentId] = useState(0);

  const query = useQuery();
  const page = query.get("page") || 1;

  return (
    <Grow in>
      <Container maxWidth="xl">
        <ul>
          <ul item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </ul>
          <ul item xs={12} sm={6} md={3}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination page={page} />
            </Paper>
          </ul>
        </ul>
      </Container>
    </Grow>
  );
};

export default RandomPage;
