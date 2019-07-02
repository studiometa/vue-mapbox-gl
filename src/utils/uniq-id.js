/**
 * Get a prefixed or not uniq id
 * @param  {String} prefix The prefix to add to the generated id
 * @return {String}        A (prefixed) uniq id
 */
export default function uniqId(prefix = '') {
  const uniq = new Date().getTime() + Math.floor(Math.random() * 10000 + 1);
  return prefix ? prefix + uniq.toString(16) : uniq.toString(16);
}
