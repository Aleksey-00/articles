<?php

use Illuminate\Support\Facades\Route;

Route::get('{any?}', function ($any = null) {
    return view('welcome');
})->where('any', '.*');
