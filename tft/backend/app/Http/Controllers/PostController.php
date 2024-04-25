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
        return Post::all();
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
                'views' => 'integer|min:0',
                'likes' => 'integer|min:0',
                'author' => 'required|integer|min:1',
            ],
            [
                'title.required' => 'Title is required',
                'title.max' => 'The title is too long',
                'content.required' => 'The content is required',
                'author.integer' => 'The author is not is valid user id',
            ]
        );

        if ($validator->fails()) {
            return json_encode([
                'status' => 422,
                'message' => $validator->errors()->toJson(),
            ]);
        }

        $post = new Post();
        $post->title = $request->title;
        $post->content = $request->content;
        $post->author = $request->author;

        $post->save();

        return json_encode([
            'status' => 200,
            'message' => "Update successfully",
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return $post;
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
                'title.required' => 'Title is required',
                'title.max' => 'The title is too long',
                'content.required' => 'The content is required',
            ]
        );

        if ($validator->fails()) {
            return json_encode([
                'status' => 422,
                'message' => $validator->errors()->toJson(),
            ]);
        }

        $post->title = $request->title;
        $post->content = $request->content;

        $post->save();

        return json_encode([
            'status' => 200,
            'message' => "Update successfully",
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
