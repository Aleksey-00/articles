<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    /**
     * @return BelongsTo
     */
    public function articles(): BelongsTo
    {
        return $this->belongsTo(Articles::class);
    }
}
