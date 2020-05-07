export function randomInt(min: number, max: number): number {
  return min + Math.floor((max - min) * Math.random());
}
export function getRandomColor(): string {
  let letters: string = '0123456789ABCDEF';
  let color: string = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
