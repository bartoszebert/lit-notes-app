export const formatDate = (date) => {
  const options = { month: "short", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
