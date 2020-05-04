<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

//Playlist
Route::get('/playlists', 'PlaylistController@index');

Route::get('/playlists/{id}' , 'PlaylistController@show');

Route::post('/playlists' , 'PlaylistController@store');
Route::put('/playlists/update/{id}' , 'PlaylistController@update');
Route::delete('/playlists/delete/{id}' , 'PlaylistController@destroy');

// Videos

Route::get('/videos', 'VideoController@index');
Route::get('/videos/{id}' , 'VideoController@show');
Route::post('/videos' , 'VideoController@store');
Route::post('/videosapprove/{id}' , 'VideoController@approve');
Route::put('/videos/update/{id}' , 'VideoController@update');
Route::delete('/videos/delete/{id}' , 'VideoController@destroy');


Route::view('/{path?}', 'myview')->middleware('auth');