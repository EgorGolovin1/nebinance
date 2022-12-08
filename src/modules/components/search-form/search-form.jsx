import React from "react";
import PropTypes from "prop-types";

import s from "./search-form.module.sass";

const SearchForm = ({ value, setValue }) => {
  return (
    <div className={s.form}>
      <form className={s.search_form}>
        <input
          type="search"
          name="search"
          className={s.search_panel}
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
