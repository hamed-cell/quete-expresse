const supertest = require("supertest");
const { app, server } = require("../index");  // Assurez-vous que vous utilisez bien index.js comme point d'entrée

const request = supertest(app);

describe("GET /api/movies", () => {
  afterAll(() => {
    server.close();  // Fermez le serveur après l'exécution de tous les tests
  });

  it("should return all movies", async () => {
    const response = await request.get("/api/movies");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });
});
it("should return 404 for invalid ID", async () => {
    const response = await request.get("/api/movies/0");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });


  

// ... (autres tests)
