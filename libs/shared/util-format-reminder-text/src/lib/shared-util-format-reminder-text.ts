export const formatReminderText = (unit = "", value = 0) => {
  if (!unit || !value) {
    return undefined;
  } else if (unit === "calendar") {
    return `on ${value}`;
  } else {
    return `${value} ${value > 1 ? unit + "s" : unit} from now`;
  }
};
