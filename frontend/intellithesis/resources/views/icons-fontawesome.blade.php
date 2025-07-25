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
                    
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col">                      
                                            <h4 class="card-title mb-1">Font Awesome</h4>  
                                            <p class="text-muted mb-0">Use <code class="fs-14">&lt;i class="fas
                                                fa-accusoftt"&gt;&lt;/i&gt;</code>
                                            </p>                    
                                        </div><!--end col-->
                                    </div>  <!--end row-->                                  
                                </div><!--end card-header-->
                                <div class="card-body pt-0">
                                    <section>
                                        <div class="icon-demo-content row">
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-500px"></i> fab fa-500px
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-accessible-icon"></i> fab fa-accessible-icon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-accusoft"></i> fab fa-accusoft
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-address-book"></i> fas fa-address-book
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-address-book"></i> far fa-address-book
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-adjust"></i> fas fa-adjust
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-adn"></i> fab fa-adn
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-adversal"></i> fab fa-adversal
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-affiliatetheme"></i> fab fa-affiliatetheme
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-algolia"></i> fab fa-algolia
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-align-center"></i> fas fa-align-center
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-align-justify"></i> fas fa-align-justify
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-align-left"></i> fas fa-align-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-align-right"></i> fas fa-align-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-allergies"></i> fas fa-allergies
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-amazon"></i> fab fa-amazon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-amazon-pay"></i> fab fa-amazon-pay
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ambulance"></i> fas fa-ambulance
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-american-sign-language-interpreting"></i> fas fa-american-sign-language-interpreting
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-amilia"></i> fab fa-amilia
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-anchor"></i> fas fa-anchor
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-android"></i> fab fa-android
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-angellist"></i> fab fa-angellist
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-angle-double-down"></i> fas fa-angle-double-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-angle-double-left"></i> fas fa-angle-double-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-angle-double-right"></i> fas fa-angle-double-righ
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-angle-double-up"></i> fas fa-angle-double-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-angle-down"></i> fas fa-angle-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-angle-left"></i> fas fa-angle-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-angle-right"></i> fas fa-angle-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-angle-up"></i> fas fa-angle-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-angrycreative"></i> fab fa-angrycreative
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-angular"></i> fab fa-angular
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-app-store"></i> fab fa-app-store
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-app-store-ios"></i> fab fa-app-store-ios
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-apper"></i> fab fa-apper
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-apple"></i> fab fa-apple
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-apple-pay"></i> fab fa-apple-pay
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-archive"></i> fas fa-archive
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-alt-circle-down"></i> fas fa-arrow-alt-circle-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-arrow-alt-circle-down"></i> far fa-arrow-alt-circle-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-alt-circle-left"></i> fas fa-arrow-alt-circle-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-arrow-alt-circle-left"></i> far fa-arrow-alt-circle-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-alt-circle-right"></i> fas fa-arrow-alt-circle-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-arrow-alt-circle-right"></i> far fa-arrow-alt-circle-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-alt-circle-up"></i> fas fa-arrow-alt-circle-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-arrow-alt-circle-up"></i> far fa-arrow-alt-circle-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-circle-down"></i> fas fa-arrow-circle-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-circle-left"></i> fas fa-arrow-circle-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-circle-right"></i> fas fa-arrow-circle-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-circle-up"></i> fas fa-arrow-circle-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-down"></i> fas fa-arrow-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-left"></i> fas fa-arrow-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-right"></i> fas fa-arrow-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrow-up"></i> fas fa-arrow-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrows-alt"></i> fas fa-arrows-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrows-alt-h"></i> fas fa-arrows-alt-h
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-arrows-alt-v"></i> fas fa-arrows-alt-v
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-assistive-listening-systems"></i> fas fa-assistive-listening-systems
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-asterisk"></i> fas fa-asterisk
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-asymmetrik"></i> fab fa-asymmetrik
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-at"></i> fas fa-at
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-audible"></i> fab fa-audible
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-audio-description"></i> fas fa-audio-description
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-autoprefixer"></i> fab fa-autoprefixer
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-avianex"></i> fab fa-avianex
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-aviato"></i> fab fa-aviato
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-aws"></i> fab fa-aws
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-backward"></i> fas fa-backward
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-balance-scale"></i> fas fa-balance-scale
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ban"></i> fas fa-ban
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-band-aid"></i> fas fa-band-aid
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-bandcamp"></i> fab fa-bandcamp
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-barcode"></i> fas fa-barcode
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bars"></i> fas fa-bars
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-baseball-ball"></i> fas fa-baseball-ball
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-basketball-ball"></i> fas fa-basketball-ball
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bath"></i> fas fa-bath
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-battery-empty"></i> fas fa-battery-empty
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-battery-full"></i> fas fa-battery-full
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-battery-half"></i> fas fa-battery-half
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-battery-quarter"></i> fas fa-battery-quarter
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-battery-three-quarters"></i> fas fa-battery-three-quarters
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bed"></i> fas fa-bed
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-beer"></i> fas fa-beer
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-behance"></i> fab fa-behance
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-behance-square"></i> fab fa-behance-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bell"></i> fas fa-bell
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-bell"></i> far fa-bell
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bell-slash"></i> fas fa-bell-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-bell-slash"></i> far fa-bell-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bicycle"></i> fas fa-bicycle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-bimobject"></i> fab fa-bimobject
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-binoculars"></i> fas fa-binoculars
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-birthday-cake"></i> fas fa-birthday-cake
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-bitbucket"></i> fab fa-bitbucket
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-bitcoin"></i> fab fa-bitcoin
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-bity"></i> fab fa-bity
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-black-tie"></i> fab fa-black-tie
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-blackberry"></i> fab fa-blackberry
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-blender"></i> fas fa-blender
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-blind"></i> fas fa-blind
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-blogger"></i> fab fa-blogger
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-blogger-b"></i> fab fa-blogger-b
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-bluetooth"></i> fab fa-bluetooth
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-bluetooth-b"></i> fab fa-bluetooth-b
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bold"></i> fas fa-bold
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bolt"></i> fas fa-bolt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bomb"></i> fas fa-bomb
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-book"></i> fas fa-book
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-book-open"></i> fas fa-book-open
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bookmark"></i> fas fa-bookmark
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-bookmark"></i> far fa-bookmark
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bowling-ball"></i> fas fa-bowling-ball
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-box"></i> fas fa-box
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-box-open"></i> fas fa-box-open
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-boxes"></i> fas fa-boxes
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-braille"></i> fas fa-braille
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-briefcase"></i> fas fa-briefcase
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-briefcase-medical"></i> fas fa-briefcase-medical
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-broadcast-tower"></i> fas fa-broadcast-tower
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-broom"></i> fas fa-broom
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-btc"></i> fab fa-btc
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bug"></i> fas fa-bug
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-building"></i> fas fa-building
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-building"></i> far fa-building
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bullhorn"></i> fas fa-bullhorn
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bullseye"></i> fas fa-bullseye
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-burn"></i> fas fa-burn
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-buromobelexperte"></i> fab fa-buromobelexperte
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-bus"></i> fas fa-bus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-buysellads"></i> fab fa-buysellads
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-calculator"></i> fas fa-calculator
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-calendar"></i> fas fa-calendar
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-calendar"></i> far fa-calendar
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-calendar-alt"></i> fas fa-calendar-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-calendar-alt"></i> far fa-calendar-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-calendar-check"></i> fas fa-calendar-check
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-calendar-check"></i> far fa-calendar-check
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-calendar-minus"></i> fas fa-calendar-minus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-calendar-minus"></i> far fa-calendar-minus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-calendar-plus"></i> fas fa-calendar-plus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-calendar-plus"></i> far fa-calendar-plus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-calendar-times"></i> fas fa-calendar-times
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-calendar-times"></i> far fa-calendar-times
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-camera"></i> fas fa-camera
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-camera-retro"></i> fas fa-camera-retro
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-capsules"></i> fas fa-capsules
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-car"></i> fas fa-car
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-caret-down"></i> fas fa-caret-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-caret-left"></i> fas fa-caret-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-caret-right"></i> fas fa-caret-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-caret-square-down"></i> fas fa-caret-square-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-caret-square-down"></i> far fa-caret-square-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-caret-square-left"></i> fas fa-caret-square-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-caret-square-left"></i> far fa-caret-square-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-caret-square-right"></i> fas fa-caret-square-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-caret-square-right"></i> far fa-caret-square-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-caret-square-up"></i> fas fa-caret-square-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-caret-square-up"></i> far fa-caret-square-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-caret-up"></i> fas fa-caret-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-cart-arrow-down"></i> fas fa-cart-arrow-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-cart-plus"></i> fas fa-cart-plus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cc-amazon-pay"></i> fab fa-cc-amazon-pay
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cc-amex"></i> fab fa-cc-amex
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cc-apple-pay"></i> fab fa-cc-apple-pay
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cc-diners-club"></i> fab fa-cc-diners-club
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cc-discover"></i> fab fa-cc-discover
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cc-jcb"></i> fab fa-cc-jcb
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cc-mastercard"></i> fab fa-cc-mastercard
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cc-paypal"></i> fab fa-cc-paypal
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cc-stripe"></i> fab fa-cc-stripe
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cc-visa"></i> fab fa-cc-visa
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-centercode"></i> fab fa-centercode
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-certificate"></i> fas fa-certificate
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chalkboard"></i> fas fa-chalkboard
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chalkboard-teacher"></i> fas fa-chalkboard-teacher
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chart-area"></i> fas fa-chart-area
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chart-bar"></i> fas fa-chart-bar
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-chart-bar"></i> far fa-chart-bar
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chart-line"></i> fas fa-chart-line
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chart-pie"></i> fas fa-chart-pie
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-check"></i> fas fa-check
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-check-circle"></i> fas fa-check-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-check-circle"></i> far fa-check-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-check-square"></i> fas fa-check-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-check-square"></i> far fa-check-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chess"></i> fas fa-chess
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chess-bishop"></i> fas fa-chess-bishop
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chess-board"></i> fas fa-chess-board
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chess-king"></i> fas fa-chess-king
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chess-knight"></i> fas fa-chess-knight
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chess-pawn"></i> fas fa-chess-pawn
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chess-queen"></i> fas fa-chess-queen
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chess-rook"></i> fas fa-chess-rook
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chevron-circle-down"></i> fas fa-chevron-circle-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chevron-circle-left"></i> fas fa-chevron-circle-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chevron-circle-right"></i> fas fa-chevron-circle-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chevron-circle-up"></i> fas fa-chevron-circle-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chevron-down"></i> fas fa-chevron-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chevron-left"></i> fas fa-chevron-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chevron-right"></i> fas fa-chevron-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-chevron-up"></i> fas fa-chevron-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-child"></i> fas fa-child
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-chrome"></i> fab fa-chrome
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-church"></i> fas fa-church
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-circle"></i> fas fa-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-circle"></i> far fa-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-circle-notch"></i> fas fa-circle-notch
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-clipboard"></i> fas fa-clipboard
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-clipboard"></i> far fa-clipboard
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-clipboard-check"></i> fas fa-clipboard-check
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-clipboard-list"></i> fas fa-clipboard-list
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-clock"></i> fas fa-clock
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-clone"></i> fas fa-clone
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-clone"></i> far fa-clone
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-closed-captioning"></i> fas fa-closed-captioning
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-closed-captioning"></i> far fa-closed-captioning
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-cloud"></i> fas fa-cloud
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-cloud-download-alt"></i> fas fa-cloud-download-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-cloud-upload-alt"></i> fas fa-cloud-upload-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cloudscale"></i> fab fa-cloudscale
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cloudsmith"></i> fab fa-cloudsmith
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cloudversify"></i> fab fa-cloudversify
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-code"></i> fas fa-code
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-code-branch"></i> fas fa-code-branch
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-codepen"></i> fab fa-codepen
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-codiepie"></i> fab fa-codiepie
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-coffee"></i> fas fa-coffee
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-cog"></i> fas fa-cog
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-cogs"></i> fas fa-cogs
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-coins"></i> fas fa-coins
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-columns"></i> fas fa-columns
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-comment"></i> fas fa-comment
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-comment"></i> far fa-comment
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-comment-alt"></i> fas fa-comment-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-comment-alt"></i> far fa-comment-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-comment-dots"></i> fas fa-comment-dots
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-comment-dots"></i> far fa-comment-dots
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-comment-slash"></i> fas fa-comment-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-comments"></i> fas fa-comments
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-comments"></i> far fa-comments
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-compact-disc"></i> fas fa-compact-disc
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-compass"></i> fas fa-compass
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-compass"></i> far fa-compass
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-compress"></i> fas fa-compress
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-connectdevelop"></i> fab fa-connectdevelop
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-contao"></i> fab fa-contao
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-copy"></i> fas fa-copy
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-copy"></i> far fa-copy
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-copyright"></i> fas fa-copyright
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-copyright"></i> far fa-copyright
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-couch"></i> fas fa-couch
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cpanel"></i> fab fa-cpanel
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons"></i> fab fa-creative-commons
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-by"></i> fab fa-creative-commons-by
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-nc"></i> fab fa-creative-commons-nc
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-nc-eu"></i> fab fa-creative-commons-nc-eu
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-nc-jp"></i> fab fa-creative-commons-nc-jp
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-nd"></i> fab fa-creative-commons-nd
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-pd"></i> fab fa-creative-commons-pd
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-pd-alt"></i> fab fa-creative-commons-pd-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-remix"></i> fab fa-creative-commons-remix
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-sa"></i> fab fa-creative-commons-sa
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-sampling"></i> fab fa-creative-commons-sampling 
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-sampling-plus"></i> fab fa-creative-commons-sampling-plus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-creative-commons-share"></i> fab fa-creative-commons-share
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-credit-card"></i> fas fa-credit-card
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-credit-card"></i> far fa-credit-card
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-crop"></i> fas fa-crop
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-crosshairs"></i> fas fa-crosshairs
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-crow"></i> fas fa-crow
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-crown"></i> fas fa-crown
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-css3"></i> fab fa-css3
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-css3-alt"></i> fab fa-css3-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-cube"></i> fas fa-cube
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-cubes"></i> fas fa-cubes
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-cut"></i> fas fa-cut
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-cuttlefish"></i> fab fa-cuttlefish
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-d-and-d"></i> fab fa-d-and-d
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-dashcube"></i> fab fa-dashcube
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-database"></i> fas fa-database
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-deaf"></i> fas fa-deaf
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-delicious"></i> fab fa-delicious
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-deploydog"></i> fab fa-deploydog
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-deskpro"></i> fab fa-deskpro
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-desktop"></i> fas fa-desktop
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-deviantart"></i> fab fa-deviantart
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-diagnoses"></i> fas fa-diagnoses
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dice"></i> fas fa-dice
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dice-five"></i> fas fa-dice-five
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dice-four"></i> fas fa-dice-four
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dice-one"></i> fas fa-dice-one
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dice-six"></i> fas fa-dice-six
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dice-three"></i> fas fa-dice-three
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dice-two"></i> fas fa-dice-two
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-digg"></i> fab fa-digg
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-digital-ocean"></i> fab fa-digital-ocean
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-discord"></i> fab fa-discord
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-discourse"></i> fab fa-discourse
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-divide"></i>fas fa-divide 
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dna"></i> fas fa-dna
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-dochub"></i> fab fa-dochub
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-docker"></i> fab fa-docker
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dollar-sign"></i> fas fa-dollar-sign
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dolly"></i> fas fa-dolly
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dolly-flatbed"></i> fas fa-dolly-flatbed
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-donate"></i> fas fa-donate
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-door-closed"></i> fas fa-door-closed 
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-door-open"></i> fas fa-door-open
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dot-circle"></i> fas fa-dot-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-dot-circle"></i> far fa-dot-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dove"></i> fas fa-dove
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-download"></i> fas fa-download
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-draft2digital"></i> fab fa-draft2digital
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-dribbble"></i> fab fa-dribbble
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-dribbble-square"></i> fab fa-dribbble-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-dropbox"></i> fab fa-dropbox
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-drupal"></i> fab fa-drupal
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-dumbbell"></i> fas fa-dumbbell
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-dyalog"></i> fab fa-dyalog
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-earlybirds"></i> fab fa-earlybirds
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-ebay"></i> fab fa-ebay
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-edge"></i> fab fa-edge
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-edit"></i> fas fa-edit
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-edit"></i> far fa-edit
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-eject"></i> fas fa-eject
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-elementor"></i> fab fa-elementor
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ellipsis-h"></i> fas fa-ellipsis-h
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ellipsis-v"></i> fas fa-ellipsis-v
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-ember"></i> fab fa-ember
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-empire"></i> fab fa-empire
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-envelope"></i> fas fa-envelope
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-envelope"></i> far fa-envelope
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-envelope-open"></i> fas fa-envelope-open
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-envelope-open"></i> far fa-envelope-open
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-envelope-square"></i> fas fa-envelope-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-envira"></i> fab fa-envira
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-equals"></i> fas fa-equals
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-eraser"></i> fas fa-eraser
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-erlang"></i> fab fa-erlang
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-ethereum"></i> fab fa-ethereum
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-etsy"></i> fab fa-etsy
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-euro-sign"></i> fas fa-euro-sign
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-exchange-alt"></i> fas fa-exchange-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-exclamation"></i> fas fa-exclamation
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-exclamation-circle"></i> fas fa-exclamation-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-exclamation-triangle"></i> fas fa-exclamation-triangle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-expand"></i> fas fa-expand
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-expand-arrows-alt"></i> fas fa-expand-arrows-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-expeditedssl"></i> fab fa-expeditedssl
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-external-link-alt"></i> fas fa-external-link-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-external-link-square-alt"></i> fas fa-external-link-square-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-eye"></i> fas fa-eye
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-eye"></i> far fa-eye
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-eye-dropper"></i> fas fa-eye-dropper
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-eye-slash"></i> fas fa-eye-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-eye-slash"></i> far fa-eye-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-facebook"></i> fab fa-facebook
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-facebook-f"></i> fab fa-facebook-f
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-facebook-messenger"></i> fab fa-facebook-messenger
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-facebook-square"></i> fab fa-facebook-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-fast-backward"></i> fas fa-fast-backward
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-fast-forward"></i> fas fa-fast-forward
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-fax"></i> fas fa-fax
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-feather"></i> fas fa-feather
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-female"></i> fas fa-female
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-fighter-jet"></i> fas fa-fighter-jet
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file"></i> fas fa-file
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file"></i> far fa-file
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-alt"></i> fas fa-file-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file-alt"></i> far fa-file-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-archive"></i> fas fa-file-archive
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file-archive"></i> far fa-file-archive
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-audio"></i> fas fa-file-audio
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file-audio"></i> far fa-file-audio
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-code"></i> fas fa-file-code
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file-code"></i> far fa-file-code
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-excel"></i> fas fa-file-excel
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file-excel"></i> far fa-file-excel
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-image"></i> fas fa-file-image
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file-image"></i> far fa-file-image
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-medical"></i> fas fa-file-medical
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-medical-alt"></i> fas fa-file-medical-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-pdf"></i> fas fa-file-pdf
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file-pdf"></i> far fa-file-pdf
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-powerpoint"></i> fas fa-file-powerpoint
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file-powerpoint"></i> far fa-file-powerpoint
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-video"></i> fas fa-file-video
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file-video"></i> far fa-file-video
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-file-word"></i> fas fa-file-word
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-file-word"></i> far fa-file-word
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-film"></i> fas fa-film
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-filter"></i> fas fa-filter
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-fire"></i> fas fa-fire
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-fire-extinguisher"></i> fas fa-fire-extinguisher
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-firefox"></i> fab fa-firefox
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-first-aid"></i> fas fa-first-aid
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-first-order"></i> fab fa-first-order
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-first-order-alt"></i> fab fa-first-order-alt 
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-firstdraft"></i> fab fa-firstdraft
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-flag"></i> fas fa-flag
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-flag"></i> far fa-flag
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-flag-checkered"></i> fas fa-flag-checkered
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-flask"></i> fas fa-flask
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-flickr"></i> fab fa-flickr
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-flipboard"></i> fab fa-flipboard
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-fly"></i> fab fa-fly
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-folder"></i> fas fa-folder
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-folder"></i> far fa-folder
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-folder-open"></i> fas fa-folder-open
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-folder-open"></i> far fa-folder-open
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-font"></i> fas fa-font
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-font-awesome"></i> fab fa-font-awesome
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-font-awesome-alt"></i> fab fa-font-awesome-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-font-awesome-flag"></i> fab fa-font-awesome-flag
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-fonticons"></i> fab fa-fonticons
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-fonticons-fi"></i> fab fa-fonticons-fi
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-football-ball"></i> fas fa-football-ball
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-fort-awesome"></i> fab fa-fort-awesome
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-fort-awesome-alt"></i> fab fa-fort-awesome-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-forumbee"></i> fab fa-forumbee
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-forward"></i> fas fa-forward
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-foursquare"></i> fab fa-foursquare
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-free-code-camp"></i> fab fa-free-code-camp
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-freebsd"></i> fab fa-freebsd
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-frog"></i> fas fa-frog
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-frown"></i> fas fa-frown
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-frown"></i> far fa-frown
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-fulcrum"></i> fab fa-fulcrum
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-futbol"></i> fas fa-futbol
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-futbol"></i> far fa-futbol
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-galactic-republic"></i> fab fa-galactic-republic
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-galactic-senate"></i> fab fa-galactic-senate
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-gamepad"></i> fas fa-gamepad
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-gas-pump"></i> fas fa-gas-pump
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-gavel"></i> fas fa-gavel
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-gem"></i> fas fa-gem
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-gem"></i> far fa-gem
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-genderless"></i> fas fa-genderless
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-get-pocket"></i> fab fa-get-pocket
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-gg"></i> fab fa-gg
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-gg-circle"></i> fab fa-gg-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-gift"></i> fas fa-gift
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-git"></i> fab fa-git
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-git-square"></i> fab fa-git-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-github"></i> fab fa-github
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-github-alt"></i> fab fa-github-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-github-square"></i> fab fa-github-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-gitkraken"></i> fab fa-gitkraken
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-gitlab"></i> fab fa-gitlab
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-gitter"></i> fab fa-gitter
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-glass-glass-cocktail"></i> fas fa-glass-glass-cocktail
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-glasses"></i> fas fa-glasses
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-glide"></i> fab fa-glide
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-glide-g"></i> fab fa-glide-g
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-globe"></i> fas fa-globe
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-gofore"></i> fab fa-gofore
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-golf-ball"></i> fas fa-golf-ball
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-goodreads"></i> fab fa-goodreads
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-goodreads-g"></i> fab fa-goodreads-g
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-google"></i> fab fa-google
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-google-drive"></i> fab fa-google-drive
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-google-play"></i> fab fa-google-play
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-google-plus"></i> fab fa-google-plus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-google-plus-g"></i> fab fa-google-plus-g
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-google-plus-square"></i> fab fa-google-plus-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-google-wallet"></i> fab fa-google-wallet
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-graduation-cap"></i> fas fa-graduation-cap
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-gratipay"></i> fab fa-gratipay
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-grav"></i> fab fa-grav
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-greater-than"></i> fas fa-greater-than
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-greater-than-equal"></i> fas fa-greater-than-equal
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-gripfire"></i> fab fa-gripfire
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-grunt"></i> fab fa-grunt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-gulp"></i> fab fa-gulp
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-h-square"></i> fas fa-h-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-hacker-news"></i> fab fa-hacker-news
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-hacker-news-square"></i> fab fa-hacker-news-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-holding"></i> fas fa-hand-holding
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-holding-heart"></i> fas fa-hand-holding-heart
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-holding-usd"></i> fas fa-hand-holding-usd
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-lizard"></i> fas fa-hand-lizard
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-lizard"></i> far fa-hand-lizard
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-paper"></i> fas fa-hand-paper
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-paper"></i> far fa-hand-paper
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-peace"></i> fas fa-hand-peace
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-peace"></i> far fa-hand-peace
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-point-down"></i> fas fa-hand-point-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-point-down"></i> far fa-hand-point-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-point-left"></i> fas fa-hand-point-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-point-left"></i> far fa-hand-point-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-point-right"></i> fas fa-hand-point-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-point-right"></i> far fa-hand-point-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-point-up"></i> fas fa-hand-point-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-point-up"></i> far fa-hand-point-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-pointer"></i> fas fa-hand-pointer
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-pointer"></i> far fa-hand-pointer
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-rock"></i> fas fa-hand-rock
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-rock"></i> far fa-hand-rock
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-scissors"></i> fas fa-hand-scissors
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-scissors"></i> far fa-hand-scissors
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hand-spock"></i> fas fa-hand-spock
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hand-spock"></i> far fa-hand-spock
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hands"></i> fas fa-hands
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hands-helping"></i> fas fa-hands-helping
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-handshake"></i> fas fa-handshake
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-handshake"></i> far fa-handshake
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hashtag"></i> fas fa-hashtag
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hdd"></i> fas fa-hdd
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hdd"></i> far fa-hdd
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-heading"></i> fas fa-heading
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-headphones"></i> fas fa-headphones
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-heart"></i> fas fa-heart
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-heart"></i> far fa-heart
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-heartbeat"></i> fas fa-heartbeat
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-helicopter"></i> fas fa-helicopter
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-hips"></i> fab fa-hips
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-hire-a-helper"></i> fab fa-hire-a-helper
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-history"></i> fas fa-history
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hockey-puck"></i> fas fa-hockey-puck
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-home"></i> fas fa-home
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-hooli"></i> fab fa-hooli
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hospital"></i> fas fa-hospital
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hospital"></i> far fa-hospital
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hospital-alt"></i> fas fa-hospital-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hospital-symbol"></i> fas fa-hospital-symbol
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-hotjar"></i> fab fa-hotjar
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hourglass"></i> fas fa-hourglass
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-hourglass"></i> far fa-hourglass
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hourglass-half"></i> fas fa-hourglass-half
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-hourglass-start"></i> fas fa-hourglass-start
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-houzz"></i> fab fa-houzz
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-html5"></i> fab fa-html5
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-hubspot"></i> fab fa-hubspot
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-i-cursor"></i> fas fa-i-cursor
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-id-badge"></i> fas fa-id-badge
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-id-badge"></i> far fa-id-badge 
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-id-card"></i> fas fa-id-card
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-id-card"></i> far fa-id-card
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-id-card-alt"></i> fas fa-id-card-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-image"></i> fas fa-image
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-image"></i> far fa-image
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-images"></i> fas fa-images
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-images"></i> far fa-images
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-imdb"></i> fab fa-imdb
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-inbox"></i> fas fa-inbox
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-indent"></i> fas fa-indent
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-industry"></i> fas fa-industry
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-infinity"></i> fas fa-infinity
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-info"></i> fas fa-info
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-info-circle"></i> fas fa-info-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-instagram"></i> fab fa-instagram
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-internet-explorer"></i> fab fa-internet-explorer
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-ioxhost"></i> fab fa-ioxhost
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-italic"></i> fas fa-italic
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-itunes"></i> fab fa-itunes
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-itunes-note"></i> fab fa-itunes-note
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-java"></i> fab fa-java
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-jedi-order"></i> fab fa-jedi-order
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-jenkins"></i> fab fa-jenkins
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-joget"></i> fab fa-joget
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-joomla"></i> fab fa-joomla
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-js"></i> fab fa-js
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-js-square"></i> fab fa-js-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-jsfiddle"></i> fab fa-jsfiddle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-key"></i> fas fa-key
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-keybase"></i> fab fa-keybase
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-keyboard"></i> fas fa-keyboard
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-keyboard"></i> far fa-keyboard
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-keycdn"></i> fab fa-keycdn
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-kickstarter"></i> fab fa-kickstarter
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-kickstarter-k"></i> fab fa-kickstarter-k
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-kiwi-bird"></i> fas fa-kiwi-bird
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-korvue"></i> fab fa-korvue
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-language"></i> fas fa-language
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-laptop"></i> fas fa-laptop
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-laravel"></i> fab fa-laravel
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-lastfm"></i> fab fa-lastfm
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-lastfm-square"></i> fab fa-lastfm-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-leaf"></i> fas fa-leaf
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-leanpub"></i> fab fa-leanpub
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-lemon"></i> fas fa-lemon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-lemon"></i> far fa-lemon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-less"></i> fab fa-less
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-less-than"></i> fas fa-less-than
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-less-than-equal"></i> fas fa-less-than-equal
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-level-down-alt"></i> fas fa-level-down-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-level-up-alt"></i> fas fa-level-up-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-life-ring"></i> fas fa-life-ring
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-life-ring"></i> far fa-life-ring
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-lightbulb"></i> fas fa-lightbulb
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-lightbulb"></i> far fa-lightbulb
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-line"></i> fab fa-line
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-link"></i> fas fa-link
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-linkedin"></i> fab fa-linkedin
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-linkedin-in"></i> fab fa-linkedin-in
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-linode"></i> fab fa-linode
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-linux"></i> fab fa-linux
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-lira-sign"></i> fas fa-lira-sign
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-list"></i> fas fa-list
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-list-alt"></i> fas fa-list-alts
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-list-alt"></i> far fa-list-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-list-ol"></i> fas fa-list-ol
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-list-ul"></i> fas fa-list-ul
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-location-arrow"></i> fas fa-location-arrow
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-lock"></i> fas fa-lock
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-lock-open"></i> fas fa-lock-open
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-long-arrow-alt-down"></i> fas fa-long-arrow-alt-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-long-arrow-alt-left"></i> fas fa-long-arrow-alt-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-long-arrow-alt-right"></i> fas fa-long-arrow-alt-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-long-arrow-alt-up"></i> fas fa-long-arrow-alt-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-low-vision"></i> fas fa-low-vision
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-lyft"></i> fab fa-lyft
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-magento"></i> fab fa-magento
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-magic"></i> fas fa-magic
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-magnet"></i> fas fa-magnet
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-male"></i> fas fa-male
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-mandalorian"></i> fab fa-mandalorian
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-map"></i> fas fa-map
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-map"></i> far fa-map
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-map-marker"></i> fas fa-map-marker
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-map-marker-alt"></i> fas fa-map-marker-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-map-pin"></i> fas fa-map-pin
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-map-signs"></i> fas fa-map-signs
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-mars"></i> fas fa-mars
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-mars-double"></i> fas fa-mars-double
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-mars-stroke"></i> fas fa-mars-stroke
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-mars-stroke-h"></i> fas fa-mars-stroke-h
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-mars-stroke-v"></i> fas fa-mars-stroke-v
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-mastodon"></i> fab fa-mastodon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-maxcdn"></i> fab fa-maxcdn
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-medapps"></i> fab fa-medapps
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-medium"></i> fab fa-medium
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-medium-m"></i> fab fa-medium-m
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-medkit"></i> fas fa-medkit
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-medrt"></i> fab fa-medrt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-meetup"></i> fab fa-meetup
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-meh"></i> fas fa-meh
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-meh"></i> far fa-meh
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-mercury"></i> fas fa-mercury
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-microchip"></i> fas fa-microchip
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-microphone"></i> fas fa-microphone
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-microphone-alt"></i> fas fa-microphone-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-microphone-alt-slash"></i> fas fa-microphone-alt-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-microphone-slash"></i> fas fa-microphone-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-microsoft"></i> fab fa-microsoft
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-minus"></i> fas fa-minus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-minus-circle"></i> fas fa-minus-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-minus-square"></i> fas fa-minus-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-minus-square"></i> far fa-minus-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-mix"></i> fab fa-mix
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-mixcloud"></i> fab fa-mixcloud
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-mizuni"></i> fab fa-mizuni
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-mobile"></i> fas fa-mobile
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-mobile-alt"></i> fas fa-mobile-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-modx"></i> fab fa-modx
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-monero"></i> fab fa-monero
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-money-bill"></i> fas fa-money-bill
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-money-bill-alt"></i> fas fa-money-bill-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-money-bill-alt"></i> far fa-money-bill-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-money-bill-wave"></i> fas fa-money-bill-wave
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-money-bill-wave-alt"></i> fas fa-money-bill-wave-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-money-check"></i> fas fa-money-check
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-money-check-alt"></i> fas fa-money-check-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-moon"></i> fas fa-moon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-moon"></i> far fa-moon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-motorcycle"></i> fas fa-motorcycle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-mouse-pointer"></i> fas fa-mouse-pointer
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-music"></i> fas fa-music
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-napster"></i> fab fa-napster
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-neuter"></i> fas fa-neuter
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-newspaper"></i> fas fa-newspaper
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-newspaper"></i> far fa-newspaper
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-nintendo-switch"></i> fab fa-nintendo-switch
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-node"></i> fab fa-node
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-node-js"></i> fab fa-node-js
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-not-equal"></i> fas fa-not-equal
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-notes-medical"></i> fas fa-notes-medical
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-npm"></i> fab fa-npm
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-ns8"></i> fab fa-ns8
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-nutritionix"></i> fab fa-nutritionix
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-object-group"></i> fas fa-object-group
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-object-group"></i> far fa-object-group
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-object-ungroup"></i> fas fa-object-ungroup
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-object-ungroup"></i> far fa-object-ungroup
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-odnoklassniki"></i> fab fa-odnoklassniki 
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-odnoklassniki-square"></i> fab fa-odnoklassniki-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-old-republic"></i> fab fa-old-republic
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-opencart"></i> fab fa-opencart
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-openid"></i> fab fa-openid
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-opera"></i> fab fa-opera
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-optin-monster"></i> fab fa-optin-monster
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-osi"></i> fab fa-osi
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-outdent"></i> fas fa-outdent
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-page4"></i> fab fa-page4
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-pagelines"></i> fab fa-pagelines
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-paint-brush"></i> fas fa-paint-brush
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-palette"></i> fas fa-palette
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-palfed"></i> fab fa-palfed
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-pallet"></i> fas fa-pallet
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-paper-plane"></i> fas fa-paper-plane
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-paper-plane"></i> far fa-paper-plane
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-paperclip"></i> fas fa-paperclip
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-parachute-box"></i> fas fa-parachute-box
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-paragraph"></i> fas fa-paragraph
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-parking"></i> fas fa-parking
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-paste"></i> fas fa-paste
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-patreon"></i> fab fa-patreon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-pause"></i> fas fa-pause
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-pause-circle"></i> fas fa-pause-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-pause-circle"></i> far fa-pause-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-paw"></i> fas fa-paw
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-paypal"></i> fab fa-paypal
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-pen-square"></i> fas fa-pen-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-pencil-alt"></i> fas fa-pencil-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-people-carry"></i> fas fa-people-carry
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-percent"></i> fas fa-percent
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-percentage"></i> fas fa-percentage
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-periscope"></i> fab fa-periscope
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-phabricator"></i> fab fa-phabricator
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-phoenix-framework"></i> fab fa-phoenix-framework
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-phoenix-squadron"></i> fab fa-phoenix-squadron
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-phone"></i> fas fa-phone
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-phone-slash"></i> fas fa-phone-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-phone-square"></i> fas fa-phone-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-phone-volume"></i> fas fa-phone-volume
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-php"></i> fab fa-php
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-pied-piper"></i> fab fa-pied-piper
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-pied-piper-alt"></i> fab fa-pied-piper-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-pied-piper-hat"></i> fab fa-pied-piper-hat
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-pied-piper-pp"></i> fab fa-pied-piper-pp
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-piggy-bank"></i> fas fa-piggy-bank
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-pills"></i> fas fa-pills
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-pinterest"></i> fab fa-pinterest
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-pinterest-p"></i> fab fa-pinterest-p
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-pinterest-square"></i> fab fa-pinterest-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-plane"></i> fas fa-plane
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-play"></i> fas fa-play
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-play-circle"></i> fas fa-play-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-play-circle"></i> far fa-play-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-playstation"></i> fab fa-playstation
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-plug"></i> fas fa-plug
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-plus"></i> fas fa-plus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-plus-circle"></i> fas fa-plus-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-plus-square"></i> fas fa-plus-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-plus-square"></i> far fa-plus-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-podcast"></i> fas fa-podcast
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-poo"></i> fas fa-poo
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-portrait"></i> fas fa-portrait
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-pound-sign"></i> fas fa-pound-sign
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-power-off"></i> fas fa-power-off
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-prescription-bottle"></i> fas fa-prescription-bottle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-prescription-bottle-alt"></i> fas fa-prescription-bottle-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-print"></i> fas fa-print
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-procedures"></i> fas fa-procedures
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-product-hunt"></i> fab fa-product-hunt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-project-diagram"></i> fas fa-project-diagram
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-pushed"></i> fab fa-pushed
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-puzzle-piece"></i> fas fa-puzzle-piece
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-python"></i> fab fa-python
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-qq"></i> fab fa-qq
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-qrcode"></i> fas fa-qrcode
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-question"></i> fas fa-question
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-question-circle"></i> fas fa-question-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-question-circle"></i> far fa-question-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-quidditch"></i> fas fa-quidditch
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-quinscape"></i> fab fa-quinscape
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-quora"></i> fab fa-quora
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-quote-left"></i> fas fa-quote-left
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-quote-right"></i> fas fa-quote-right
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-r-project"></i> fab fa-r-project
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-random"></i> fas fa-random
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-ravelry"></i> fab fa-ravelry
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-react"></i> fab fa-react
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-readme"></i> fab fa-readme
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-rebel"></i> fab fa-rebel
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-receipt"></i> fas fa-receipt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-recycle"></i> fas fa-recycle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-red-river"></i> fab fa-red-river
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-reddit"></i> fab fa-reddit
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-reddit-alien"></i> fab fa-reddit-alien
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-reddit-square"></i> fab fa-reddit-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-redo"></i> fas fa-redo
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-redo-alt"></i> fas fa-redo-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-registered"></i> fas fa-registered
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-registered"></i> far fa-registered
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-rendact"></i> fab fa-rendact
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-renren"></i> fab fa-renren
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-reply"></i> fas fa-reply
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-reply-all"></i> fas fa-reply-all
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-replyd"></i> fab fa-replyd
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-researchgate"></i> fab fa-researchgate
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-resolving"></i> fab fa-resolving
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-retweet"></i> fas fa-retweet
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ribbon"></i> fas fa-ribbon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-road"></i> fas fa-road
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-robot"></i> fas fa-robot
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-rocket"></i> fas fa-rocket
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-rocketchat"></i> fab fa-rocketchat
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-rockrms"></i> fab fa-rockrms
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-rss"></i> fas fa-rss
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-rss-square"></i> fas fa-rss-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ruble-sign"></i> fas fa-ruble-sign
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ruler"></i> fas fa-ruler
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ruler-combined"></i> fas fa-ruler-combined
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ruler-horizontal"></i> fas fa-ruler-horizontal
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ruler-vertical"></i> fas fa-ruler-vertical
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-rupee-sign"></i> fas fa-rupee-sign
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-safari"></i> fab fa-safari
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-sass"></i> fab fa-sass
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-save"></i> fas fa-save
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-save"></i> far fa-save
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-schlix"></i> fab fa-schlix
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-school"></i> fas fa-school
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-screwdriver"></i> fas fa-screwdriver
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-scribd"></i> fab fa-scribd
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-search"></i> fas fa-search
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-search-minus"></i> fas fa-search-minus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-search-plus"></i> fas fa-search-plus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-searchengin"></i> fab fa-searchengin
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-seedling"></i> fas fa-seedling
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-sellcast"></i> fab fa-sellcast
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-sellsy"></i> fab fa-sellsy
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-server"></i> fas fa-server
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-servicestack"></i> fab fa-servicestack
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-share"></i> fas fa-share
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-share-alt"></i> fas fa-share-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-share-alt-square"></i> fas fa-share-alt-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-share-square"></i> fas fa-share-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-share-square"></i> far fa-share-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-shekel-sign"></i> fas fa-shekel-sign
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-shield-alt"></i> fas fa-shield-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ship"></i> fas fa-ship
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-shipping-fast"></i> fas fa-shipping-fast
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-shirtsinbulk"></i> fab fa-shirtsinbulk
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-shoe-prints"></i> fas fa-shoe-prints
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-shopping-bag"></i> fas fa-shopping-bag
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-shopping-basket"></i> fas fa-shopping-basket
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-shopping-cart"></i> fas fa-shopping-cart
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-shower"></i> fas fa-shower
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sign"></i> fas fa-sign
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sign-in-alt"></i> fas fa-sign-in-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sign-language"></i> fas fa-sign-language
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sign-out-alt"></i> fas fa-sign-out-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-signal"></i> fas fa-signal
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-simplybuilt"></i> fab fa-simplybuilt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-sistrix"></i> fab fa-sistrix
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sitemap"></i> fas fa-sitemap
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-sith"></i> fab fa-sith
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-skull"></i> fas fa-skull
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-skyatlas"></i> fab fa-skyatlas
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-skype"></i> fab fa-skype
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-slack"></i> fab fa-slack
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-slack-hash"></i> fab fa-slack-hash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sliders-h"></i> fas fa-sliders-h
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-slideshare"></i> fab fa-slideshare
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-smile"></i> fas fa-smile
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-smile"></i> far fa-smile
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-smoking"></i> fas fa-smoking
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-smoking-ban"></i> fas fa-smoking-ban
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-snapchat"></i> fab fa-snapchat
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-snapchat-ghost"></i> fab fa-snapchat-ghost
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-snapchat-square"></i> fab fa-snapchat-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-snowflake"></i> fas fa-snowflake
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-snowflake"></i> far fa-snowflake
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sort"></i> fas fa-sort
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sort-alpha-down"></i> fas fa-sort-alpha-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sort-alpha-up"></i> fas fa-sort-alpha-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sort-amount-down"></i> fas fa-sort-amount-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sort-amount-up"></i> fas fa-sort-amount-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sort-down"></i> fas fa-sort-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sort-numeric-down"></i> fas fa-sort-numeric-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sort-numeric-up"></i> fas fa-sort-numeric-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sort-up"></i> fas fa-sort-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-soundcloud"></i> fab fa-soundcloud
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-space-shuttle"></i> fas fa-space-shuttle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-speakap"></i> fab fa-speakap
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-spinner"></i> fas fa-spinner
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-spotify"></i> fab fa-spotify
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-square"></i> fas fa-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-square"></i> far fa-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-square-full"></i> fas fa-square-full
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-stack-exchange"></i> fab fa-stack-exchange
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-stack-overflow"></i> fab fa-stack-overflow
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-star"></i> fas fa-star
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-star"></i> far fa-star
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-star-half"></i> fas fa-star-half
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-star-half"></i> far fa-star-half
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-staylinked"></i> fab fa-staylinked
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-steam"></i> fab fa-steam
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-steam-square"></i> fab fa-steam-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-steam-symbol"></i> fab fa-steam-symbol
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-step-backward"></i> fas fa-step-backward
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-step-forward"></i> fas fa-step-forward
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-stethoscope"></i> fas fa-stethoscope
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-sticker-mule"></i> fab fa-sticker-mule
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sticky-note"></i> fas fa-sticky-note
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-sticky-note"></i> far fa-sticky-note
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-stop"></i> fas fa-stop
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-stop-circle"></i> fas fa-stop-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-stop-circle"></i> far fa-stop-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-stopwatch"></i> fas fa-stopwatch
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-store"></i> fas fa-store
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-store-alt"></i> fas fa-store-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-strava"></i> fab fa-strava
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-stream"></i> fas fa-stream
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-street-view"></i> fas fa-street-view
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-strikethrough"></i> fas fa-strikethrough
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-stripe"></i> fab fa-stripe
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-stripe-s"></i> fab fa-stripe-s 
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-stroopwafel"></i> fas fa-stroopwafel
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-studiovinari"></i> fab fa-studiovinari
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-stumbleupon"></i> fab fa-stumbleupon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-stumbleupon-circle"></i> fab fa-stumbleupon-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-subscript"></i> fas fa-subscript
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-subway"></i> fas fa-subway
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-suitcase"></i> fas fa-suitcase
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sun"></i> fas fa-sun
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-sun"></i> far fa-sun
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-superpowers"></i> fab fa-superpowers
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-superscript"></i> fas fa-superscript
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-supple"></i> fab fa-supple
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sync"></i> fas fa-sync
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-sync-alt"></i> fas fa-sync-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-syringe"></i> fas fa-syringe
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-table"></i> fas fa-table
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-table-tennis"></i> fas fa-table-tennis
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tablet"></i> fas fa-tablet
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tablet-alt"></i> fas fa-tablet-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tablets"></i> fas fa-tablets
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tachometer-alt"></i> fas fa-tachometer-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tag"></i> fas fa-tag
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tags"></i> fas fa-tags
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tape"></i> fas fa-tape
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tasks"></i> fas fa-tasks
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-taxi"></i> fas fa-taxi
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-teamspeak"></i> fab fa-teamspeak
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-telegram"></i> fab fa-telegram
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-telegram-plane"></i> fab fa-telegram-plane
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-tencent-weibo"></i> fab fa-tencent-weibo
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-terminal"></i> fas fa-terminal
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-text-height"></i> fas fa-text-height
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-text-width"></i> fas fa-text-width
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-th"></i> fas fa-th
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-th-large"></i> fas fa-th-large
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-th-list"></i> fas fa-th-list
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-themeisle"></i> fab fa-themeisle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-thermometer"></i> fas fa-thermometer
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-thermometer-empty"></i> fas fa-thermometer-empty
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-thermometer-full"></i> fas fa-thermometer-full
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-thermometer-half"></i> fas fa-thermometer-half
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-thermometer-quarter"></i> fas fa-thermometer-quarter
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-thermometer-three-quarters"></i> fas fa-thermometer-three-quarters
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-thumbs-down"></i> fas fa-thumbs-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-thumbs-down"></i> far fa-thumbs-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-thumbs-up"></i> fas fa-thumbs-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-thumbs-up"></i> far fa-thumbs-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-thumbtack"></i> fas fa-thumbtack
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-ticket-alt"></i> fas fa-ticket-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-times"></i> fas fa-times
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-times-circle"></i> fas fa-times-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-times-circle"></i> far fa-times-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tint"></i> fas fa-tint
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-toggle-off"></i> fas fa-toggle-off
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-toggle-on"></i> fas fa-toggle-on
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-toolbox"></i> fas fa-toolbox
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-trade-federation"></i> fab fa-trade-federation
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-trademark"></i> fas fa-trademark
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-train"></i> fas fa-train
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-transgender"></i> fas fa-transgender
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-transgender-alt"></i> fas fa-transgender-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-trash"></i> fas fa-trash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-trash-alt"></i> fas fa-trash-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-trash-alt"></i> far fa-trash-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tree"></i> fas fa-tree
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-trello"></i> fab fa-trello
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-tripadvisor"></i> fab fa-tripadvisor
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-trophy"></i> fas fa-trophy
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-truck"></i> fas fa-truck
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-truck-loading"></i> fas fa-truck-loading
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-truck-moving"></i> fas fa-truck-moving
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tshirt"></i> fas fa-tshirt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tty"></i> fas fa-tty
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-tumblr"></i> fab fa-tumblr
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-tumblr-square"></i> fab fa-tumblr-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-tv"></i> fas fa-tv
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-twitch"></i> fab fa-twitch
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-twitter"></i> fab fa-twitter
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-twitter-square"></i> fab fa-twitter-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-typo3"></i> fab fa-typo3
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-uber"></i> fab fa-uber
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-uikit"></i> fab fa-uikit
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-umbrella"></i> fas fa-umbrella
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-underline"></i> fas fa-underline
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-undo"></i> fas fa-undo
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-undo-alt"></i> fas fa-undo-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-uniregistry"></i> fab fa-uniregistry
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-universal-access"></i> fas fa-universal-access
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-university"></i> fas fa-university
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-unlink"></i> fas fa-unlink
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-unlock"></i> fas fa-unlock
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-unlock-alt"></i> fas fa-unlock-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-untappd"></i> fab fa-untappd
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-upload"></i> fas fa-upload
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-usb"></i> fab fa-usb
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user"></i> fas fa-user
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-user"></i> far fa-user
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-alt"></i> fas fa-user-alt
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-alt-slash"></i> fas fa-user-alt-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-astronaut"></i> fas fa-user-astronaut
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-check"></i> fas fa-user-check
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-circle"></i> fas fa-user-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-user-circle"></i> far fa-user-circle
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-clock"></i> fas fa-user-clock
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-cog"></i> fas fa-user-cog
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-edit"></i> fas fa-user-edit
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-friends"></i> fas fa-user-friends
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-graduate"></i> fas fa-user-graduate
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-lock"></i> fas fa-user-lock
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-md"></i> fas fa-user-md
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-minus"></i> fas fa-user-minus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-ninja"></i> fas fa-user-ninja
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-plus"></i> fas fa-user-plus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-secret"></i> fas fa-user-secret
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-shield"></i> fas fa-user-shield
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-slash"></i> fas fa-user-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-tag"></i> fas fa-user-tag
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-tie"></i> fas fa-user-tie
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-user-times"></i> fas fa-user-times
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-users"></i> fas fa-users
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-users-cog"></i> fas fa-users-cog 
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-ussunnah"></i> fab fa-ussunnah
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-utensil-spoon"></i> fas fa-utensil-spoon
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-utensils"></i> fas fa-utensils
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-vaadin"></i> fab fa-vaadin
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-venus"></i> fas fa-venus
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-venus-double"></i> fas fa-venus-double
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-venus-mars"></i> fas fa-venus-mars
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-viacoin"></i> fab fa-viacoin
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-viadeo"></i> fab fa-viadeo
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-viadeo-square"></i> fab fa-viadeo-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-vial"></i> fas fa-vial
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-vials"></i> fas fa-vials
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-viber"></i> fab fa-viber
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-video"></i> fas fa-video
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-video-slash"></i> fas fa-video-slash
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-vimeo"></i> fab fa-vimeo
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-vimeo-square"></i> fab fa-vimeo-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-vimeo-v"></i> fab fa-vimeo-v
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-vine"></i> fab fa-vine
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-vk"></i> fab fa-vk
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-vnv"></i> fab fa-vnv
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-volleyball-ball"></i> fas fa-volleyball-ball
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-volume-down"></i> fas fa-volume-down
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-volume-off"></i> fas fa-volume-off
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-volume-up"></i> fas fa-volume-up
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-vuejs"></i> fab fa-vuejs
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-walking"></i> fas fa-walking
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-wallet"></i> fas fa-wallet
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-warehouse"></i> fas fa-warehouse
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-weibo"></i> fab fa-weibo
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-weight"></i> fas fa-weight
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-weixin"></i> fab fa-weixin
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-whatsapp"></i> fab fa-whatsapp
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-whatsapp-square"></i> fab fa-whatsapp-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-wheelchair"></i> fas fa-wheelchair
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-whmcs"></i> fab fa-whmcs
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-wifi"></i> fas fa-wifi
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-wikipedia-w"></i> fab fa-wikipedia-w
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-window-close"></i> fas fa-window-close
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-window-close"></i> far fa-window-close
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-window-maximize"></i> fas fa-window-maximize
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-window-maximize"></i> far fa-window-maximize
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-window-minimize"></i> fas fa-window-minimize
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-window-restore"></i> fas fa-window-restore
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="far fa-window-restore"></i> far fa-window-restore
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-windows"></i> fab fa-windows
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-wine-glass"></i> fas fa-wine-glass
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-wolf-pack-battalion"></i> fab fa-wolf-pack-battalion
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-won-sign"></i> fas fa-won-sign
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-wordpress"></i> fab fa-wordpress
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-wordpress-simple"></i> fab fa-wordpress-simple
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-wpbeginner"></i> fab fa-wpbeginner
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-wpexplorer"></i> fab fa-wpexplorer
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-wpforms"></i> fab fa-wpforms
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-wrench"></i> fas fa-wrench
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-x-ray"></i> fas fa-x-ray
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-xbox"></i> fab fa-xbox
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-xing"></i> fab fa-xing
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-xing-square"></i> fab fa-xing-square
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-y-combinator"></i> fab fa-y-combinator
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-yahoo"></i> fab fa-yahoo
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-yandex"></i> fab fa-yandex
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-yandex-international"></i> fab fa-yandex-international
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-yelp"></i> fab fa-yelp
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fas fa-yen-sign"></i> fas fa-yen-sign
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-yoast"></i> fab fa-yoast
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-youtube"></i> fab fa-youtube
                                            </div>
                                            <div class="col-sm-6 col-md-4 col-xl-3">
                                                <i class="fab fa-youtube-square"></i> fab fa-youtube-square
                                            </div>
                                        </div>
                                    </section>       
                                </div><!--end card-body--> 
                            </div><!--end card--> 
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

        <!-- Javascript  -->  
        <!-- vendor js -->
        
        <script src="{{ asset('assets/libs/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
        <script src="{{ asset('assets/libs/simplebar/simplebar.min.js')}}"></script>

        <script src="{{ asset('assets/js/app.js')}}"></script>
    </body>
    <!--end body-->
</html>