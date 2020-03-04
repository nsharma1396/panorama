function itemsHasErrored() {
  return {
    type: "ERROR"
  };
}

function itemsIsLoading() {
  return {
    type: "LOADING"
  };
}

function itemsFetchDataSuccess(items) {
  return {
    type: "SUCCESS",
    items: items
  };
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(itemsIsLoading());

    fetch(url)
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(error => {
        console.error(error);
        dispatch(itemsHasErrored());
      });
  };
}

export function changeCurrentState(index) {
  return {
    type: "CHANGE_CURRENT",
    index
  };
}
