export type Tag = {
  id: number;
  name: string;
};

export interface Contact {
  id: number;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  tags?: Tag[];
}
