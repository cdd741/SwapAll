import priceList from '../assets/data/priceList.json'
import userCapitals from '../assets/data/userCapitals.json'

// mock API
export const getUserCapitals = new Promise((res, rej) => {
    res(userCapitals);
  });
  
export const getPriceList = new Promise((res, rej) => {
    res(priceList);
  });