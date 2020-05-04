<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\playlist;
class PlaylistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $result = playlist::all();
        return $result ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $playlist  = new playlist();
    
        $playlist->title = $request->input('title');
        $playlist->duration = $request->input('duration');
        $playlist->Album = $request->input('Album');
        // $playlist->status = "1" ;
        $playlist->Artist = $request->input('Artist');
        $playlist->save();

        return $request->input();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $playlist = playlist::find($id);
        return $playlist; 
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return $id ;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $playlist = playlist::find($id);
        $playlist->title = $request->input('title');
        $playlist->duration = $request->input('duration');
        $playlist->Album = $request->input('Album');
        $playlist->Artist = $request->input('Artist');
        $playlist->save();
        return $request->input();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $playlist = playlist::find($id);
        $playlist->delete() ;

        return $id;
    }
}
