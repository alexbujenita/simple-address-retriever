import { useDispatch } from "react-redux";
import { ADD_SELECTION } from "../../actions/addSelection";
import styles from './Select.module.css';

function Select({ placeholder, options, name }) {
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    dispatch({
      type: ADD_SELECTION,
      selectionType: event.target.name,
      selected: event.target.value,
    });
  };
  return (
    <select className={styles.selectGroup} name={name} defaultValue={placeholder} onChange={handleOnChange}>
      <option value={placeholder} disabled>
        {placeholder}
      </option>
      {options.map((option) => {
        return <option key={`${placeholder}-${option}`}>{option}</option>;
      })}
    </select>
  );
}

export default Select;
