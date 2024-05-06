export class RAMResponse {
  total: number = 0;
  size: number = 0;
  pages: number = 0;
  page: number = 0;
  items: Array<RAMPersonaje>;
  constructor(results: Array<RAMPersonaje>) {
    this.items = results;
  }
}
export class RAMPersonaje {
  id: number = 0;
  name: string = '';
  gender: string = '';
  status: string = '';
  species: string = '';
  createdAt: string = '';
  image: string = '';
}
