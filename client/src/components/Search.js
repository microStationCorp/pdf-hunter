import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { connect } from "react-redux";
import { getQueryResult } from "../redux/action/actions";

const useStyles = makeStyles(() => ({
  container: {
    margin: "10px 10px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    padding: "5px",
  },
}));

function SearchComponent(props) {
  const [searchData, setSearchData] = useState("");
  const [error, setError] = useState({
    bool: false,
    label: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const regex = /([^a-zA-z0-9]|[_])/gi;

    let primaryKeyw = searchData.split(regex);

    let ValidKey = primaryKeyw.filter((v) => {
      const patt = /^[a-zA-Z]*$/gi;
      return patt.test(v) && v.length > 1;
    });

    if (ValidKey.length > 0) {
      props.getQueryResult({ keyword: ValidKey });
      setError({
        bool: false,
        label: "",
      });
    } else {
      setError({
        bool: true,
        label: "enter a valid keyWord",
      });
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form onSubmit={onSubmitHandler}>
        <div>
          <TextField
            required
            error={error.bool}
            placeholder="search"
            label={error.label}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={classes.button}>
          <Button type="submit" variant="contained">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {};
};

export default connect(mapStatetoProps, { getQueryResult })(SearchComponent);
