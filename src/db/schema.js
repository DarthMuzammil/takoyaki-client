/* LocalDB Schema - blkbit inc. */
import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const mySchema = appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: 'favorites',
      columns: [
        { name: "url", type: "string" },
        { name: "name", type: "string"}
      ]
    })
  ]
});