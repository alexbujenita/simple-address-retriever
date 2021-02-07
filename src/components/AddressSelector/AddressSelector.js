import { connect } from "react-redux";
import formatAddresses from "../../utils/formatAddresses";
import Select from "../Select/Select";

function AddressSelector(props) {
  if (!props.addresses || props.error) return null;
  const addresses = formatAddresses(props.addresses);

  return (
    <div>
      <p>Address</p>
      <Select
        name="address"
        placeholder="Select your address"
        options={addresses}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return state.addresses;
}

export default connect(mapStateToProps)(AddressSelector);
