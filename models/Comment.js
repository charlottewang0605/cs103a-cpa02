'use strict';
const mongoose = require( 'mongoose' );
const Course = require('./Course');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var commentSchema = Schema( {
    courseId: ObjectId,
    rating: Number,
    comment:String,
    userId: ObjectId,
    courseText:String,
  } );

module.exports = mongoose.model( 'Comment', commentSchema );