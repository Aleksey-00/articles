<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed $theme
 * @property mixed $message
 * @property mixed $article_id
 */
class Comments extends Model
{
    protected $fillable = [
       'theme',
       'message'
    ];

    public function articles()
    {
        return $this->belongsTo(Articles::class);
    }
}
