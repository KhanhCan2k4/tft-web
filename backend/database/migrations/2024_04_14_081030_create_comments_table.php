<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->text("content");
            $table->unsignedBigInteger("author");
            $table->unsignedInteger("likes");
            $table->unsignedInteger("dislikes");
            $table->unsignedInteger("post_id");
            $table->timestamp("created_at")->useCurrent();
            $table->timestamp("updated_at")->useCurrentOnUpdate()->nullable();
            $table->foreign("author")->references("id")->on("users");
            $table->foreign("post_id")->references("id")->on("posts");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
