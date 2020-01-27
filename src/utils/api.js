const proxy = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = `${proxy}https://backend.daviva.lt/API/InformacijaTestui`;

const api = {
  getCar: () => fetch(apiUrl)
};

export default api;
