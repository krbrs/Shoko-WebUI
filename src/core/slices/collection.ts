import { createSlice } from '@reduxjs/toolkit';
import { CollectionGroupType } from '../types/api/collection';
import { forEach } from 'lodash';

type State = {
  total: number;
  groups: Array<CollectionGroupType>;
  fetchedPages: Array<number>;
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    total: 0,
    groups: [],
    fetchedPages: [],
  } as State,
  reducers: {
    setGroups(sliceState, action) {
      const { total, items, page } = action.payload;
      forEach(items, (item) => { sliceState.groups.push(item); });
      sliceState.fetchedPages.push(page);
      sliceState.total = total;
    },
  },
});

export const { setGroups } = collectionSlice.actions;

export default collectionSlice.reducer;