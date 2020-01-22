import Axios from "axios";
export const getCountries =  () => {
  let url = "https://restcountries.eu/rest/v2/all";
  fetchCountriesBegin();
  return async (dispatch)=>{
      try {
        let countryList = await Axios(url);
        dispatch(fetchCountriesSuccess(countryList.data));
      }
      catch(ex){
        dispatch(fetchCountriesFailure(ex));
      }
  }
};

const fetchCountriesBegin = () => {
  return { type: "FETCH_COUNTRY_LIST_BEGIN" };
};
const fetchCountriesSuccess = data => {
  return { type: "FETCH_COUNTRY_LIST_SUCCESS", data };
};
const fetchCountriesFailure = (ex) => {
    return { type: "FETCH_COUNTRY_LIST_FAILURE", ex };
};
