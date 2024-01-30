<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tax extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'tax_name',
        'tax_type',
        'tax_amount',
        'status'
    ];
}
