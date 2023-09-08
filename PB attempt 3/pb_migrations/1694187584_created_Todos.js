/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v6sb5aqd2i5oe15",
    "created": "2023-09-08 15:39:44.635Z",
    "updated": "2023-09-08 15:39:44.635Z",
    "name": "Todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2lke1jbm",
        "name": "TodoText",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v6sb5aqd2i5oe15");

  return dao.deleteCollection(collection);
})
