import axios from 'axios';
import { ref } from 'vue';
import { IPk } from '../model/pk';


const fetchPks = async () => {
  const http = axios.create(); // unsecured

  return await http.get<IPk[]>("http://localhost:10000/pkarea");
}

export async function usePkData() {
  const pkData = await fetchPks();

  return {
    pkData
  };
}
