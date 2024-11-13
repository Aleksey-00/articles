<?php

namespace Database\Factories;

use App\Models\Media;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Articles;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Articles>
 */
class ArticlesFactory extends Factory
{
    protected $model = Articles::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        if (!File::exists(public_path('images'))) {
            File::makeDirectory(public_path('images'), 0775, true);
        }

        $fakerFileName = $this->faker->image(
           public_path('images'),
           800,
           600
        );

        return [
           'title' => fake()->title(),
           'description' => fake()->paragraph(),
           'review-count' => fake()->numberBetween(0, 100),
           'img-src' => "/images/" . basename($fakerFileName),
           'is-favorites' => fake()->boolean(),
           'slug' => fake()->word(),
        ];
    }
}
