<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribution extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'timeStart','client_id','computer_id', 'date'
    ];


    /**
     * Get the client of the attribution.
     */
    public function client()
    {
        return $this->belongsTo('App\Models\Client');
    }
    /**
     * Get the computer of the attribution.
     */
    public function computer()
    {
        return $this->belongsTo('App\Models\Computer');
    }
}
