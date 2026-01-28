export function toTitleCase(word: string): string {
  return word.charAt(0).toUpperCase().concat(word.substring(1));
}

export function randomArr<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
