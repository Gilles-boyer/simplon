<?php

namespace App\Http\Resources;

use App\Models\Client;
use App\Models\Attribution;
use Illuminate\Http\Resources\Json\JsonResource;


class Computers extends JsonResource
{

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'attribution' => $this->attributions
        ];
    }
}
