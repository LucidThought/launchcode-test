class QuoteDao {
  constructor() {
    this.db = require("../utils/Db");
  }

  async getQuoteList() {
    let res = await this.db.query(
      `select
        q.id,
        q.name,
        q.destination_location,
        q.price,
        q.created_at
      from quotes q`
    );

    return res.rows;
  }

  async getQuote(quoteId) {
    let res = await this.db.query(
      `select
        q.id,
        q.name,
        q.departure_location,
        q.destination_location,
        q.depart_date,
        q.return_date,
        q.number_travellers,
        q.transportation,
        q.contact,
        q.name,
        q.price,
        q.created_at
      from quotes q
      where q.id = $1`,
      [quoteId]
    );

    return res.rows;
  }
}

module.exports = new QuoteDao();
