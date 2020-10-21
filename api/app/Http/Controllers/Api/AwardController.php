<?php

namespace App\Http\Controllers\Api;

use App\Models\Attribution;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\Award as ResourcesAward;

class AwardController extends Controller
{
    public function whatIsAwardsFor($computer_id, $date_use)
    {
        $awards = Attribution::where('computer_id', $computer_id)
            ->where('date', $date_use)
            ->orderBy('timeStart', 'asc')
            ->get();

        return  ResourcesAward::collection($awards);
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
                'utilisateur_id'    => 'required|exists:utilisateurs,id',
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

        $award->utilisateur_id  = $request->utilisateur_id;
        $award->computer_id     = $request->computer_id;
        $award->date            = $request->date;
        $award->timeStart       = $request->timeStart;

        $result = $award->save();

        return response()->json([
            'response'  => true,
            'message'   => 'La réservation est créée',
        ], 200);
    }

    /**
     * Update resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator      =       Validator::make(
            $request->all(),
            [
                'id'                => 'required|exists:attributions,id',
                'computer_id'       => 'required|exists:computers,id',
                'utilisateur_id'    => 'required|exists:utilisateurs,id',
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

        $award =  Attribution::find($request->id);

        $award->utilisateur_id  = $request->utilisateur_id;
        $award->computer_id     = $request->computer_id;
        $award->date            = $request->date;
        $award->timeStart       = $request->timeStart;

        $result = $award->save();

        return response()->json([
            'response'  => true,
            'message'   => 'La réservation est modifiée',
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Award  $award
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $this->validate($request, [
            'id'                => 'required|exists:attributions,id',
        ]);

        $award = Attribution::find($request->id);

        $result = $award->delete();

        if ($result) {
            return response()->json([
                'response'  => true,
                'message'   => "La reservation est supprimé"
            ], 200);
        } else {
            return response()->json([
                'response' => false,
                'error' => 'il y a un problème pour la suppression',
            ], 401);
        }
    }

}
