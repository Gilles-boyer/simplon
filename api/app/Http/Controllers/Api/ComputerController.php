<?php

namespace App\Http\Controllers\Api;

use App\Models\Computer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ComputerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $computers = Computer::all();

        return response()->json([
            'response'  => true,
            'computers' => $computers
        ], 200);
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
                'login'      => false,
                'errorList'  => $validator->errors()
            ]);
        }

        $computer = new Computer();

        $computer->name        = $request->name;

        $result = $computer->save();

        if ($result) {
            return response()->json([
                'response'  => true,
                'message'   => "L'ordinateur est créé",
            ], 200);
        } else {
            return response()->json([
                'response'  => false,
                'message'   => 'un problème est survenu dans la création',
            ], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Computer  $computer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $this->validate($request, [
            'id'                => 'required|exists:computers,id',
        ]);

        $computer = Computer::where('id', $request->id)->first();

        $result = $computer->delete();

        if ($result) {
            return response()->json([
                'response'  => true,
                'message'   => "L'ordinateur est supprimé"
            ], 200);
        } else {
            return response()->json([
                'response' => false,
                'error' => 'il y a un problème pour la suppression',
            ], 401);
        }
    }
}
