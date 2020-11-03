<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class AttributionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('attributions')->insert([
            'timeStart' => '09:00:00',
            'date' => $this->faker->dateTimeThisMonth()->format('Y-m-d'),
            'client_id' =>  1,
            'computer_id' => 1,
        ]);
    }
}
