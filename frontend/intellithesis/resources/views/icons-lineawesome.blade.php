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
                                            <h4 class="card-title mb-1">Line Awesome Icons</h4>   
                                            <p class="text-muted mb-0">Use <code class="fs-14">&lt;i class="las la-braille"&gt;&lt;/i&gt;</code></p>                    
                                        </div><!--end col-->
                                    </div>  <!--end row-->                                  
                                </div><!--end card-header-->
                                <div class="card-body pt-0">
                                    <div class="row icon-demo-content">
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="lab la-accessible-icon"></i> lab la-accessible-icon
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-blind"></i> las la-blind
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-low-vision"></i> las la-low-vision
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-tty"></i> las la-tty
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-braille"></i> las la-braille
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-phone-volume"></i> las la-phone-volume
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-universal-access"></i> las la-universal-access
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="lar la-question-circle"></i> lar la-question-circle
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="lar la-bell"></i> lar la-bell
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-exclamation-circle"></i> las la-exclamation-circle
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-bell-slash"></i> las la-bell-slash
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-fish"></i> las la-fish
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-cat"></i> las la-cat
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-angle-down"></i> las la-angle-down
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-angle-up"></i> las la-angle-up
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-angle-left"></i> las la-angle-left
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-angle-right"></i> las la-angle-right
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-arrow-circle-down"></i> las la-arrow-circle-down
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-arrow-circle-up"></i> las la-arrow-circle-up
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-arrow-circle-left"></i> las la-arrow-circle-left
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="las la-arrow-circle-right"></i> las la-arrow-circle-right
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="lab la-facebook"></i> lab la-facebook
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="lab la-twitter"></i> lab la-twitter
                                        </div>
                                        <div class="col-sm-6 col-md-4 col-lg-3">
                                            <i class="lab la-whatsapp"></i> lab la-whatsapp
                                        </div>
                                    </div><!--end row--> 
                                    <div class="p-3 border border-primary bg-primary-subtle rounded">
                                        <div class="row">
                                            <div class="col">
                                                <h5 class="text-primary fs-18 mb-1 fw-semibold">Line Awesome Icons</h5>
                                                <p class="text-muted mb-0 fs-14">Swap Font Awesome for modern line icons in one line of code.</p>
                                                <p class="text-muted mb-0 fs-14">Line Awesome is a free alternative for Font Awesome 5.11.2. It consists of ~1380 flat icons that offer complete coverage of the main Font Awesome icon set.</p>
                                            </div> <!--end col--> 
                                            <div class="col-auto align-self-center">
                                                <a href="https://icons8.com/line-awesome" target="_blank"  type="button" class="btn btn-primary">More Icons</a>
                                            </div> <!--end col-->                                                      
                                        </div><!--end row-->
                                    </div><!--end div-->              
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