<?php

namespace App\Http\Controllers\Api;

use App\Models\Utilisateur;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class UtilisateurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = Utilisateur::all();

        return response()->json([
            'response'  => true,
            'users' => $users
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
            'nickName'  => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error'      => true,
                'login'      => false,
                'errorList'  => $validator->errors()
            ]);
        }

        $utilisateur = new Utilisateur();

        $utilisateur->nickName        = $request->nickName;

        $result = $utilisateur->save();

        if ($result) {
            return response()->json([
                'response'  => true,
                'userID'    => Utilisateur::select('id')->where('nickName', $request->nickName)->first(),
                'message'   => "L'utilisateur est créé",
            ], 200);
        } else {
            return response()->json([
                'response'  => false,
                'message'   => 'un problème est survenu dans la création',
            ], 422);
        }
    }
}
