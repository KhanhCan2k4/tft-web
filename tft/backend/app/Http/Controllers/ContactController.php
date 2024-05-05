<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Contact::all();
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
            
        $contact = new Contact($validated);

        $contact->save();

        return json_encode([
            'status'=> 200,
            'message'=> "Store successfully"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        return $contact;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
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

        $contact->name = $validated['name'];

        $contact->save();

        return json_encode([
            'status'=> 200,
            'message'=> "Update successfully"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
        $contact->delete();
        return json_encode([
            'status'=> 200,
            'message'=> "Delete successfully"
        ]);
    }
}
