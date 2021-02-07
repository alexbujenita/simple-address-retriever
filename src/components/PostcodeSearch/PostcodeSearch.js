import { connect, useDispatch } from "react-redux";
import styles from './PostcodeSearch.module.css';
import { ADD_SELECTION } from "../../actions/addSelection";
import { FETCH_ADDRESS } from "../../actions/getAddress";

function PostcodeSearch(props) {
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch({
      type: ADD_SELECTION,
      selectionType: "postcode",
      selected: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: FETCH_ADDRESS,
      address: props.postcode,
    });
  };

  return (
    <form className={styles.postcodeForm} onSubmit={handleOnSubmit}>
      <p>Postcode search</p>
      <img className={styles.postcodeSearch} alt="search" src='/magnifying-glass.png'/>
      <input
        className={styles.postcodeInput}
        placeholder="Enter postcode"
        type="text"
        value={props.postcode}
        onChange={handleOnChange}
      />
      {!!props.error && <p>{props.error}</p>}
    </form>
  );
}

function mapStateToProps(state) {
  return { ...state.addresses, ...state.selections };
}

export default connect(mapStateToProps)(PostcodeSearch);
