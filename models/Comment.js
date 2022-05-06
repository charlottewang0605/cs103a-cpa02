'use strict';
const mongoose = require( 'mongoose' );
const Course = require('./Course');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var commentSchema = Schema( {
    //userId: ObjectId,
    courseId: ObjectId,
    rating: Number,
    comment:String,
    //completed: Boolean,
    //createdAt: Date,
    userId: ObjectId,
    courseText:String,
    //course: String,
  } );

module.exports = mongoose.model( 'Comment', commentSchema );