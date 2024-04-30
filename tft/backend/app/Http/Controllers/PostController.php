<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Session\Session as SessionSession;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Post::all()->load("tags");
    }

    public function indexWithPaginate($page = 1)
    {
        $posts = Post::all()->reverse()->load("tags")->forPage($page, 5);

        return ["posts" => $posts, "total" => Post::all()->count()];
    }

    public function getEnrollPosts()
    {
        $posts = Post::all();

        $posts = $posts->filter(function(Post $post) {
            $tags =  $post->tags;
            return $tags->contains(1);
        })->reverse()->load("tags");

        return $posts;
    }

    public function getEnrollPostsWithPaginate($page = 1)
    {
        $posts = Post::all();

        $posts = $posts->filter(function(Post $post) {
            $tags =  $post->tags;
            return $tags->contains(1);
        });

        $count = $posts->count();

        $posts = $posts->reverse()->load("tags")->forPage($page, 5);

        return ["posts" => $posts, "total" => $count];
    }

    public function getStudentPosts()
    {
        $posts = Post::all();

        $posts = $posts->filter(function(Post $post) {
            $tags =  $post->tags;
            return $tags->contains(2);
        })->reverse()->load("tags");

        return $posts;
    }

    public function getStudentPostsWithPaginate($page = 1)
    {
        $posts = Post::all();

        $posts = $posts->filter(function(Post $post) {
            $tags =  $post->tags;
            return $tags->contains(2);
        });

        $count = $posts->count();

        $posts = $posts->reverse()->load("tags")->forPage($page, 5);

        return ["posts" => $posts, "total" => $count];
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|max:255',
                'content' => 'required',
            ],
            [
                'title.required' => 'Chưa nhập tiêu đề bài viết',
                'title.max' => 'Tiêu đề bài viết quá dài',
                'content.required' => 'Chưa nhập nội dung bài viết',
            ]
        );

        if ($validator->fails()) {
            return json_encode([
                'status' => 422,
                'message' => $validator->errors()->getMessages(),
            ]);
        }

        $post = new Post();
        $post->title = $request->title;
        $post->content = $request->content;
        $post->author = $request->author;

        $post->save();
        $post->tags()->attach($request->tags);

        return json_encode([
            'status' => 200,
            'message' => "Thêm bài viết thành công",
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return $post->load("tags");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|max:255',
                'content' => 'required',
            ],
            [
                'title.required' => 'Chưa nhập tiêu đề bài viết',
                'title.max' => 'Tiêu đề bài viết quá dài',
                'content.required' => 'Chưa nhập nội dung bài viết',
            ]
        );

        if ($validator->fails()) {
            return json_encode([
                'status' => 422,
                'message' => $validator->errors()->getMessages(),
            ]);
        }

        $post->title = $request->title;
        $post->content = $request->content;

        $post->save();
        $post->tags()->sync($request->tags);

        return json_encode([
            'status' => 200,
            'message' => "Cập nhật thành công",
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        if ($post->delete()) {
            return json_encode([
                'status' => 200,
                'message' => "Delete successfully"
            ]);
        }

        return json_encode([
            'status' => 422,
            'message' => "Delete unsuccessfully"
        ]);
    }
}
