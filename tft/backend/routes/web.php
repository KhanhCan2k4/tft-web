<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return "hello";
});

Route::prefix("api")->group(function () {
    Route::resource("posts", PostController::class);
    Route::resource("tags", TagController::class);
    Route::resource("users", UserController::class);
    Route::resource("comments", CommentController::class);
});

