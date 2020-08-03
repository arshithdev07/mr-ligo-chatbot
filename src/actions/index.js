export const SEARCH_ITEM_ACTION = 'SEARCH_ITEM_ACTION';
export const SAY_ACTION = 'SAY_ACTION';

export function searchItem(payload) {
  const action = {
    type:SEARCH_ITEM_ACTION,
    payload
  }
}

export function sayAction(payload) {
  const action = {
    type:SAY_ACTION,
    payload
  }
}
