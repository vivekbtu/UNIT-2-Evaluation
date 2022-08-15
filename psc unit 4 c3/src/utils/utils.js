export function getPage(value) {
  value = Number(value);
  if (!value || value < 1) {
    value = 1;
  }
  return value;
}
export const getSort = (string) =>
  ["ASC", "asc", "DESC", "desc"].includes(string) ? string : "asc";
