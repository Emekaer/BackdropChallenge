export interface SVGComponent {
  fill: string;
  outline?: string;
  height: string | number;
  width: string | number;
}

export interface Cat {
  breeds: {}[];
  categories: {}[];
  id: string;
  url: string;
  height: number;
  width: number;
}
