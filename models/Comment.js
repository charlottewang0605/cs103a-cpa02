'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var commentSchema = Schema( {
    userId: ObjectId,
    rating: Number,
    comment:String,
    completed: Boolean,
    createdAt: Date,
  } );

module.exports = mongoose.model( 'Comment', commentSchema );