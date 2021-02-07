import axios from "axios";

const fetchComponent = async (postcode) => {
  const { data } = await axios(
    `https://api.getAddress.io/find/${postcode}?api-key=YOUR_KEY`
  );

  return data;
};

export default fetchComponent;
