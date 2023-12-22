import connectToMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

connectToMongoDb();

export async function POST(request) {
    try {
        const { title, description } = await request.json();
        await Topic.create({ title, description });
        return NextResponse.json({ message: "Topic Created" }, { status: 201 });
    } catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
 
}

export async function GET(){
    try {
        const topics = await Topic.find()
        return NextResponse.json({topics})
        
    } catch (error) {
        return NextResponse.json({error: error.message} , {status: 500});
    }

}

export async function DELETE(req){
    try {
        const id = req.nextUrl.searchParams.get('id');
        await Topic.findByIdAndDelete(id)
        return NextResponse.json({message: 'topic deleted successfully'}, {status: 201})
    } catch (error) {
        return NextResponse.json({error: error.message} , {status: 500});
    }
   

}

