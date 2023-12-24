import { setupServer } from "msw/node";
import { rest } from "msw";

export function createServer(configs) {
  const handlers = configs.map((config) =>
    rest[config.method || "get"](config.path, (req, res, ctx) =>
      res(ctx.json(config.res(req, res, ctx)))
    )
  );

  const server = setupServer(...handlers);

  beforeEach(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
}
