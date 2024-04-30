<?php

use App\Http\Controllers\BannerController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get("posts/enroll/pagination/{page}", [PostController::class, "getEnrollPostsWithPaginate"]);
Route::get("posts/enroll", [PostController::class, "getEnrollPosts"]);

Route::get("posts/student/pagination/{page}", [PostController::class, "getStudentPostsWithPaginate"]);
Route::get("posts/student", [PostController::class, "getStudentPosts"]);

Route::get("posts/pagination/{page}", [PostController::class, "indexWithPaginate"]);
Route::resource("posts", PostController::class);

Route::resource("tags", TagController::class);
Route::resource("users", UserController::class);
Route::resource("comments", CommentController::class);

Route::get("banners/{banner}/{priority}", [BannerController::class, "setPriority"]);
Route::post("banners/{banner}", [BannerController::class, "update"]);
Route::resource("banners", BannerController::class);
