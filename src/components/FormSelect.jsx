const FormSelect = ({ labelText, name, value, options, inputHandler }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={inputHandler}
        className="form-select"
      >
        {options.map((item, idx) => {
          return (
            <option key={idx} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
