<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Articles;

class ArticlesController extends Controller
{
    public function getLastSixArticlesRow() {
        $articles = Articles::
            orderByDesc('id')
            ->take(6)
            ->get()
            ->toArray();
        return response()->json($articles);
    }

    public function getPartialArticles(Request $request) {
        $count_per_page = $request->input('count_per_page');
        $articles = Articles::
            orderByDesc('id')
            ->paginate($count_per_page)
            ->toArray();
        return response()->json($articles);
    }

    public function getArticlesBySlug($slug) {
        $article = Articles::where('slug', $slug)->first();
        return response()->json($article);
    }
}