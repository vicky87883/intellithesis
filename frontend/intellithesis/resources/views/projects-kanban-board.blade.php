<!DOCTYPE html>
<html lang="en" dir="ltr" data-startbar="light" data-bs-theme="light">

    <head>
        

        <meta charset="utf-8" />
                <title>Rizz | Rizz - Admin & Dashboard Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
                <meta content="" name="author" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />

                <!-- App favicon -->
                <link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico')}}">
         <!-- App css -->
         <link href="{{ asset('assets/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
         <link href="{{ asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
         <link href="{{ asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css" />

    </head>

    
    <!-- Top Bar Start -->
    <body>
        <!-- Top Bar Start -->
        <div class="topbar d-print-none">
            <div class="container-xxl">
                <nav class="topbar-custom d-flex justify-content-between" id="topbar-custom">    
        

                    <ul class="topbar-item list-unstyled d-inline-flex align-items-center mb-0">                        
                        <li>
                            <button class="nav-link mobile-menu-btn nav-icon" id="togglemenu">
                                <i class="iconoir-menu-scale"></i>
                            </button>
                        </li> 
                        <li class="mx-3 welcome-text">
                            <h3 class="mb-0 fw-bold text-truncate">Good Morning, James!</h3>
                            <!-- <h6 class="mb-0 fw-normal text-muted text-truncate fs-14">Here's your overview this week.</h6> -->
                        </li>                   
                    </ul>
                    <ul class="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
                        <li class="hide-phone app-search">
                            <form role="search" action="#" method="get">
                                <input type="search" name="search" class="form-control top-search mb-0" placeholder="Search here...">
                                <button type="submit"><i class="iconoir-search"></i></button>
                            </form>
                        </li>     
                        <li class="dropdown">
                            <a class="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button"
                            aria-haspopup="false" aria-expanded="false">
                            <img src="{{ asset('assets/images/flags/us_flag.jpg')}}" alt="" class="thumb-sm rounded-circle">
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#"><img src="{{ asset('assets/images/flags/us_flag.jpg')}}" alt="" height="15" class="me-2">English</a>
                                <a class="dropdown-item" href="#"><img src="{{ asset('assets/images/flags/spain_flag.jpg')}}" alt="" height="15" class="me-2">Spanish</a>
                                <a class="dropdown-item" href="#"><img src="{{ asset('assets/images/flags/germany_flag.jpg')}}" alt="" height="15" class="me-2">German</a>
                                <a class="dropdown-item" href="#"><img src="{{ asset('assets/images/flags/french_flag.jpg')}}" alt="" height="15" class="me-2">French</a>
                            </div>
                        </li><!--end topbar-language-->
        
                        <li class="topbar-item">
                            <a class="nav-link nav-icon" href="javascript:void(0);" id="light-dark-mode">
                                <i class="icofont-moon dark-mode"></i>
                                <i class="icofont-sun light-mode"></i>
                            </a>                    
                        </li>
    
                        <li class="dropdown topbar-item">
                            <a class="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button"
                                aria-haspopup="false" aria-expanded="false">
                                <i class="icofont-bell-alt"></i>
                                <span class="alert-badge"></span>
                            </a>
                            <div class="dropdown-menu stop dropdown-menu-end dropdown-lg py-0">
                        
                                <h5 class="dropdown-item-text m-0 py-3 d-flex justify-content-between align-items-center">
                                    Notifications <a href="#" class="badge text-body-tertiary badge-pill">
                                        <i class="iconoir-plus-circle fs-4"></i>
                                    </a>
                                </h5>
                                <ul class="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-1" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link mx-0 active" data-bs-toggle="tab" href="#All" role="tab" aria-selected="true">
                                            All <span class="badge bg-primary-subtle text-primary badge-pill ms-1">24</span>
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link mx-0" data-bs-toggle="tab" href="#Projects" role="tab" aria-selected="false" tabindex="-1">
                                            Projects
                                        </a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link mx-0" data-bs-toggle="tab" href="#Teams" role="tab" aria-selected="false" tabindex="-1">
                                            Team
                                        </a>
                                    </li>
                                </ul>
                                <div class="ms-0" style="max-height:230px;" data-simplebar>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="All" role="tabpanel" aria-labelledby="all-tab" tabindex="0">
                                            <!-- item-->
                                            <a href="#" class="dropdown-item py-3">
                                                <small class="float-end text-muted ps-2">2 min ago</small>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                                        <i class="iconoir-wolf fs-4"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2 text-truncate">
                                                        <h6 class="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                                                        <small class="text-muted mb-0">Dummy text of the printing and industry.</small>
                                                    </div><!--end media-body-->
                                                </div><!--end media-->
                                            </a><!--end-item-->
                                            <!-- item-->
                                            <a href="#" class="dropdown-item py-3">
                                                <small class="float-end text-muted ps-2">10 min ago</small>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                                        <i class="iconoir-apple-swift fs-4"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2 text-truncate">
                                                        <h6 class="my-0 fw-normal text-dark fs-13">Meeting with designers</h6>
                                                        <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                                                    </div><!--end media-body-->
                                                </div><!--end media-->
                                            </a><!--end-item-->
                                            <!-- item-->
                                            <a href="#" class="dropdown-item py-3">
                                                <small class="float-end text-muted ps-2">40 min ago</small>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">                                                    
                                                        <i class="iconoir-birthday-cake fs-4"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2 text-truncate">
                                                        <h6 class="my-0 fw-normal text-dark fs-13">UX 3 Task complete.</h6>
                                                        <small class="text-muted mb-0">Dummy text of the printing.</small>
                                                    </div><!--end media-body-->
                                                </div><!--end media-->
                                            </a><!--end-item-->
                                            <!-- item-->
                                            <a href="#" class="dropdown-item py-3">
                                                <small class="float-end text-muted ps-2">1 hr ago</small>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                                        <i class="iconoir-drone fs-4"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2 text-truncate">
                                                        <h6 class="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                                                        <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                                                    </div><!--end media-body-->
                                                </div><!--end media-->
                                            </a><!--end-item-->
                                            <!-- item-->
                                            <a href="#" class="dropdown-item py-3">
                                                <small class="float-end text-muted ps-2">2 hrs ago</small>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                                        <i class="iconoir-user fs-4"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2 text-truncate">
                                                        <h6 class="my-0 fw-normal text-dark fs-13">Payment Successfull</h6>
                                                        <small class="text-muted mb-0">Dummy text of the printing.</small>
                                                    </div><!--end media-body-->
                                                </div><!--end media-->
                                            </a><!--end-item-->
                                        </div>
                                        <div class="tab-pane fade" id="Projects" role="tabpanel" aria-labelledby="projects-tab" tabindex="0">
                                            <!-- item-->
                                            <a href="#" class="dropdown-item py-3">
                                                <small class="float-end text-muted ps-2">40 min ago</small>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">                                                    
                                                        <i class="iconoir-birthday-cake fs-4"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2 text-truncate">
                                                        <h6 class="my-0 fw-normal text-dark fs-13">UX 3 Task complete.</h6>
                                                        <small class="text-muted mb-0">Dummy text of the printing.</small>
                                                    </div><!--end media-body-->
                                                </div><!--end media-->
                                            </a><!--end-item-->
                                            <!-- item-->
                                            <a href="#" class="dropdown-item py-3">
                                                <small class="float-end text-muted ps-2">1 hr ago</small>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                                        <i class="iconoir-drone fs-4"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2 text-truncate">
                                                        <h6 class="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                                                        <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                                                    </div><!--end media-body-->
                                                </div><!--end media-->
                                            </a><!--end-item-->
                                            <!-- item-->
                                            <a href="#" class="dropdown-item py-3">
                                                <small class="float-end text-muted ps-2">2 hrs ago</small>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                                        <i class="iconoir-user fs-4"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2 text-truncate">
                                                        <h6 class="my-0 fw-normal text-dark fs-13">Payment Successfull</h6>
                                                        <small class="text-muted mb-0">Dummy text of the printing.</small>
                                                    </div><!--end media-body-->
                                                </div><!--end media-->
                                            </a><!--end-item-->
                                        </div>
                                        <div class="tab-pane fade" id="Teams" role="tabpanel" aria-labelledby="teams-tab" tabindex="0">
                                            <!-- item-->
                                            <a href="#" class="dropdown-item py-3">
                                                <small class="float-end text-muted ps-2">1 hr ago</small>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                                        <i class="iconoir-drone fs-4"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2 text-truncate">
                                                        <h6 class="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                                                        <small class="text-muted mb-0">It is a long established fact that a reader.</small>
                                                    </div><!--end media-body-->
                                                </div><!--end media-->
                                            </a><!--end-item-->
                                            <!-- item-->
                                            <a href="#" class="dropdown-item py-3">
                                                <small class="float-end text-muted ps-2">2 hrs ago</small>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                                        <i class="iconoir-user fs-4"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-2 text-truncate">
                                                        <h6 class="my-0 fw-normal text-dark fs-13">Payment Successfull</h6>
                                                        <small class="text-muted mb-0">Dummy text of the printing.</small>
                                                    </div><!--end media-body-->
                                                </div><!--end media-->
                                            </a><!--end-item-->
                                        </div>
                                    </div>
                            
                                </div>
                                <!-- All-->
                                <a href="pages-notifications" class="dropdown-item text-center text-dark fs-13 py-2">
                                    View All <i class="fi-arrow-right"></i>
                                </a>
                            </div>
                        </li>
    
                        <li class="dropdown topbar-item">
                            <a class="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button"
                                aria-haspopup="false" aria-expanded="false">
                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="" class="thumb-lg rounded-circle">
                            </a>
                            <div class="dropdown-menu dropdown-menu-end py-0">
                                <div class="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
                                    <div class="flex-shrink-0">
                                        <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="" class="thumb-md rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-2 text-truncate align-self-center">
                                        <h6 class="my-0 fw-medium text-dark fs-13">William Martin</h6>
                                        <small class="text-muted mb-0">Front End Developer</small>
                                    </div><!--end media-body-->
                                </div>
                                <div class="dropdown-divider mt-0"></div>
                                <small class="text-muted px-2 pb-1 d-block">Account</small>
                                <a class="dropdown-item" href="pages-profile"><i class="las la-user fs-18 me-1 align-text-bottom"></i> Profile</a>
                                <a class="dropdown-item" href="pages-faq"><i class="las la-wallet fs-18 me-1 align-text-bottom"></i> Earning</a>
                                <small class="text-muted px-2 py-1 d-block">Settings</small>                        
                                <a class="dropdown-item" href="pages-profile"><i class="las la-cog fs-18 me-1 align-text-bottom"></i>Account Settings</a>
                                <a class="dropdown-item" href="pages-profile"><i class="las la-lock fs-18 me-1 align-text-bottom"></i> Security</a>
                                <a class="dropdown-item" href="pages-faq"><i class="las la-question-circle fs-18 me-1 align-text-bottom"></i> Help Center</a>                       
                                <div class="dropdown-divider mb-0"></div>
                                <a class="dropdown-item text-danger" href="auth-login"><i class="las la-power-off fs-18 me-1 align-text-bottom"></i> Logout</a>
                            </div>
                        </li>
                    </ul><!--end topbar-nav-->
                </nav>
                <!-- end navbar-->
            </div>
        </div>
        <!-- Top Bar End -->
        <!-- leftbar-tab-menu -->
        <div class="startbar d-print-none">
            <!--start brand-->
            <div class="brand">
                <a href="index" class="logo">
                    <span>
                        <img src="{{ asset('assets/images/logo-sm.png')}}" alt="logo-small" class="logo-sm">
                    </span>
                    <span class="">
                        <img src="{{ asset('assets/images/logo-light.png')}}" alt="logo-large" class="logo-lg logo-light">
                        <img src="{{ asset('assets/images/logo-dark.png')}}" alt="logo-large" class="logo-lg logo-dark">
                    </span>
                </a>
            </div>
            <!--end brand-->
            <!--start startbar-menu-->
            <div class="startbar-menu" >
                <div class="startbar-collapse" id="startbarCollapse" data-simplebar>
                    <div class="d-flex align-items-start flex-column w-100">
                        <!-- Navigation -->
                        <ul class="navbar-nav mb-auto w-100">
                            <li class="menu-label pt-0 mt-0">
                                <!-- <small class="label-border">
                                    <div class="border_left hidden-xs"></div>
                                    <div class="border_right"></div>
                                </small> -->
                                <span>Main Menu</span>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarDashboards">
                                    <i class="iconoir-home-simple menu-icon"></i>
                                    <span>Dashboards</span>
                                </a>
                                <div class="collapse " id="sidebarDashboards">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="index">Analytics</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ecommerce-index">Ecommerce</a>
                                        </li><!--end nav-item-->
                                    </ul><!--end nav-->
                                </div><!--end startbarDashboards-->
                            </li><!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarApplications" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarApplications">
                                    <i class="iconoir-view-grid menu-icon"></i>
                                    <span>Applications</span>
                                </a>
                                <div class="collapse " id="sidebarApplications">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#sidebarAnalytics" data-bs-toggle="collapse" role="button"
                                                aria-expanded="false" aria-controls="sidebarAnalytics">                                        
                                                <span>Analytics</span>
                                            </a>
                                            <div class="collapse " id="sidebarAnalytics">
                                                <ul class="nav flex-column">
                                                    <li class="nav-item">
                                                        <a href="analytics-customers" class="nav-link ">Customers</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a href="analytics-reports" class="nav-link ">Reports</a>
                                                    </li><!--end nav-item-->
                                                </ul><!--end nav-->
                                            </div>
                                        </li><!--end nav-item-->                                
                                        <li class="nav-item">
                                            <a class="nav-link" href="#sidebarProjects" data-bs-toggle="collapse" role="button"
                                                aria-expanded="false" aria-controls="sidebarProjects">                                        
                                                <span>Projects</span>
                                            </a>
                                            <div class="collapse " id="sidebarProjects">
                                                <ul class="nav flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="projects-clients">Clients</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="projects-team">Team</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="projects-project">Project</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="projects-task">Task</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="projects-kanban-board">Kanban Board</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="projects-chat">Chat</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="projects-users">Users</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="projects-create">Project Create</a>
                                                    </li><!--end nav-item--> 
                                                </ul><!--end nav-->
                                            </div>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="#sidebarEcommerce" data-bs-toggle="collapse" role="button"
                                                aria-expanded="false" aria-controls="sidebarEcommerce">                                        
                                                <span>Ecommerce</span>
                                            </a>
                                            <div class="collapse " id="sidebarEcommerce">
                                                <ul class="nav flex-column">
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="ecommerce-products">Products</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="ecommerce-customers">Customers</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="ecommerce-customer-details">Customer Details</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="ecommerce-orders">Orders</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="ecommerce-order-details">Order Details</a>
                                                    </li><!--end nav-item-->
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="ecommerce-refunds">Refunds</a>
                                                    </li><!--end nav-item-->
                                                </ul><!--end nav-->
                                            </div>
                                        </li><!--end nav-item-->
                                 
                                        <li class="nav-item">
                                            <a class="nav-link" href="apps-chat">Chat</a>
                                        </li><!--end nav-item--> 
                                        <li class="nav-item">
                                            <a class="nav-link" href="apps-contact-list">Contact List</a>
                                        </li><!--end nav-item--> 
                                        <li class="nav-item">
                                            <a class="nav-link" href="apps-calendar">Calendar</a>
                                        </li><!--end nav-item-->  
                                        <li class="nav-item">
                                            <a class="nav-link" href="apps-invoice">Invoice</a>
                                        </li><!--end nav-item-->                                
                                    </ul><!--end nav-->
                                </div><!--end startbarApplications-->
                            </li><!--end nav-item-->
                            <li class="menu-label mt-2">
                                <small class="label-border">
                                    <div class="border_left hidden-xs"></div>
                                    <div class="border_right"></div>
                                </small>
                                <span>Components</span>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarElements" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarElements">
                                    <i class="iconoir-compact-disc menu-icon"></i>
                                    <span>UI Elements</span>
                                </a>
                                <div class="collapse " id="sidebarElements">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-alerts">Alerts</a>
                                        </li><!--end nav-item--> 
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-avatar">Avatar</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-buttons">Buttons</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-badges">Badges</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-cards">Cards</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-carousels">Carousels</a>
                                        </li><!--end nav-item-->                                
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-dropdowns">Dropdowns</a>
                                        </li><!--end nav-item-->                                   
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-grids">Grids</a>
                                        </li><!--end nav-item-->                                
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-images">Images</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-list">List</a>
                                        </li><!--end nav-item-->                                   
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-modals">Modals</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-navs">Navs</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-navbar">Navbar</a>
                                        </li><!--end nav-item--> 
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-paginations">Paginations</a>
                                        </li><!--end nav-item-->   
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-popover-tooltips">Popover & Tooltips</a>
                                        </li><!--end nav-item-->                                
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-progress">Progress</a>
                                        </li><!--end nav-item-->                                
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-spinners">Spinners</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-tabs-accordions">Tabs & Accordions</a>
                                        </li><!--end nav-item-->                               
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-typography">Typography</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="ui-videos">Videos</a>
                                        </li><!--end nav-item--> 
                                    </ul><!--end nav-->
                                </div><!--end startbarElements-->
                            </li><!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarAdvancedUI" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarAdvancedUI">
                                    <i class="iconoir-peace-hand menu-icon"></i>
                                    <span>Advanced UI</span><span class="badge rounded text-success bg-success-subtle ms-1">New</span>
                                </a>
                                <div class="collapse " id="sidebarAdvancedUI">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-animation">Animation</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-clipboard">Clip Board</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-dragula">Dragula</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-files">File Manager</a>
                                        </li><!--end nav-item--> 
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-highlight">Highlight</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-rangeslider">Range Slider</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-ratings">Ratings</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-ribbons">Ribbons</a>
                                        </li><!--end nav-item-->                                  
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-sweetalerts">Sweet Alerts</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="advanced-toasts">Toasts</a>
                                        </li><!--end nav-item-->
                                    </ul><!--end nav-->
                                </div><!--end startbarAdvancedUI-->
                            </li><!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarForms" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarForms">
                                    <i class="iconoir-journal-page menu-icon"></i>
                                    <span>Forms</span>
                                </a>
                                <div class="collapse " id="sidebarForms">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-elements">Basic Elements</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-advanced">Advance Elements</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-validation">Validation</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-wizard">Wizard</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-editors">Editors</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-uploads">File Upload</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="forms-img-crop">Image Crop</a>
                                        </li><!--end nav-item-->
                                    </ul><!--end nav-->
                                </div><!--end startbarForms-->
                            </li><!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarCharts" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarCharts">
                                    <i class="iconoir-candlestick-chart menu-icon"></i>
                                    <span>Charts</span>
                                </a>
                                <div class="collapse " id="sidebarCharts">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="charts-apex">Apex</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="charts-justgage">JustGage</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="charts-chartjs">Chartjs</a>
                                        </li><!--end nav-item--> 
                                        <li class="nav-item">
                                            <a class="nav-link" href="charts-toast-ui">Toast</a>
                                        </li><!--end nav-item--> 
                                    </ul><!--end nav-->
                                </div><!--end startbarCharts-->
                            </li><!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarTables" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarTables">
                                    <i class="iconoir-table-rows menu-icon"></i>
                                    <span>Tables</span>
                                </a>
                                <div class="collapse " id="sidebarTables">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="tables-basic">Basic</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="tables-datatable">Datatables</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="tables-editable">Editable</a>
                                        </li><!--end nav-item--> 
                                    </ul><!--end nav-->
                                </div><!--end startbarTables-->
                            </li><!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarIcons" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarIcons">
                                    <i class="iconoir-trophy menu-icon"></i>
                                    <span>Icons</span>
                                </a>
                                <div class="collapse " id="sidebarIcons">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="icons-fontawesome">Font Awesome</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="icons-lineawesome">Line Awesome</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="icons-icofont">Icofont</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="icons-iconoir">Iconoir</a>
                                        </li><!--end nav-item-->
                                    </ul><!--end nav-->
                                </div><!--end startbarIcons-->
                            </li><!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarMaps" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarMaps">
                                    <i class="iconoir-navigator-alt menu-icon"></i>
                                    <span>Maps</span>
                                </a>
                                <div class="collapse " id="sidebarMaps">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="maps-google">Google Maps</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="maps-leaflet">Leaflet Maps</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="maps-vector">Vector Maps</a>
                                        </li><!--end nav-item--> 
                                    </ul><!--end nav-->
                                </div><!--end startbarMaps-->
                            </li><!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarEmailTemplates" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarEmailTemplates">
                                    <i class="iconoir-send-mail menu-icon"></i>
                                    <span>Email Templates</span>
                                </a>
                                <div class="collapse " id="sidebarEmailTemplates">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="email-templates-basic">Basic Action Email</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="email-templates-alert">Alert Email</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="email-templates-billing">Billing Email</a>
                                        </li><!--end nav-item-->  
                                    </ul><!--end nav-->
                                </div><!--end startbarEmailTemplates-->
                            </li><!--end nav-item-->
                            <li class="menu-label mt-2">
                                <small class="label-border">
                                    <div class="border_left hidden-xs"></div>
                                    <div class="border_right"></div>
                                </small>
                                <span>Crafted</span>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarPages" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarPages">
                                    <i class="iconoir-page-star menu-icon"></i>
                                    <span>Pages</span>
                                </a>
                                <div class="collapse " id="sidebarPages">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="pages-profile">Profile</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="pages-notifications">Notifications</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="pages-timeline">Timeline</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="pages-treeview">Treeview</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="pages-starter">Starter Page</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="pages-pricing">Pricing</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="pages-blogs">Blogs</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="pages-faq">FAQs</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="pages-gallery">Gallery</a>
                                        </li><!--end nav-item-->  
                                    </ul><!--end nav-->
                                </div><!--end startbarPages-->
                            </li><!--end nav-item-->
                            <li class="nav-item">
                                <a class="nav-link" href="#sidebarAuthentication" data-bs-toggle="collapse" role="button"
                                    aria-expanded="false" aria-controls="sidebarAuthentication">
                                    <i class="iconoir-fingerprint-lock-circle menu-icon"></i>
                                    <span>Authentication</span>
                                </a>
                                <div class="collapse " id="sidebarAuthentication">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="auth-login">Log in</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="auth-register">Register</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="auth-recover-pw">Re-Password</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="auth-lock-screen">Lock Screen</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="auth-maintenance">Maintenance</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="auth-404">Error 404</a>
                                        </li><!--end nav-item-->
                                        <li class="nav-item">
                                            <a class="nav-link" href="auth-500">Error 500</a>
                                        </li><!--end nav-item-->
                                    </ul><!--end nav-->
                                </div><!--end startbarAuthentication-->
                            </li><!--end nav-item-->
                        </ul><!--end navbar-nav--->
                        <div class="update-msg text-center"> 
                            <div class="d-flex justify-content-center align-items-center thumb-lg update-icon-box  rounded-circle mx-auto">
                                <i class="iconoir-peace-hand h3 align-self-center mb-0 text-primary"></i>
                            </div>                   
                            <h5 class="mt-3">Mannat Themes</h5>
                            <p class="mb-3 text-muted">Rizz is a high quality web applications.</p>
                            <a href="javascript: void(0);" class="btn text-primary shadow-sm rounded-pill">Upgrade your plan</a>
                        </div>
                    </div>
                </div><!--end startbar-collapse-->
            </div><!--end startbar-menu-->    
        </div><!--end startbar-->
        <div class="startbar-overlay d-print-none"></div>
        <!-- end leftbar-tab-menu-->


        <div class="page-wrapper">

            <!-- Page Content-->
            <div class="page-content">
                <div class="container-xxl">
                    <div class="row my-3">
                        <div class="col-12">
                            <div class="">
                                <div class="card-body">
                                     <div class="d-block d-md-flex justify-content-between align-items-center ">
                                        <div class="d-flex align-self-center mb-2 mb-md-0">
                                            <div class="img-group d-inline-flex justify-content-center">
                                                <a class="user-avatar position-relative d-inline-block" href="#">
                                                    <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-md shadow-sm rounded-circle">
                                                </a>
                                                <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                    <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-md shadow-sm rounded-circle">
                                                </a>
                                                <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                    <img src="{{ asset('assets/images/users/avatar-4.jpg')}}" alt="avatar" class="thumb-md shadow-sm rounded-circle">
                                                </a>
                                                <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                    <img src="{{ asset('assets/images/users/avatar-5.jpg')}}" alt="avatar" class="thumb-md shadow-sm rounded-circle">
                                                </a>
                                                <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                    <img src="{{ asset('assets/images/users/avatar-4.jpg')}}" alt="avatar" class="thumb-md shadow-sm rounded-circle">
                                                </a>
                                                <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                    <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-md shadow-sm rounded-circle">
                                                </a>
                                                <a href="" class="user-avatar position-relative d-inline-block ms-1">
                                                    <span class="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">+6</span>
                                                </a>                    
                                            </div>
                                            <button type="button" class="btn card-bg text-primary shadow-sm ms-2"><i class="fa-solid fa-plus me-1"></i> Invite</button>
                                        </div>
                                        <div class="align-self-center">                                            
                                            <form class="row g-2">
                                                <div class="col-auto">
                                                    <label for="inputsearch" class="visually-hidden">Search</label>
                                                    <input type="search" class="form-control" id="inputsearch" placeholder="Search">
                                                  </div><!--end col-->
                                                <div class="col-auto">
                                                    <a class="btn card-bg text-primary shadow-sm dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" data-bs-auto-close="outside">
                                                        <i class="iconoir-filter-alt"></i> Filter
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-start">
                                                        <div class="p-2">
                                                            <div class="form-check mb-2">
                                                                <input type="checkbox" class="form-check-input" checked id="filter-all">
                                                                <label class="form-check-label" for="filter-all">
                                                                  All 
                                                                </label>
                                                            </div>
                                                            <div class="form-check mb-2">
                                                                <input type="checkbox" class="form-check-input" checked id="filter-one">
                                                                <label class="form-check-label" for="filter-one">
                                                                  Design 
                                                                </label>
                                                            </div>
                                                            <div class="form-check mb-2">
                                                                <input type="checkbox" class="form-check-input" checked id="filter-two">
                                                                <label class="form-check-label" for="filter-two">
                                                                  UI/UX 
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" checked id="filter-three">
                                                                <label class="form-check-label" for="filter-three">
                                                                  Backend 
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div><!--end col-->
                                                
                                                <div class="col-auto">
                                                  <button type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#addBoard"><i class="fa-solid fa-plus me-1"></i> Add Task</button>
                                                </div><!--end col-->
                                            </form>
                                        </div>
                                     </div>                               
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div> <!-- end col -->
                    </div> <!-- end row --> 
                    <div class="row">
                        <div class="col-md-12 col-lg-12">
                            <div class="kanban-board">
                                <div class="kanban-col">
                                    <div class="my-3"> 
                                        <div class="d-flex justify-content-between align-items-center border-bottom border-2 border-pink"> 
                                            <div>
                                                <h6 class="fw-semibold fs-16 text-muted mb-1">To Do</h6>
                                                <h6 class="fs-13 fw-semibold">3 Issues - <span class="text-muted">20 Points</span></h6>
                                            </div>
                                            <div> 
                                                <a class="text-secondary me-1 add-btn cursor-pointer" data-bs-toggle="modal" data-bs-target="#addtask">
                                                    <i class="fa-solid fa-plus fs-18"></i>
                                                </a>
                                                <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                    <i class="fa-solid fa-ellipsis fs-18"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                    <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                    <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                </div>
                                            </div> 
                                        </div> 
                                    </div><!--end /div-->
                                    
                                    <div id="project-list-left" class="pt-1">
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-info bg-info-subtle fw-normal px-1 mb-1">Medium</span>
                                                <h5 class="my-2 font-14">Simple Design</h5>
                                                <p class="text-muted mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <div class="d-flex justify-content-between fw-semibold align-items-center">
                                                    <p class="mb-1 d-inline-flex align-items-center"><i class="iconoir-task-list fs-18 text-muted me-1"></i>14 Tasks</p>
                                                    <small class="text-end text-body-emphasis d-block ms-auto">70%</small>
                                                </div>                                        
                                                <div class="progress bg-secondary-subtle" style="height:5px;">
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 15% " aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-file text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">5 Files</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-warning bg-warning-subtle fw-normal px-2 mb-1">Low</span>
                                                <h5 class="my-2 font-14">UI/UX Design img.</h5>
                                                <p class="p-3  rounded-md">
                                                    <img src="{{ asset('assets/images/extra/ill-2.png')}}" alt="" class="img-fluid mx-auto">
                                                </p>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-danger bg-danger-subtle fw-normal px-1 mb-1">High</span>
                                                <h5 class="my-2 font-14">Strong Password</h5>
                                                <p class="text-muted mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <div>
                                                    <span class="badge rounded text-primary bg-primary-subtle fw-normal px-1 mb-1">API</span>
                                                    <span class="badge rounded text-info bg-info-subtle fw-normal px-1 mb-1">Form Submit</span>
                                                    <span class="badge rounded text-danger bg-danger-subtle fw-normal px-1 mb-1">Responsive</span>
                                                </div>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-success bg-success-subtle fw-normal px-2 mb-1">Completed</span>
                                                <h5 class="my-2 font-14">Multi Color Dashboard</h5>
                                                <p class="text-muted mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                    </div><!--end project-list-left-->
                                    <a href="" class="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#addtask"> <i class="fa-solid fa-plus me-1"></i> Add New Task</a>                                    
                                </div><!--end kanban-col-->
                                <div class="kanban-col">
                                    <div class="my-3"> 
                                        <div class="d-flex justify-content-between align-items-center  border-bottom border-2 border-warning"> 
                                            <div>
                                                <h6 class="fw-semibold fs-16 text-muted mb-1">In Progress</h6>
                                                <h6 class="fs-13 fw-semibold">2 Issues - <span class="text-muted">8 Points</span></h6>
                                            </div>
                                            <div> 
                                                <a class="text-secondary me-1 add-btn cursor-pointer" data-bs-toggle="modal" data-bs-target="#addtask">
                                                    <i class="fa-solid fa-plus fs-18"></i>
                                                </a>
                                                <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                    <i class="fa-solid fa-ellipsis fs-18"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                    <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                    <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                </div>
                                            </div> 
                                        </div>                                        
                                    </div><!--end /div-->
                                    <div id="project-list-center-left"  class="pt-1">
                                        
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-danger bg-danger-subtle fw-normal px-1 mb-1">High</span>
                                                <h5 class="my-2 font-14">Nodejs setup</h5>
                                                <p class="text-muted mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <div>
                                                    <span class="badge rounded text-primary bg-primary-subtle fw-normal px-1 mb-1">API</span>
                                                    <span class="badge rounded text-info bg-info-subtle fw-normal px-1 mb-1">Form Submit</span>
                                                    <span class="badge rounded text-danger bg-danger-subtle fw-normal px-1 mb-1">Responsive</span>
                                                </div>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-success bg-success-subtle fw-normal px-2 mb-1">Completed</span>
                                                <h5 class="my-2 font-14">Add Animation Page</h5>
                                                <p class="text-muted mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-info bg-info-subtle fw-normal px-1 mb-1">Medium</span>
                                                <h5 class="my-2 font-14">QR code issue fix</h5>
                                                <p class="text-muted mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <div class="d-flex justify-content-between fw-semibold align-items-center">
                                                    <p class="mb-1 d-inline-flex align-items-center"><i class="iconoir-task-list fs-18 text-muted me-1"></i>14 Tasks</p>
                                                    <small class="text-end text-body-emphasis d-block ms-auto">70%</small>
                                                </div>                                        
                                                <div class="progress bg-secondary-subtle" style="height:5px;">
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 15% " aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-file text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">5 Files</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-warning bg-warning-subtle fw-normal px-2 mb-1">Low</span>
                                                <h5 class="my-2 font-14">UI/UX Design img.</h5>
                                                <p class="p-3  rounded-md">
                                                    <img src="{{ asset('assets/images/extra/ill-2.png')}}" alt="" class="img-fluid mx-auto">
                                                </p>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                    </div><!--end project-list-left-->
                                    <a href="" class="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#addtask"> <i class="fa-solid fa-plus me-1"></i> Add New Task</a> 
                                </div><!--end kanban-col-->
                                <div class="kanban-col">
                                    <div class="my-3"> 
                                        <div class="d-flex justify-content-between align-items-center border-bottom border-2 border-success"> 
                                            <div>
                                                <h6 class="fw-semibold fs-16 text-muted mb-1">Review</h6>
                                                <h6 class="fs-13 fw-semibold">1 Issues - <span class="text-muted">7 Points</span></h6>
                                            </div>
                                            <div> 
                                                <a class="text-secondary me-1 add-btn cursor-pointer" data-bs-toggle="modal" data-bs-target="#addtask">
                                                    <i class="fa-solid fa-plus fs-18"></i>
                                                </a>
                                                <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                    <i class="fa-solid fa-ellipsis fs-18"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                    <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                    <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                </div>
                                            </div> 
                                        </div>
                                    </div><!--end /div-->
                                    <div id="project-list-center-right"  class="pt-1">
                                        
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-warning bg-warning-subtle fw-normal px-2 mb-1">Low</span>
                                                <h5 class="my-2 font-14">Figma Layer Setup</h5>
                                                <p class="p-3  rounded-md">
                                                    <img src="{{ asset('assets/images/extra/ill-1.png')}}" alt="" class="img-fluid mx-auto">
                                                </p>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-danger bg-danger-subtle fw-normal px-1 mb-1">High</span>
                                                <h5 class="my-2 font-14">Components BS 5</h5>
                                                <p class="text-muted mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <div>
                                                    <span class="badge rounded text-primary bg-primary-subtle fw-normal px-1 mb-1">API</span>
                                                    <span class="badge rounded text-info bg-info-subtle fw-normal px-1 mb-1">Form Submit</span>
                                                    <span class="badge rounded text-danger bg-danger-subtle fw-normal px-1 mb-1">Responsive</span>
                                                </div>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-success bg-success-subtle fw-normal px-2 mb-1">Completed</span>
                                                <h5 class="my-2 font-14">Live data in datatable </h5>
                                                <p class="text-muted mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-info bg-info-subtle fw-normal px-1 mb-1">Medium</span>
                                                <h5 class="my-2 font-14">Reactjs setup</h5>
                                                <p class="text-muted mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <div class="d-flex justify-content-between fw-semibold align-items-center">
                                                    <p class="mb-1 d-inline-flex align-items-center"><i class="iconoir-task-list fs-18 text-muted me-1"></i>14 Tasks</p>
                                                    <small class="text-end text-body-emphasis d-block ms-auto">70%</small>
                                                </div>                                        
                                                <div class="progress bg-secondary-subtle" style="height:5px;">
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 15% " aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-file text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">5 Files</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                    </div><!--end project-list-left-->
                                    <a href="" class="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#addtask"> <i class="fa-solid fa-plus me-1"></i> Add New Task</a> 
                                </div><!--end kanban-col-->
                                <div class="kanban-col">
                                    <div class="my-3"> 
                                        <div class="d-flex justify-content-between align-items-center border-bottom border-2 border-info"> 
                                            <div>
                                                <h6 class="fw-semibold fs-16 text-muted mb-1">Done</h6>
                                                <h6 class="fs-13 fw-semibold">5 Issues - <span class="text-muted">12 Points</span></h6>
                                            </div>
                                            <div> 
                                                <a class="text-secondary me-1 add-btn cursor-pointer" data-bs-toggle="modal" data-bs-target="#addtask">
                                                    <i class="fa-solid fa-plus fs-18"></i>
                                                </a>
                                                <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                    <i class="fa-solid fa-ellipsis fs-18"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                    <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                    <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                </div>
                                            </div> 
                                        </div>
                                    </div><!--end /div-->
                                    <div id="project-list-right"  class="pt-1">
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-success bg-success-subtle fw-normal px-2 mb-1">Completed</span>
                                                <h5 class="my-2 font-14">Photoshop 7</h5>
                                                <p class="text-muted mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-info bg-info-subtle fw-normal px-1 mb-1">Medium</span>
                                                <h5 class="my-2 font-14">Mobile Account Setting</h5>
                                                <p class="text-muted mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <div class="d-flex justify-content-between fw-semibold align-items-center">
                                                    <p class="mb-1 d-inline-flex align-items-center"><i class="iconoir-task-list fs-18 text-muted me-1"></i>14 Tasks</p>
                                                    <small class="text-end text-body-emphasis d-block ms-auto">70%</small>
                                                </div>                                        
                                                <div class="progress bg-secondary-subtle" style="height:5px;">
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 15% " aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div class="progress-bar bg-secondary rounded-pill" role="progressbar" style="margin-right:2px; width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-file text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">5 Files</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-warning bg-warning-subtle fw-normal px-2 mb-1">Low</span>
                                                <h5 class="my-2 font-14">UI/UX Design img.</h5>
                                                <p class="p-3  rounded-md">
                                                    <img src="{{ asset('assets/images/extra/ill-1.png')}}" alt="" class="img-fluid mx-auto">
                                                </p>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="dropdown d-inline-block float-end">
                                                    <a class="dropdown-toggle arrow-none text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis fs-18"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                                                        <a class="dropdown-item" href="#"><i class="las la-pen fs-16 me-1 align-text-bottom"></i> Edit</a>
                                                        <a class="dropdown-item text-danger" href="#"><i class="las la-trash fs-16 me-1 align-text-bottom"></i> Delete</a>
                                                    </div>
                                                </div><!--end dropdown-->
                                                <span class="badge rounded text-danger bg-danger-subtle fw-normal px-1 mb-1">High</span>
                                                <h5 class="my-2 font-14">Mobile Account Setting</h5>
                                                <p class="text-muted mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                <div>
                                                    <span class="badge rounded text-primary bg-primary-subtle fw-normal px-1 mb-1">API</span>
                                                    <span class="badge rounded text-info bg-info-subtle fw-normal px-1 mb-1">Form Submit</span>
                                                    <span class="badge rounded text-danger bg-danger-subtle fw-normal px-1 mb-1">Responsive</span>
                                                </div>
                                                <hr class="hr-dashed">
                                                <div class="row justify-content-center">
                                                    <div class="col-auto align-self-center">
                                                        <ul class="list-inline mb-0">                                                                    
                                                            <li class="list-item d-inline-block me-2">
                                                                <a class="" href="#">
                                                                    <i class="fa-solid fa-list-check text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">0/5 Tasks</span>
                                                                </a>
                                                            </li>
                                                            <li class="list-item d-inline-block">
                                                                <a class="" href="#">
                                                                    <i class="fa-regular fa-message text-muted"></i>
                                                                    <span class="text-muted font-weight-bold">3 Comments</span>
                                                                </a>                                                                               
                                                            </li>
                                                        </ul>
                                                    </div><!--end col-->
                                                    <div class="col align-self-center">
                                                        <div class="img-group d-flex justify-content-center">
                                                            <a class="user-avatar position-relative d-inline-block" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-1.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-2.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a> 
                                                            <a class="user-avatar position-relative d-inline-block ms-n2" href="#">
                                                                <img src="{{ asset('assets/images/users/avatar-6.jpg')}}" alt="avatar" class="thumb-sm shadow-sm rounded-circle">
                                                            </a>                 
                                                        </div>
                                                    </div><!--end col-->
                                                </div><!--end row-->
                                            </div><!--end card-body-->
                                        </div><!--end card-->                                        
                                    </div><!--end project-list-left-->
                                    <a href="" class="btn btn-outline-primary w-100" data-bs-toggle="modal" data-bs-target="#addtask"> <i class="fa-solid fa-plus me-1"></i> Add New Task</a>
                                </div><!--end kanban-col-->
                            </div><!--end kanban-->                   
                        </div> <!--end col-->              
                    </div><!--end row-->                
                </div><!-- container -->


                
                <!--Start Rightbar-->
                <!--Start Rightbar/offcanvas-->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="Appearance" aria-labelledby="AppearanceLabel">
                    <div class="offcanvas-header border-bottom justify-content-between">
                      <h5 class="m-0 font-14" id="AppearanceLabel">Appearance</h5>
                      <button type="button" class="btn-close text-reset p-0 m-0 align-self-center" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">  
                        <h6>Account Settings</h6>
                        <div class="p-2 text-start mt-3">
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch1">
                                <label class="form-check-label" for="settings-switch1">Auto updates</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch2" checked>
                                <label class="form-check-label" for="settings-switch2">Location Permission</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="settings-switch3">
                                <label class="form-check-label" for="settings-switch3">Show offline Contacts</label>
                            </div><!--end form-switch-->
                        </div><!--end /div-->
                        <h6>General Settings</h6>
                        <div class="p-2 text-start mt-3">
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch4">
                                <label class="form-check-label" for="settings-switch4">Show me Online</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="settings-switch5" checked>
                                <label class="form-check-label" for="settings-switch5">Status visible to all</label>
                            </div><!--end form-switch-->
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="settings-switch6">
                                <label class="form-check-label" for="settings-switch6">Notifications Popup</label>
                            </div><!--end form-switch-->
                        </div><!--end /div-->               
                    </div><!--end offcanvas-body-->
                </div>
                <!--end Rightbar/offcanvas-->
                <!--end Rightbar-->
                <!--Start Footer-->
                
                <footer class="footer text-center text-sm-start d-print-none">
                    <div class="container-xxl">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-0 rounded-bottom-0">
                                    <div class="card-body">
                                        <p class="text-muted mb-0">
                                            ©
                                            <script> document.write(new Date().getFullYear()) </script>
                                            Rizz
                                            <span
                                                class="text-muted d-none d-sm-inline-block float-end">
                                                Crafted with
                                                <i class="iconoir-heart text-danger"></i>
                                                by Mannatthemes</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                
                <!--end footer-->
            </div>
            <!-- end page content -->
        </div>
        <!-- end page-wrapper -->

        <div class="modal fade" id="addtask" tabindex="-1" role="dialog" aria-labelledby="addTask" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title m-0">Add New Task</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div><!--end modal-header-->
                    <div class="modal-body">
                        <div class="mb-3 row">
                            <label for="inputTaskTitle1" class="col-sm-3 col-form-label text-end fw-medium">Task Title :</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" id="inputTaskTitle1">
                            </div><!--end col-->
                        </div><!--end row--> 
                        <div class="mb-3 row">
                            <label for="inputTaskID" class="col-sm-3 col-form-label text-end fw-medium">Task ID :</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" id="inputTaskID">
                            </div><!--end col-->
                        </div><!--end row--> 
                        <div class="mb-3 row">
                            <label for="inputAssigned" class="col-sm-3 col-form-label text-end fw-medium">Assigned to:</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" id="inputAssigned">
                            </div><!--end col-->
                        </div><!--end row-->     
                        <div class="mb-3 row">
                            <label for="inputDescription" class="col-sm-3 col-form-label text-end fw-medium">Description:</label>
                            <div class="col-sm-9">
                              <textarea  type="text" class="form-control" id="inputDescription" rows="2"></textarea>
                            </div><!--end col-->
                        </div><!--end row-->  
                        <div class="row">
                            <label for="inputPriority" class="col-sm-3 col-form-label text-end fw-medium">Priority:</label>
                            <div class="col-sm-9">
                                <select class="form-select" aria-label="">
                                    <option value="1" selected>Low</option>
                                    <option value="2">Medium</option>
                                    <option value="3">High</option>
                                </select>
                            </div><!--end col-->
                        </div><!--end row-->                                                     
                    </div><!--end modal-body-->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary btn-sm">Save</button>
                        <button type="button" class="btn btn-outline-danger btn-sm" data-bs-dismiss="modal">Close</button>
                        
                    </div><!--end modal-footer-->
                </div><!--end modal-content-->
            </div><!--end modal-dialog-->
        </div><!--end modal-->


        <div class="modal fade" id="addBoard" tabindex="-1" role="dialog" aria-labelledby="addBoard" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title m-0">Add New Board</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div><!--end modal-header-->
                    <div class="modal-body">
                        <div class="row">
                            <label for="inputTaskTitle" class="col-sm-3 col-form-label text-end fw-medium">Board Title :</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" id="inputTaskTitle">
                            </div><!--end col-->
                        </div><!--end row-->                                                      
                    </div><!--end modal-body-->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary btn-sm">Save</button>
                        <button type="button" class="btn btn-outline-danger btn-sm" data-bs-dismiss="modal">Close</button>                                
                    </div><!--end modal-footer-->
                </div><!--end modal-content-->
            </div><!--end modal-dialog-->
        </div><!--end modal-->
        <!-- Javascript  -->  
        <!-- vendor js -->
        
        <script src="{{ asset('assets/libs/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
        <script src="{{ asset('assets/libs/simplebar/simplebar.min.js')}}"></script>
        <script src="{{ asset('assets/libs/dragula/dragula.min.js')}}"></script>
        <script src="{{ asset('assets/js/pages/project-kanban.init.js')}}"></script>
        <script src="{{ asset('assets/js/app.js')}}"></script>
    </body>
    <!--end body-->
</html>