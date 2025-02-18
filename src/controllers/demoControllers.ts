import { NextFunction, Request, Response } from "express";

const demo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({
      status: 200,
      success: true,
      message: "",
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

export { demo };
