export interface GetCharacterResults {
  infor: Info;
  results: Character[];
}
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface Character {
  id: number;
  name: string;
  image: string;
}
