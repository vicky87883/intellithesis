<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function addUser(Request $req)
    {
        $req->validate([
            'username' => 'required|string|max:255',
    'email' => 'required|string|email|max:255|unique:users',
    'password' => 'required|string|min:8|confirmed',
    'mobile' => 'required|digits_between:10,15',
    'terms' => 'accepted'
        ]);
        return $req->all();
    }
}