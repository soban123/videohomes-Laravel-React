<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\video ;
class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = video::find(1);
        return $result->where('status' , 0) -> get(); 
        
    }

    public function approve(Request $request, $id)
    {
        $video = video::find($id);
        $video->status = 1;

        $video->save();
       
        return 'approved';
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
        $video  = new video();
    
        $video->title = $request->input('title');
        $video->video_id = $request->input('videoid');
        $video->description = $request->input('description');
        // $video->status = "1" ;
        $video->video_motion = $request->input('videomotion');
        $video->video_type = $request->input('videotype');
        $video->user_id = $request->input('userId');
        $video->duration = $request->input('duration');
        $video->size = $request->input('size');
        $video->video_path = $request->input('videopath');
        $video->save();

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
        $video = video::find($id);
        return $video; 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $video = video::find($id);
        $video->title = $request->input('title');
        $video->video_id = $request->input('videoid');
        $video->description = $request->input('description');
        $video->video_motion = $request->input('videomotion');
        $video->video_type = $request->input('videotype');
        $video->user_id = $request->input('userId');
        $video->duration = $request->input('duration');
        $video->size = $request->input('size');
        $video->video_path = $request->input('videopath');
        $video->save();
       
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
        $video = video::find($id);
        $video->delete() ;

        return $id;
    }
}
