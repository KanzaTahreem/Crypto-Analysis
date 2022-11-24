import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchChart, FETCH_CHART, setLoading } from './chart';

const fetchChartFromApi = createAsyncThunk(FETCH_CHART, async (coinId, thunkApi) => {
  thunkApi.dispatch(setLoading(true));
  const response = await fetch(`http://localhost:3002/v4/details/chart/${coinId}`, {
    method: 'GET',
  });

  const responseJSON = await response.json();
  thunkApi.dispatch(fetchChart(responseJSON));
  thunkApi.dispatch(setLoading(false));
  return responseJSON;
});

export default fetchChartFromApi;