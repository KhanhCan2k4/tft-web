<?php

namespace App\Http\Controllers;

use App\Models\Forum;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ForumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Forum::all()->load("users")->load("posts");
        return Forum::with('users', 'posts.comments')->get();
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Forum $forum)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Forum $forum)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Forum $forum)
    {
        //
    }
}
