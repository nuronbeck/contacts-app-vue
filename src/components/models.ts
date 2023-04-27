export type Tag = {
  id: number;
  label: string;
};

export interface IContact {
  id: number;
  firstName?: string;
  lastName?: string;
  phoneNumber: string;
  email?: string;
  tags?: Tag[];
}
