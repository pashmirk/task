import fetch from "node-fetch";

export default async(url) => {
    var data = await fetch(url);
    return await data.json();
}