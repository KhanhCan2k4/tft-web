<?php

namespace App\Http\Controllers;

use App\Models\Configuration;
use Illuminate\Http\Request;
use Validator;

class ConfigurationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Configuration::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validator = Validator::make(
            $request->all(), [
                'key' => 'required',
                'value' => 'required',
            ],
            [
                'key.required' => 'Bạn chưa điền key',
                'value.required' => 'Bạn chưa điền value',
            ]
        );

        if($validator->fails()){
            return json_encode([
                'status' => 422,
                'message' => $validator->errors()->getMessages(),
            ]);
        }

        $configuration = new Configuration();

        $configuration->key = $request->key;
        $configuration->value = $request->value;

        $configuration->save();


        return json_encode([
            'status' => 200,
            'message' => 'Success',
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return \Illuminate\Http\Response
     */
    public function show(Configuration $configuration)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return \Illuminate\Http\Response
     */
    public function edit(Configuration $configuration)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Configuration  $configuration
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Configuration $configuration)
    {
        //
        $validator = Validator::make(
             $request->all(), [
                'key' => 'required',
                'value' => 'required',
            ],
            [
                'key.required' => 'Bạn chưa điền key',
                'value.required' => 'Bạn chưa điền value',
            ]
        );

        if($validator->fails()){
            return json_encode([
                'status' => 422,
                'message' => $validator->errors()->getMessages(),
            ]);
        }

        $configuration->key = $request->key;
        $configuration->value = $request->value;

        $configuration->save();


        return json_encode([
            'status' => 200,
            'message' => 'Success',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return \Illuminate\Http\Response
     */
    public function destroy(Configuration $configuration)
    {
        //
        if($configuration->delete()){
            return json_encode([
                'status' => 200,
                'message' => 'Deleted successfully'
            ]);
        }

        return json_encode([
            'status' => 400,
            'message' => 'Deleted unsuccessfully'
        ]);

    }
}
