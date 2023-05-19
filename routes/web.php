<?php

use App\Http\Controllers\ShowFormController;
use Illuminate\Support\Facades\Route;

Route::get('/', ShowFormController::class);
Route::post('/submit', \App\Http\Controllers\SendEmailController::class);
