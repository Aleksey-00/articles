<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\CommentsController;

Route::get('/articles-main', [ArticlesController::class, 'getLastSixArticlesRow']);
Route::get('/articles-partial', [ArticlesController::class, 'getPartialArticles']);
Route::get('/articles/{slug}', [ArticlesController::class, 'getArticlesBySlug']);
Route::post('/comment', [CommentsController::class, 'addComment']);
