const mongoose = require('mongoose');


const ticketSchema = new mongoose.Schema(
  {
    mobile: String
  },
  {
    timestamps: true
  }
);

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = { Ticket, ticketSchema };