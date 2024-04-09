import express from "express";
import { router as productApi } from "./routes/product.routes";
import { router as authApi } from "./routes/auth.routes";
import { createUser } from "./services/auth.service";
export const app = express();
//configure the middleware for body requests
app.use(express.json());
app.get("/", (req, res) => {
	res.json({ message: "Server is online" });
});

createUser({
	username: "Mimmo",
	login: { email: "mimmomodem@example.com", password: "salvesalvino123" },
	role: "user",
});
app.use("/api/auth", authApi);
app.use("/api/products", productApi);
