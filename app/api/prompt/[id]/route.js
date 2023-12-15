import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET (Read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

// PATCH (Update)
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.JSON();

  try {
    await connectToDB();
  } catch (error) {}
};

// DELETE (Delete)
