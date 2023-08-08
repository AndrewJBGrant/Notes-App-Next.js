migrate((db) => {
  const collection = new Collection({
    "id": "dzslfb1cuf8cglx",
    "created": "2023-08-08 16:30:58.189Z",
    "updated": "2023-08-08 16:30:58.189Z",
    "name": "Tasks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4malrmvv",
        "name": "Task",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dzslfb1cuf8cglx");

  return dao.deleteCollection(collection);
})
