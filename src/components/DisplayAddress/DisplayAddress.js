import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import styles from "./displayAddress.module.css";
import { ADD_PERSONAL_ADDRESS } from "../../actions/personalAddress";

function DisplayAddress(props) {
  const [address, setAddress] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!props.address) return null;
    const addressValues = props.address.split(",");

    setAddress({
      firstLine: addressValues[0],
      secondLine: addressValues.length > 2 ? addressValues[1] : "",
      city: addressValues[addressValues.length - 1],
      postcode: props.postcode,
    });
  }, [props.address]);

  if (!props.address) return null;

  const handleChange = ({ target: { name, value } }) => {
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    const { firstLine, secondLine, city, postcode } = address;
    e.preventDefault();
    if (!firstLine.trim() || !city.trim() || !postcode.trim()) {
      alert("Please fill in the required fields");
      return;
    }
    dispatch({
      type: ADD_PERSONAL_ADDRESS,
      entry: {
        address: firstLine + secondLine + city + " " + postcode,
        years: props.years,
        months: props.months,
      },
    });
  };

  return (
    <div className={styles.newAddress}>
      <img className={styles.doubleChevron} src="/double-chevron.png" alt="double-chevron"/>
      <form className={styles.newAddress} onSubmit={handleOnSubmit}>
        <label>Address line 1*</label>
        <input
          className={styles.addressLine}
          required
          name="firstLine"
          type="text"
          value={address.firstLine}
          onChange={handleChange}
        />
        <label>Address line 2</label>
        <input
        className={styles.addressLine}
          name="secondLine"
          type="text"
          value={address.secondLine}
          onChange={handleChange}
        />
        <label>City*</label>
        <input
          className={styles.addressLine}
          required
          name="city"
          type="text"
          value={address.city}
          onChange={handleChange}
        />
        <label>Postcode*</label>
        <input
          className={styles.addressLine}
          required
          name="postcode"
          type="text"
          value={address.postcode}
          onChange={handleChange}
        />
        <input className={styles.newAddressSubmit} type="submit" value="Add address" />
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return state.selections;
}

export default connect(mapStateToProps)(DisplayAddress);
