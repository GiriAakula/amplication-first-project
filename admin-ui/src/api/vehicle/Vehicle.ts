import { User } from "../user/User";

export type Vehicle = {
  createdAt: Date;
  id: string;
  name: string | null;
  owner?: User | null;
  regDate: Date | null;
  regNumber: string | null;
  updatedAt: Date;
  vehicleType: string | null;
};
