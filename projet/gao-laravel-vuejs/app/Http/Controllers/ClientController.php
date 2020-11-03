<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client =  Client::all();

        return response()->json([
            'response' => true,
            'client'=> $client
        ],200);
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
        $validator      =       Validator::make( $request->all(),
        [
            'nickName'  => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error'      => true,
                'login'      => false,
                'errorList'  => $validator->errors()
            ]);
        }

        $utilisateur = new Client();

        $utilisateur->nickName        = $request->nickName;

        $result = $utilisateur->save();

        if ($result) {
            return response()->json([
                'response'  => true,
                'userID'    => Client::select('id')->where('nickName', $request->nickName)->first(),
                'message'   => "L'utilisateur est créé",
            ], 200);
        } else {
            return response()->json([
                'response'  => false,
                'message'   => 'un problème est survenu dans la création',
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        //
    }
}
