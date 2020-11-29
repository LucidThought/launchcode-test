class QuoteController {
  constructor() {
    this.dao = require("./QuoteDao");
  }

  async getQuotes() {
    const quoteList = await this.dao.getQuoteList();

    return quoteList;
  }

  async getQuote(quoteId) {
    const quote = await this.dao.getQuote(quoteId);

    if (quote.length > 0) return quote;
    return {};
  }
}

module.exports = new QuoteController();
