import { NextResponse } from "next/server";
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

export async function GET() {
  try {
    const data = readData();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newTask = await request.json();
    const data = readData();

    console.log("newTask", newTask);

    const newData = [...data, newTask];

    console.log("newData", newData);

    writeData(newData);
    return NextResponse.json(newTask, { status: 201 });
  } catch (error: any) {
    console.error("Failed to save task" + " " + error);
    return NextResponse.json({ error: "Failed to save task" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    writeData(body);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Failed to update task" + " " + error);
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get('taskId');

    if (!taskId) {
        return NextResponse.json({ error: "Task ID required" }, { status: 400 });
    }

    const data = readData();
    const newData = data.filter((task: any) => task.id !== taskId);
    writeData(newData);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}
