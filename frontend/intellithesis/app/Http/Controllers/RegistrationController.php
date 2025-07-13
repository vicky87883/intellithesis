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

        return redirect('/auth-login')->with('success', 'Registration successful. Please log in.');
    }
    public function login(Request $request)
{
    $request->validate([
        'username' => 'required|string',
        'password' => 'required|string'
    ]);

    $user = \App\Models\Registration::where('username', $request->username)->first();

    if ($user && \Hash::check($request->password, $user->password)) {
        session([
            'loggedIn' => true,
            'user_name' => $user->username
        ]);
        return redirect('/index'); // home page
    } else {
        return back()->with('error', 'Invalid credentials');
    }
}
public function logout()
{
    session()->flush(); // clear all session data
    return redirect('/auth-login'); // back to home
}


}
