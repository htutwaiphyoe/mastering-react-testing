import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/", () => {
    return HttpResponse.json({ data: "ok" });
  }),
];
