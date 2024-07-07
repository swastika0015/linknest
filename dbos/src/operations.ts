import { TransactionContext, Transaction, GetApi, ArgSource, ArgSources, PostApi } from '@dbos-inc/dbos-sdk';
import { Knex } from 'knex';

export interface user_info {
  name: string;
  bio?: string;
  custom_title?: string;
  custom_link?: string;
  twitter_link: string;
  linkedln_link?: string;
  github_link?: string;
  medium_link?: string;
}

export class Hello {
  @PostApi('/dbos/save')
  @Transaction()
  static async saveLinks(ctxt: TransactionContext<Knex>, @ArgSource(ArgSources.BODY) body: user_info) {
    const {
      name = '',
      bio = '',
      custom_title = '',
      custom_link = '',
      twitter_link = '',
      linkedln_link = '',
      github_link = '',
      medium_link = ''
    } = body;

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS user_info (
        name TEXT,
        bio TEXT,
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
      INSERT INTO user_info (name, bio, custom_title, custom_link, twitter_link, linkedln_link, github_link, medium_link)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await ctxt.client.raw(insertQuery, [name, bio, custom_title, custom_link, twitter_link, linkedln_link, github_link, medium_link]);
  }

  @GetApi('/dbos/:user')
  @Transaction()
  static async getLinks(ctxt: TransactionContext<Knex>, @ArgSource(ArgSources.URL) user: string) {
    const getQuery = `
      SELECT * FROM user_info WHERE name = ?
    `;
    const { rows } = await ctxt.client.raw(getQuery, [user]);
    console.log(rows);

    // Return retrieved data as JSON
    return rows[0];
  }
}
