<?php

namespace App\Http\Controllers;

use App\Models\Computer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\Computers as ResourcesComputers;

class ComputerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($data)
    {
        $computers = Computer::with(['attributions'=> function($query) use ($data) { $query->where('date', $data);}])->get();

        return ResourcesComputers::collection($computers);

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
            'name'             => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error'      => true,
                'errorList'  => $validator->errors()
            ]);
        }

        $computer = new Computer();

        $computer->name = $request->name;

        $result = $computer->save();

        $data = Computer::All();

        if ($result) {
            return response()->json([
                'response'  => true,
                'message'   => "L'ordinateur est créé",
                'computer'  => $data,
            ], 200);
        } else {
            return response()->json([
                'response'  => false,
                'errorList'   => 'un problème est survenu dans la création',
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Computer  $computer
     * @return \Illuminate\Http\Response
     */
    public function show(Computer $computer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Computer  $computer
     * @return \Illuminate\Http\Response
     */
    public function edit(Computer $computer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Computer  $computer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Computer $computer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Computer  $computer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Computer $computer)
    {
        //
    }
}
