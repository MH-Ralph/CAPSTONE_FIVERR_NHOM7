import axios from "axios";

const http = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api",
  timeout: 30000,
  headers: {
    tokenCyberSoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OCIsIkhldEhhblN0cmluZyI6IjE1LzAxLzIwMjYiLCJIZXRIYW5UaW1lIjoiMTczNjg5OTIwMDAwMCIsIm5iZiI6MTcwOTEzOTYwMCwiZXhwIjoxNzM3MDQ2ODAwfQ.f9uBgAA-hffL7f0Wt8W3emO-xIaNkQMvHn4aMel1LYc",
  },
});

export { http };
