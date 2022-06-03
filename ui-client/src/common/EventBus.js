const eventBus = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

export default eventBus;


//  CHECK EVENT LISTENER FOR THE FUNCTION TO BE CREATED PROPERLY

//  LISTEN FOR THE EVENT SAND CALL BACK THE PROPER FUNCTION WITH EACH EVENT BUS PATTERN 


//  EVENT BUS -- PUB SUB  