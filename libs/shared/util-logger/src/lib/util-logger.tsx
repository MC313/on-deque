const isObject = (data: any) => {
  if (data && typeof data === "object") {
    return true;
  } else {
    return false;
  }
};

export const logger = (data: any, text: string = "[LOGGER]") => {
  const _data = isObject(data) ? JSON.stringify(data, null, 2) : data;
  console.log(`${text} : ${_data}`);
  return data;
};
