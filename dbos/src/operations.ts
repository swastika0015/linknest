import { TransactionContext, Transaction, GetApi, ArgSource, ArgSources, PostApi, KoaMiddleware } from '@dbos-inc/dbos-sdk';

import { Knex } from 'knex';
// The schema of the database table used in this example.


export interface dbos_user_new {
  name: string;
  custom_link: string;
  twitter_link: string;
  linkedln_link: string;
  github_link: string;
  medium_link: string;
}


export class Hello {
  @PostApi('/dbos/:user')
  @Transaction()
  static async saveLinks(ctxt: TransactionContext<Knex>, @ArgSource(ArgSources.BODY) body: dbos_user_new) {
    const { name, custom_link, twitter_link, linkedln_link, github_link, medium_link} = body;
    // Create table if not exists
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS dbos_user_data (
        name TEXT,
        custom_link TEXT,
        twitter_link TEXT,
        linkedln_link TEXT,
        github_link TEXT,
        medium_link TEXT
      )
    `;
    await ctxt.client.raw(createTableQuery);

    // Insert data
    const insertQuery = `
      INSERT INTO dbos_user_data (name, custom_link, twitter_link, linkedln_link, github_link, medium_link)
      VALUES (?, ?, ?, ?, ?, ?)
      RETURNING *
    `;
    const { rows } = await ctxt.client.raw(insertQuery, [name, custom_link, twitter_link, linkedln_link, github_link, medium_link]);

    // Return inserted data as JSON
    return rows[0];
  }
}