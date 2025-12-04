import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "tasks.json");

function readData() {
  try {
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (err: any) {
    console.error("Error reading file:", err.message);
    throw err;
  }
}

function writeData(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("req.method", req.method);
  if (req.method === "GET") {
    try {
      const data = readData();
      return res.status(200).json(data);
    } catch (error: any) {
      return res.status(500).json({ error: "Failed to read data" });
    }
  }

  if (req.method === "POST") {
    try {
      const newTask = req.body;
      const data = readData();

      console.log("newTask", newTask);

      const newData = [...data, newTask];

      console.log("newData", newData);

      writeData(newData);
      return res.status(201).json(newTask);
    } catch (error: any) {
      console.error("Failed to save task" + " " + error);
      return res.status(500).json({ error: "Failed to save task" });
    }
  }

  if (req.method === "PUT") {
    try {
      writeData(req.body);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Failed to update task" + " " + error);
      return res.status(500).json({ error: "Failed to update task" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const { taskId } = req.query;
      const data = readData();
      const newData = data.filter((task: any) => task.id !== taskId);
      writeData(newData);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(500).json({ error: "Failed to delete task" });
    }
  }

  return res.status(405).end();
}
