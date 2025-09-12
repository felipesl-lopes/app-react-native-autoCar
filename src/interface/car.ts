export interface ICarList {
  uidUser: string;
  id: string;
  name: string;
  model?: string;
  year: string;
  price: string;
  uf?: string;
  city: string;
  km: string;
  images: string;
}

export interface IFormNewCar {
  inputFile?: string;
  name: string;
  model: string;
  year: string;
  km: string;
  price: string;
  city: string;
  uf: string;
  whatsapp: string;
  description: string;
  fuel: string;
  transmission: string;
  engine: string;
  documentationStatus: string;
  maintenanceHistory: string;
  generalCondition: string;
  created: string;
  owner: string;
  uidUser: string;
  images: CarImages[];
}

export interface CarImages {
  name: string;
  uid: string;
  url: string;
}

export interface ISliders_Home {
  route: string;
  url: string;
  color: string;
}