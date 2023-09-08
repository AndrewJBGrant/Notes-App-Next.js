import { createClient, Entity, Schema, Repository } from "redis-om";

// const client = new Client()???

const client = createClient();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Note extends Entity {}
let schema = new Schema(Note, {
  title: { type: "string" },
  content: { type: "string" },
  date: { type: "string" },
});


export async function createNote(data) {
await connect();

const repository = new Repository(schema, client);

const note = repository.createEntity(data);

const id = await repository.save(note);
}
