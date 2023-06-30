import { NextResponse } from "next/server";

//Get a random pokemon from the API with its relevant information
export async function GET(req: any, res: any) {
  //Fetch a random pokemon from the api
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1000)
  );

  //Convert the data to a JSON object
  const data = await response.json();

  return new NextResponse(data, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
