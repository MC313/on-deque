export const capitalize = (text: string) => {
  if (!text) return "";
  const capitalFirstLetter = text[0].toLocaleUpperCase();
  const textArray = text.split("");
  const formattedText = [capitalFirstLetter, ...textArray.slice(1)].join("");
  return formattedText;
};
