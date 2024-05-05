<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::resource("posts", PostController::class);
Route::resource("tags", TagController::class);
Route::resource("users", UserController::class);
Route::resource("contacts", ContactController::class);
Route::resource("comments", CommentController::class);
Route::resource("send-email", ContactController::class);
