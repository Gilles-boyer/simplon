<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AwardController;
use App\Http\Controllers\Api\ComputerController;
use App\Http\Controllers\Api\UtilisateurController;

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

//Route for to create a new User
Route::post("create-user", [UserController::class, 'store']);

//login
Route::post("login-user", [UserController::class, 'login']);

//auth
Route::group(['middleware' => 'auth:api'], function () {

    /*
    |------------------------------------------------------------------------
    |   User
    |------------------------------------------------------------------------
    | All Route for User
    |
    */
    Route::get ("user/logout/me",       [UserController::class, 'logout']);

    /*
    |------------------------------------------------------------------------
    |   Computer
    |------------------------------------------------------------------------
    | All Route for computer
    |
    */
    Route::get ("computers",                [ComputerController::class, 'index']);
    Route::post("computer/create",          [ComputerController::class, 'store']);
    Route::post("computer/delete",          [ComputerController::class, 'destroy']);

    /*
    |------------------------------------------------------------------------
    |   Utilisateur
    |------------------------------------------------------------------------
    | All Route for Utilisateur
    |
    */
    Route::get ("utilisateurs",             [UtilisateurController::class, 'index']);
    Route::post("utilisateur/create",       [UtilisateurController::class, 'store']);

    /*
    |------------------------------------------------------------------------
    |   Attribution
    |------------------------------------------------------------------------
    | All Route for Attribution
    |
    */
    Route::get ("awards/{computer_id}/{date_use}",  [AwardController::class, 'whatIsAwardsFor']);
    Route::post("award/create",                     [AwardController::class, 'store']);
    Route::post("award/update",                     [AwardController::class, 'update']);
    Route::post("award/delete",                     [AwardController::class, 'destroy']);


});
