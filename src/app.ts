
import express, { type Application, type Request, type Response } from "express";
import cors from "cors";
import { globalErrorHandler, notFoundHandler } from "./middleware/error.middleware";
// import { authRoutes } from "./modules/auth/auth.route";
// import { eventRoutes } from "./modules/event/event.route";
// import { bookingRoutes } from "./modules/booking/booking.route";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "EventHive API is running",
    data: null,
  });
});

// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/events", eventRoutes);
// app.use("/api/v1/bookings", bookingRoutes);

app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
