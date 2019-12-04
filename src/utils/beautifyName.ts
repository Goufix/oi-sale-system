export function beautifyName(rawName: string): string {
  return rawName.split(' ').map(([firstLetter, ...rest]) => {
    const first = firstLetter.toUpperCase();
    const last = rest.join('').toLowerCase();
    return first + last;
  }).join('\n');
}
