<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate(
            [
                'name' => 'required',
                'email' => 'required'
            ],
            [
                'name.required' => 'Name is required',
                'email.required' => 'Email is required'
                ]
            );
            
        $user = new User($validated);

        $user->save();

        return json_encode([
            'status'=> 200,
            'message'=> "Store successfully"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        
        $validated = $request->validate(
            [
                'name' => 'required',
                'email' => 'required'
            ],
            [
                'name.required' => 'Name is required',
                'email.required' => 'Email is required'
            ]
        );

        $user->name = $validated['name'];

        $user->save();

        return json_encode([
            'status'=> 200,
            'message'=> "Update successfully"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
        $user->delete();
        return json_encode([
            'status'=> 200,
            'message'=> "Delete successfully"
        ]);
    }
}
