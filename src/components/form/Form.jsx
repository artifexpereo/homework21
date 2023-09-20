import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import "./Form.css";
import Button from "@mui/material/Button";

export const Form = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const chooseAuthor = (e) => {
    dispatch({
      type: "CHOOSEAUTHOR",
      payload: e.target.value,
    });
  };

  const addPhotoLink = (e) => {
    dispatch({
      type: "ADDPHOTOLINK",
      payload: e.target.value,
    });
  };

  const addText = (e) => {
    dispatch({
      type: "ADDSOMETEXT",
      payload: e.target.value,
    });
  };
  const createPost = () => {
    dispatch({
      type: "CREATEPOST",
    });
  };
  const resetPost = () => {
    dispatch({
      type: "RESETPOST",
    });
  };

  return (
    <div className="form">
      <div className="form__author">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Author</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            onChange={chooseAuthor}
            label="author"
            value={state.newPost.author}
          >
            {state.authors.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="form__text">
        <TextField
          onChange={addText}
          id="outlined-multiline-flexible"
          label="Publication text"
          multiline
          maxRows={4}
          value={state.newPost.text}
        />
      </div>
      <div className="form__img">
        <TextField
          onChange={addPhotoLink}
          id="standard-basic"
          label="Photo link"
          variant="standard"
          value={state.newPost.icon}
        />
      </div>
      <Button
        onClick={() => {
          createPost();
          resetPost();
        }}
        variant="contained"
      >
        Create new post
      </Button>
    </div>
  );
};
