<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

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
            'status' => 200,
            'message' => "Store successfully"
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
            'status' => 200,
            'message' => "Update successfully"
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
            'status' => 200,
            'message' => "Delete successfully"
        ]);
    }

    public function login(Request $request)
    {

        if ($request->has('role')) {
            if ($request->role === 'admin') {
                if ($request->has("email") && $request->has("password")) {

                    $users = User::where('email', $request->input("email"))->get();

                    if ($users->count() >= 1) {
                        $user = $users->first();
                        if ($user) {
                            if ($user->password == $request->input("password") && $user->role_id == 1) {
                                return json_encode([
                                    'status' => 200,
                                    'message' => "Login successfully",
                                    'remember_token' => $user->remember_token,
                                ]);
                            }
                        }
                    }

                }

            } else if ($request->role === 'student') {
                if ($request->has("email") && $request->has("password")) {

                    $users = User::where('email', $request->input("email"))->get();

                    if ($users->count() >= 1) {
                        $user = $users->first();
                        if ($user) {
                            if ($user->password == $request->input("password") && $user->role_id == 0) {
                                return json_encode([
                                    'status' => 200,
                                    'message' => "Login successfully",
                                    'remember_token' => $user->remember_token,
                                    'infor_user' => $user->getUser()
                                ]);
                            }
                        }
                    }

                }
            } else if ($request->role === 'teacher') {

            }
        }

        // truong hop login sai
        return json_encode([
            'status' => 422,
            'message' => "Login unSuccessfully"
        ]);

    }
}