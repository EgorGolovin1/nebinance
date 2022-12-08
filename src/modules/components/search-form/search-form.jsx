import React from "react";
import PropTypes from "prop-types";

import classes from "./search-form.module.sass";

const SearchForm = ({ value, setValue }) => {
  return (
    <div className={classes.form}>
      <form className={classes.search_form}>
        <input
          type="search"
          name="search"
          className={classes.search_panel}
          placeholder="Search coin..."
          onChange={(e) => setValue(e.target.value)}
          defaultValue={value}
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default SearchForm;
