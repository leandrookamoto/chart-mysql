<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chart extends Model
{
    protected $table = 'chart2'; 
    protected $fillable = ['animal', 'popularidade']; 
}
