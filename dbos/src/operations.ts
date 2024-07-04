import { TransactionContext, Transaction, GetApi, ArgSource, ArgSources, PostApi, KoaMiddleware } from '@dbos-inc/dbos-sdk';

import { Knex } from 'knex';
// The schema of the database table used in this example.


export interface user_data {
  name: string;
  custom_title: string
  custom_link: string;
  twitter_link: string;
  linkedln_link: string;
  github_link: string;
  medium_link: string;
}


export class Hello {
  @PostApi('/dbos/save')
  @Transaction()
  static async saveLinks(ctxt: TransactionContext<Knex>, @ArgSource(ArgSources.BODY) body: user_data) {
    const { name, custom_title, custom_link, twitter_link, linkedln_link, github_link, medium_link} = body;
    // Create table if not exists
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS user_data (
        name TEXT,
        custom_title TEXT,
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
      INSERT INTO user_data (name, custom_title, custom_link, twitter_link, linkedln_link, github_link, medium_link)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    await ctxt.client.raw(insertQuery, [name, custom_title, custom_link, twitter_link, linkedln_link, github_link, medium_link]);

  }

  @GetApi('/dbos/:user')
  @Transaction()
  static async getLinks(ctxt: TransactionContext<Knex>, @ArgSource(ArgSources.URL) user: string) {
    // Insert data
    const getQuery = `
      SELECT * from user_data where name= ?
    `;
    const { rows } = await ctxt.client.raw(getQuery, [user]);
    console.log(rows)

    // Return inserted data as JSON
    return rows[0];
  }
}