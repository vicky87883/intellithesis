<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RegistrationController;
Route::get('/', function () {
    $title = 'IntelliThesis | AI For Scholars';
    return view('index', compact('title'));
});
Route::get('/advanced-animation', function () {
    return view('advanced-animation');
});
Route::get('/advanced-clipboard', function () {
    return view('advanced-clipboard');
});
Route::get('/advanced-dragula', function () {
    return view('advanced-dragula');
});
Route::get('/advanced-files', function () {
    return view('advanced-files');
});
Route::get('/advanced-highlight', function () {
    return view('advanced-highlight');
});
Route::get('/advanced-rangeslider', function () {
    return view('advanced-rangeslider');
});
Route::get('/advanced-ratings', function () {
    return view('advanced-ratings');
});
Route::get('/advanced-ribbons', function () {
    return view('advanced-ribbons');
});
Route::get('/advanced-sweetalerts', function () {
    return view('advanced-sweetalerts');
});
Route::get('/advanced-toasts', function () {
    return view('advanced-toasts');
});
Route::get('/analytics-customers', function () {
    return view('analytics-customers');
});
Route::get('/analytics-reports', function () {
    return view('analytics-reports');
});
Route::get('/apps-calendar', function () {
    return view('apps-calendar');
});
Route::get('/apps-chat', function () {
    return view('apps-chat');
});
Route::get('/apps-contact-list', function () {
    return view('apps-contacts-list');
});
Route::get('/apps-invoice', function () {
    return view('apps-invoice');
});
Route::get('/auth-404', function () {
    return view('auth-404');
});
Route::get('/auth-500', function () {
    return view('auth-500');
});
Route::get('/auth-lock-screen', function () {
    return view('auth-lock-screen');
});
Route::get('/auth-login', function () {
    return view('auth-login');
});
Route::get('/auth-maintenance', function () {
    return view('auth-maintenance');
});
Route::get('/auth-recover-pw', function () {
    return view('auth-recover-pw');
});
//this si section for register
Route::get('/auth-register', function () {
    return view('auth-register');
});
// Route::get('/add',[UserController::class,'addUser'])->name('addUser');
Route::post('/register-user', [RegistrationController::class, 'store'])->name('register-user');
Route::get('/register-user', [RegistrationController::class, 'store'])->name('register-user');


Route::get('/charts-apex', function () {
    return view('charts-apex');
});
Route::get('/charts-chartjs', function () {
    return view('charts-chartjs');
});
Route::get('/charts-justgage', function () {
    return view('charts-justgage');
});
Route::get('/charts-toast-ui', function () {
    return view('charts-toast-ui');
});
Route::get('/ecommerce-customer-details', function () {
    return view('ecommerce-customer-details');
});
Route::get('/ecommerce-customer', function () {
    return view('ecommerce-customer');
});
Route::get('/ecommerce-index', function () {
    return view('ecommerce-index');
});
Route::get('/ecommerce-order-details', function () {
    return view('ecommerce-order-details');
});
Route::get('/ecommerce-orders', function () {
    return view('ecommerce-orders');
});
Route::get('/ecommerce-products', function () {
    return view('ecommerce-products'); 
});
Route::get('/ecommerce-refunds', function () {
    return view('ecommerce-refunds');
});
Route::get('/email-templates-alert', function () {
    return view('email-templates-alert');
});
Route::get('/email-templates-billing', function () {
    return view('email-templates-billing');
});
Route::get('/email-templates-basic', function () {
    return view('email-templates-basic');
});
Route::get('/email-templates-billing', function () {
    return view('email-templates-billing');
});
Route::get('/forms-editors', function () {
    return view('forms-editors');
});
Route::get('/forms-advanced', function () {
    return view('forms-advanced');
});
Route::get('/forms-elements', function () {
    return view('forms-elements');
});
Route::get('/forms-elements', function () {
    return view('forms-elements');
});
Route::get('/forms-img-crop', function () {
    return view('forms-img-crop');
});
Route::get('/forms-uplods', function () {
    return view('forms-uploads');
});
Route::get('/forms-uploads', function () {
    return view('forms-uploads');
});
Route::get('/forms-validations', function () {
    return view('forms-validations');
});
Route::get('/forms-wizard', function () {
    return view('forms-wizard');
});
Route::get('/icons-fontawesome', function () {
    return view('icons-fontawesome');
});
Route::get('/icons-icofont', function () {
    return view('icons-icofont');
});
Route::get('/icons-iconoir', function () {
    return view('icons-iconoir');
});
Route::get('/icons-lineawesome', function () {
    return view('icons-lineawesome');
});
Route::get('/maps-google', function () {
    return view('maps-google');
});
Route::get('/maps-vector', function () {
    return view('maps-vector');
});
Route::get('/maps-leaflet', function () {
    return view('maps-leaflet');
});
Route::get('/pages-blogs', function () {
    return view('pages-blogs');
});
Route::get('/pages-faq', function () {
    return view('pages-faq');
});
Route::get('/pages-gallery', function () {
    return view('pages-gallery');
});
Route::get('/pages-notifications', function () {
    return view('pages-notifications');
});
Route::get('/pages-pricing', function () {
    return view('pages-pricing');
});
Route::get('/pages-profile', function () {
    return view('pages-profile');
});
Route::get('/pages-starter', function () {
    return view('pages-starter');
});
Route::get('/pages-timeline', function () {
    return view('pages-timeline');
});
Route::get('/pages-treeview', function () {
    return view('pages-treeview');
});
Route::get('/project-clients', function () {
    return view('project-clients');       
});
Route::get('/project-create', function () {
    return view('project-create');
});
Route::get('/project-task', function () {
    return view('project-task');
});
Route::get('/project-users', function () {
    return view('project-users');
});
Route::get('/project-chat', function () {
    return view('project-chat');
});
Route::get('/project-kanban-board', function () {
    return view('project-kanban-board');
});
Route::get('/projects-project', function () {
    return view('projects-project');
});
Route::get('/projects-team', function () {
    return view('projects-team');
});
Route::get('/tables-basic', function () {
    return view('tables-basic');
});
Route::get('/tables-datatable', function () {
    return view('tables-datatable');
});
Route::get('/tables-editable', function () {
    return view('tables-editable');
});
Route::get('/ui-alerts', function () {
    return view('ui-alerts');   
});
Route::get('/ui-badges', function () {
    return view('ui-badges');
});
Route::get('/ui-buttons', function () {
    return view('ui-buttons');
});
Route::get('/ui-cards', function () {
    return view('ui-cards');    
});
Route::get('/ui-carousels', function () {
    return view('ui-carousels'); 
});
Route::get('/ui-dropdowns', function () {
    return view('ui-dropdowns');
});
Route::get('/ui-grids', function () {
    return view('ui-grids');    
});
Route::get('/ui-modals', function () {
    return view('ui-modals');
});
Route::get('/ui-pagination', function () {
    return view('ui-pagination');
});
Route::get('/ui-images', function () {
    return view('ui-images'); 
});
Route::get('/ui-spinners', function () {
    return view('ui-spinners');
});
Route::get('/ui-tabs-accordions', function () {
    return view('ui-tabs-accordions');
});
Route::get('/ui-typography', function () {
    return view('ui-typography');
});
Route::get('/ui-videos', function () {
    return view('ui-videos');
});
Route::get('/ui-popover-tooltips', function () {
    return view('ui-popover-tooltips');    
});
Route::get('/ui-progressbars', function () {
    return view('ui-progressbars');
});
Route::get('/ui-notifications', function () {
    return view('ui-notifications');
});
?>