<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function addComment(Request $request) {
        $theme = $request->input('theme');
        $message = $request->input('message');
        $comments = new Comments();
        $comments->theme = $theme;
        $comments->message = $message;
        $comments->save();
    }
}
