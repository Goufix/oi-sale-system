export function beautifyName(string) {
  return string.split(' ').map(([firstLetter, ...rest]) => {
    const first = firstLetter.toUpperCase();
    const last = rest.join('').toLowerCase();
    return first + last;
  });
}
