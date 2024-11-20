<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function addComment(Request $request): void
    {
        $theme = $request->input('theme');
        $message = $request->input('message');
        $article_id = $request->input('article_id');

        $comments = new Comments();
        $comments->theme = $theme;
        $comments->message = $message;
        $comments->article_id = $article_id;
        $comments->save();
    }
}
