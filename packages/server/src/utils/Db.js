class Db {
  constructor() {
    this.pg = require("pg");
    this.client = null;
    this.executing = 0;
  }

  async init() {
    if (!this.initPromise) {
      const connectionString =
        "postgresql://postgres:1234@localhost:5432/launchcode-test";
      this.client = new this.pg.Client({
        connectionString,
      });
      await this.client.connect();
    }
  }

  async query(query, params) {
    this.executing++;
    await this.init();

    try {
      return await this.client.query(query, params);
    } catch (e) {
      console.error("Unable to execute query: " + query + e);
      throw e;
    } finally {
      this.executing--;
      this.end();
    }
  }

  async end() {
    if (this.client && this.executing === 0) {
      await this.client.end();
    }
  }
}

module.exports = new Db();
