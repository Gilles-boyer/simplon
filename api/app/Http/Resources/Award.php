<?php

namespace App\Http\Resources;

use App\Models\Utilisateur;
use Illuminate\Http\Resources\Json\JsonResource;

class Award extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'computer_id' => $this->computer_id,
            'user_id' => Utilisateur::where('id',$this->utilisateur_id)->select('nickName', 'id')->first(),
            'date' =>$this->date,
            'time' => $this->timeStart,
        ];
    }
}
