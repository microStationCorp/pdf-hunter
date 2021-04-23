import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

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

function SearchComponent() {
  const [searchData, setSearchData] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(searchData);
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form onSubmit={onSubmitHandler}>
        <div>
          <TextField
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

export default SearchComponent;
