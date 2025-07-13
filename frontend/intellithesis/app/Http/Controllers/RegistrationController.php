<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registration;
use Illuminate\Support\Facades\Hash;

class RegistrationController extends Controller
{
    public function store(Request $req)
    {
        $validated = $req->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:registrations',
            'password' => 'required|string|min:8|confirmed',
            'mobile' => 'required|digits_between:10,15',
            'terms' => 'accepted'
        ]);

        $registration = Registration::create([
            'username' => $validated['username'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'mobile' => $validated['mobile'],
            'terms' => true
        ]);

        return response()->json([
            'message' => 'Registration successful',
            'data' => $registration
        ]);
    }
}
