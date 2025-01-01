import { createDepartment, getDepartments } from "@/controllers/departments";
import express from "express";
const DepartmentRouter = express.Router();

DepartmentRouter.post("/departments", createDepartment);
DepartmentRouter.get("/departments", getDepartments);
// DepartmentRouter.get("/customers/:id", getCustomerById);
// DepartmentRouter.get("/api/v2/customers", getV2Customers);

export default DepartmentRouter;
