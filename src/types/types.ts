import { Request } from "express";

export interface TypedRequestBody<T> extends Request {
  body: T;
}

export type ContactProps = {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  country: string;
  schoolPage: string;
  students: number;
  role: string;
  media: string;
  message: string;
};

export type ClassCreateProps = {
  title: string;
  slug: string;
};
export type DepartmentCreateProps = {
  name: string;
  slug: string;
};

export type StreamCreateProps = {
  title: string;
  slug: string;
  classId: string;
};

export type ParentCreateProps = {
  title: string;
  firstName: string;
  lastName: string;
  relationShip: string;
  email: string;
  NIN: string;
  gender: string;
  dob: string;
  phone: string;
  nationality: string;
  whatsapNo: string;
  imageUrl: string;
  contactMethod: string;
  occupation: string;
  address: string;
  password: string;
};

export type StudentCreateProps = {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  parentId: string;
  classId: string;
  streamId: string;
  parentName?: string;
  classTitle?: string;
  streamTitle?: string;
  password: string;
  imageUrl: string;
  phone: string;
  nationality: string;
  state: string;
  BCN: string;
  religion: string;
  gender: string;
  dob: string;
  rollNo: string;
  regNo: string;
  admissionDate: string;
  address: string;
};
