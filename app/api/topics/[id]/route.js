import connectToMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

connectToMongoDb();

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await req.json();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json(
      { message: "Topic updated successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    console.log("Received id:", id);
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return NextResponse.json({ error: "Invalid ObjectId" }, { status: 400 });
    // }
    const topic = await Topic.findById(id);
    if (!topic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }
    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
