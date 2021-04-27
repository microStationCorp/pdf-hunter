import { connect } from "react-redux";
function ResultComponent(props) {
  console.log(props);
  return (
    <div>
      result area
      <ol>
        {props.queryResult.map((r) => (
          <li key={r._id}>{r.title}</li>
        ))}
      </ol>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return state;
};
export default connect(mapStatetoProps)(ResultComponent);
