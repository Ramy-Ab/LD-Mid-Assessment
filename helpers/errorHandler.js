export function errorEvent(error) {
  let event;
  if (error.response) {
    switch (error.response.status) {
      case 401:
        event = "unauthorized";
        break;
      case 400:
        event = error.response.data;
        break;
      case 409:
        event = "object_already_exists";
        break;
      case 500:
        event = "internal_server_error";
        break;
      default:
        event = "unkown_error";
    }
    return event;
  } else if (error.request) {
    event = "request was made but no response was received";
    return event;
  } else {
    event = error.message;
    return event;
  }
}
