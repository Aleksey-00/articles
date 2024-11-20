<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasMany;

class Articles extends Model
{
    use HasFactory;

    protected $fillable = [
        'img-src',
        'title',
        'description',
        'review-count',
        'is-favorites',
        'slug'
    ];

    public function comments(): HasMany
    {
        return $this->hasMany(Comments::class, 'article_id');
    }
}
