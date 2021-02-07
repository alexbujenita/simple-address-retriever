import { connect, useDispatch } from "react-redux";
import styles from "./PersonalAddress.module.css";
import { REMOVE_PERSONAL_ADDRESS } from "../../actions/personalAddress";

function PersonalAddress(props) {
  const dispatch = useDispatch();
  if (!props.address) return null;
  console.log(props);
  const months = props?.months ?? 0;
  const years = props?.years ?? 0;

  const handleClick = () => {
    dispatch({ type: REMOVE_PERSONAL_ADDRESS });
  };

  return (
    <div className={styles.personalAddress}>
     <div className={styles.personalAddressDetails}>
      <p>{props.address}</p>
        <p>
          {`Time at address: ${years} ${
            years === 1 ? "year" : "years"
          }, ${months} ${months === 1 ? "month" : "months"}`}
        </p>
     </div>
     <div className={styles.personalAddressDelete}>
        <img
          alt="delete personal address"
          src="/delete.png"
          onClick={handleClick}
          />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => state.personalAddress;

export default connect(mapStateToProps)(PersonalAddress);
