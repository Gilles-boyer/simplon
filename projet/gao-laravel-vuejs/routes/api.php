<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ComputerController;
use App\Http\Controllers\AttributionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//list all computers
Route::get ("computers/{date}", [ComputerController::class, 'index']);
Route::post ("computer-create", [ComputerController::class, 'store']);


Route::get("clients/search", [ClientController::class, 'index']);
Route::post("attribution/create", [AttributionController::class, 'store']);
Route::post("client/create", [ClientController::class, 'store']);
