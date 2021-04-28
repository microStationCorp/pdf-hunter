import { connect } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Chip,
} from "@material-ui/core";
import React from "react";

function ResultComponent({ queryKeyword, queryResult }) {
  return (
    <div>
      {queryKeyword != null && queryKeyword.length !== 0 ? (
        <Container>
          <span>Keywords : </span>
          {queryKeyword.map((k) => (
            <React.Fragment key={k}>
              <Chip
                label={k}
                style={{ fontWeight: "bold" }}
                variant="outlined"
                color="secondary"
                size="small"
              />
              <span> </span>
            </React.Fragment>
          ))}
        </Container>
      ) : null}

      <Container maxWidth="sm">
        <List component="nav">
          {queryResult.map((r) => (
            <SingleResultComponent key={r._id} title={r.title} />
          ))}
        </List>
      </Container>
    </div>
  );
}

function SingleResultComponent({ title }) {
  return (
    <ListItemLink href="#">
      <ListItemText style={{ textAlign: "center" }} primary={title} />
    </ListItemLink>
  );
}

function ListItemLink(props) {
  return (
    <ListItem
      style={{
        border: "1px solid #037E65",
        margin: "5px 0px",
        borderRadius: "5px",
      }}
      button
      component="a"
      {...props}
    />
  );
}

const mapStatetoProps = (state) => {
  return state;
};
export default connect(mapStatetoProps)(ResultComponent);
