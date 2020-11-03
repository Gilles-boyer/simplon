<?php

namespace App\Http\Controllers;

use App\Models\Attribution;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AttributionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $validator      =       Validator::make(
            $request->all(),
            [
                'computer_id'       => 'required|exists:computers,id',
                'client_id'         => 'required|exists:clients,id',
                'date'              => 'required|date',
                'timeStart'         => 'required|date_format:"H:i"',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'error'      => true,
                'errorList' => $validator->errors()
            ]);
        }

        $award = new Attribution();

        $award->client_id  = $request->client_id;
        $award->computer_id     = $request->computer_id;
        $award->date            = $request->date;
        $award->timeStart       = $request->timeStart;

        $award->save();

        $user = Client::find($request->client_id);

        return response()->json([
            'response'  => true,
            'message'   => 'La réservation est créée',
            'client'    => $user
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Attribution  $attribution
     * @return \Illuminate\Http\Response
     */
    public function show(Attribution $attribution)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Attribution  $attribution
     * @return \Illuminate\Http\Response
     */
    public function edit(Attribution $attribution)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Attribution  $attribution
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Attribution $attribution)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Attribution  $attribution
     * @return \Illuminate\Http\Response
     */
    public function destroy(Attribution $attribution)
    {
        //
    }
}
