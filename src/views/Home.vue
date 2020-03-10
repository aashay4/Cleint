<template>
  <div class="w3-light-grey">

<!-- w3-content defines a container for fixed size centered content,
and is wrapped around the whole page content, except for the footer in this example -->
<div class="w3-content" style="max-width:1600px">

  <!-- Header -->
  <header class="w3-container w3-center w3-padding-48 w3-black">
    <h1 class="w3-xxxlarge"><b>Best Budget Laptops</b></h1>
    <h6>We help you to <span class="w3-tag w3-red">Find the Best Budget Laptops</span></h6>
  </header>
  <!-- Navbar -->
<div class="">
  <div class="w3-bar w3-white w3-card">
    <a v-on:click='isclose = !isclose' class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-left" href="javascript:void(0)" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
    <router-link to="/laptop-finder/" class="">
    <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Laptop Finder</a></b>
  </router-link>
  <router-link to="/compare-laptops/" class="">
    <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Compare Laptops</a></b>
    </router-link>
    <router-link to="/best-gaming-laptops/" class="">
    <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Gaming Laptops</a></b>
  </router-link>
  <router-link to="/best-gaming-laptops/" class="">
    <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Contact</a></b>
  </router-link>
    <div class="w3-dropdown-hover w3-hide-small">
      <b><button class="w3-padding-large w3-button" title="More">More <i class="fa fa-caret-down"></i></button></b>
      <div class="w3-dropdown-content w3-bar-block">
        <router-link to="/best-gaming-laptops/" class="">
          <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Gaming Laptops</a></b>
        </router-link>
        <router-link to="/best-student-laptops/" class="">
          <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Laptops for College Students</a></b>
        </router-link>
        <router-link to="/about-us/" class="">
          <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Laptops for Music</a></b>
        </router-link>
        <router-link to="/about-us/" class="">
          <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Laptops for Programming</a></b>
        </router-link>
          <router-link to="/about-us/" class="">
            <b><a class="w3-bar-item w3-button w3-padding-large w3-hide-small w3-hover-red">Best Laptops for Writers</a></b>
          </router-link>
      </div>
    </div>
    <a href="#" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
    <a href="#" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-facebook-official"></i></a>
    <a href="#" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-instagram"></i></a>
    <a href="#" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-twitter"></i></a>
  </div>
</div>

<!-- Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) -->
<div v-show="isclose" class="">
  <nav class="w3-sidebar w3-bar-block w3-large w3-theme-l5 w3-animate-left">
    <a href="javascript:void(0)" v-on:click='isclose = !isclose' class="w3-right w3-xlarge w3-padding-large w3-hover-black"><i class="fa fa-remove"></i></a>
    <h4 class="w3-bar-item"><b>Options</b></h4>
    <router-link to="/laptop-finder/" class="nav-link">
    <a class="w3-bar-item w3-button w3-hover-black">Laptop Finder</a>
    </router-link>
    <router-link to="/compare-laptops/" class="nav-link">
    <a class="w3-bar-item w3-button w3-hover-black">Compare Laptops</a>
    </router-link>
  </nav>
</div>
<!-- Navbar --><br>
  <!-- Image header -->
  <div class="">
  <div class="w3-col l9 s12">

    <!-- Blog entry -->
    <div class="w3-container w3-white  w3-justify w3-padding-large">
      <div class="w3-container w3-white  w3-padding-large">
        <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:100%"></div>

        <div style="width:100%;" class="w3-justify">
          <h3>TITLE HEADING</h3>
          <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
          <p class="w3-hide-small"><strong>More Hats!test</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at.</p><br>

        <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
        <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
        <p class="w3-clear"></p></div></div>
      </div>
      </div>
  <!-- About/Information menu -->
  <div class="w3-col l3">


    <!-- Advertising -->
    <div class="w3-white w3-border">
      <div class="w3-container w3-black">
        <h4>Advertise</h4>
      </div>
      <div class="w3-container w3-white">
        <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
          <span class="w3-display-middle">AD</span>
        </div>
      </div>
    </div>
    <div class="w3-white w3-border">
      <div class="w3-container w3-black">
        <h4>Advertise</h4>
      </div>
      <div class="w3-container w3-white">
        <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
          <span class="w3-display-middle">AD</span>
        </div>
      </div>
    </div>
    <div class="w3-white w3-border">
      <div class="w3-container w3-black">
        <h4>Advertise</h4>
      </div>
      <div class="w3-container w3-white">
        <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
          <span class="w3-display-middle">AD</span>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- About/Information menu -->
  <!-- Grid -->
  <div class="w3-padding w3-row-padding w3-border">
    <div class="w3-container w3-padding-32" id="projects">
      <div style="background-color: white;">
      <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16 w3-padding-left w3-card">Best Budget Laptops Collection</h3></div>
  </div>

  <div class="w3-row-padding">
    <div class="w3-row-padding">
       <div class="w3-quarter w3-container -bottom">
         <router-link to="/laptops-under-200-dollars/">
           <div class="w3-display-container">
           <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
           <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
             <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
             <div class="w3-container w3-white">
           <a><p><b><h3>Best Budget Laptops Under 200 Dollars</h3></b></p></a>
         </div>
         </router-link>
       </div>
       <div class="w3-quarter w3-container -bottom">
         <router-link to="/laptops-under-500-dollars/">
           <div class="w3-display-container">
           <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
           <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
             <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
             <div class="w3-container w3-white">
           <a><p><b><h3>Best Budget Laptops Under 500 Dollars</h3></b></p></a>
         </div>
         </router-link>
       </div>
       <div class="w3-quarter w3-container -bottom">
         <router-link to="/laptops-under-400-dollars/">
           <div class="w3-display-container">
           <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
           <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
             <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
             <div class="w3-container w3-white">
           <a><p><b><h3>Best Budget Laptops Under 400 Dollars</h3></b></p></a>
         </div>
         </router-link>
       </div>
       <div class="w3-quarter w3-container -bottom">
         <router-link to="/laptops-under-300-dollars/">
           <div class="w3-display-container">
           <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
           <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
             <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
             <div class="w3-container w3-white">
           <a><p><b><h3>10 Best Laptops Under $300</h3></b></p></a>
         </div>
         </router-link>
       </div>
     </div>
  </div>

  <div class="">
    <div class="w3-container w3-padding-32" id="projects">
      <div style="background-color: white;">
      <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16 w3-padding-left w3-card">Best Gaming Laptops</h3></div>
  </div>
  <div class="">
    <div class="w3-quarter w3-container -bottom">
      <router-link to="/gaming-laptops-under-500/">
        <div class="w3-display-container">
        <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
        <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
          <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
          <div class="w3-container w3-white">
        <a><p><b><h3>Best Gaming Laptops Under 500 Dollars</h3></b></p></a>
      </div>
      </router-link>
    </div><div class="w3-quarter w3-container -bottom">
       <img src="https://www.w3schools.com/w3images/house5.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
       <div class="w3-container w3-white">
         <p><b>Lorem Ipsum</b></p>
         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
       </div>
     </div>
     <div class="w3-quarter w3-container -bottom">
       <img src="https://www.w3schools.com/w3images/house5.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
       <div class="w3-container w3-white">
         <p><b>Lorem Ipsum</b></p>
         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
       </div>
     </div>
     <div class="w3-quarter w3-container -bottom">
       <router-link to="/laptops-under-100-dollars">
         <div class="w3-display-container">
         <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
         <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
           <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
           <div class="w3-container w3-white">
         <a><p><b>10 Best Laptops Under $100</b></p>
         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p></a>
       </div>
       </router-link>
     </div>
   </div>
  </div>

  <div class="w3-row-padding">
    <div class="w3-container w3-padding-32" id="projects">
    <div style="background-color: white">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16 w3-card">Best Business Laptops</h3></div>
  </div>
  </div>
  <div class="w3-row-padding">
     <div class="w3-quarter w3-container -bottom">
       <img src="https://www.w3schools.com/w3images/house5.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
       <div class="w3-container w3-white">
         <p><b>Lorem Ipsum</b></p>
         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
       </div>
     </div>
     <div class="w3-quarter w3-container -bottom">
       <img src="https://www.w3schools.com/w3images/house5.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
       <div class="w3-container w3-white">
         <p><b>Lorem Ipsum</b></p>
         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
       </div>
     </div>
     <div class="w3-quarter w3-container -bottom">
       <img src="https://www.w3schools.com/w3images/house5.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
       <div class="w3-container w3-white">
         <p><b>Lorem Ipsum</b></p>
         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
       </div>
     </div>
     <div class="w3-quarter w3-container -bottom">
       <router-link to="/laptops-under-100-dollars">
         <div class="w3-display-container">
         <div class="w3-display-topleft w3-black w3-padding">Jan, 1 2020</div>
         <div class="w3-display-topright w3-red w3-padding">Adam Johnson</div>
           <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style="width:100%" class="w3-hover-opacity"></div>
           <div class="w3-container w3-white">
         <a><p><b>10 Best Laptops Under $100</b></p>
         <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p></a>
       </div>
       </router-link>
     </div>
   </div>
    <!-- Blog entries -->
    <div class="w3-col l8 s12 w3-margin-top">

      <!-- Blog entry -->
      <div class="w3-container w3-white  w3-padding-large">
        <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

        <div style="width:63%; float:right" class="w3-justify">
          <h3>TITLE HEADING</h3>
          <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
          <p class="w3-hide-small"><strong>More Hats!test</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at.</p><br>

        <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
        <p class="w3-right"><button class="w3-button w3-black" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
        <p class="w3-clear"></p></div></div>
        <div class="w3-container w3-white  w3-padding-large">
          <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

          <div style="width:63%; float:right" class="w3-justify">
            <h3>TITLE HEADING</h3>
            <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
            <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
              magna enim, ac accumsan tortor cursus at.</p><br>

          <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
          <p class="w3-right"><button class="w3-button w3-black" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
          <p class="w3-clear"></p></div></div>
          <div class="w3-container w3-white  w3-padding-large">
            <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

            <div style="width:63%; float:right" class="w3-justify">
              <h3>TITLE HEADING</h3>
              <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
              <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                magna enim, ac accumsan tortor cursus at.</p><br>

            <p class="w3-left"><button class="w3-button w3-white w3-border" ><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
            <p class="w3-right"><button class="w3-button w3-black" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
            <p class="w3-clear"></p></div></div>

              <div class="w3-container w3-white  w3-padding-large">
                <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

                <div style="width:63%; float:right" class="w3-justify">
                  <h3>TITLE HEADING</h3>
                  <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
                  <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                    magna enim, ac accumsan tortor cursus at.</p><br>

                <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
                <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
                <p class="w3-clear"></p></div></div>
                <div class="w3-container w3-white  w3-padding-large">
                  <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

                  <div style="width:63%; float:right" class="w3-justify">
                    <h3>TITLE HEADING</h3>
                    <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
                    <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                      magna enim, ac accumsan tortor cursus at.</p><br>

                  <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
                  <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
                  <p class="w3-clear"></p></div></div>
                  <div class="w3-container w3-white  w3-padding-large">
                    <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

                    <div style="width:63%; float:right" class="w3-justify">
                      <h3>TITLE HEADING</h3>
                      <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
                      <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
                        magna enim, ac accumsan tortor cursus at.</p><br>

                    <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
                    <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
                    <p class="w3-clear"></p></div></div>

      <!-- Blog entry -->
      <div class="w3-container w3-white  w3-padding-large">
        <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

        <div style="width:63%; float:right" class="w3-justify">
          <h3>TITLE HEADING</h3>
          <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
          <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at.</p><br>

        <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
        <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
        <p class="w3-clear"></p></div></div>

      <!-- Blog entry -->
      <div class="w3-container w3-white  w3-padding-large">
        <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

        <div style="width:63%; float:right" class="w3-justify">
          <h3>TITLE HEADING</h3>
          <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
          <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at.</p><br>

        <p class="w3-left"><button class="w3-button w3-white w3-border"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
        <p class="w3-right"><button class="w3-button w3-black" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
        <p class="w3-clear"></p></div></div>

    <!-- END BLOG ENTRIES -->
    </div>

    <!-- About/Information menu -->
    <div class="w3-col l4 w3-margin-top">
      <!-- About Card -->
      <div class="w3-white ">
        <img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Jane" style="width:100%" class="">
        <div class="w3-container w3-black">
          <h4>Adam Johnson</h4>
          <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
        </div>
      </div>
      <hr>

      <!-- Posts -->
      <div class="w3-white ">
        <div class="w3-container w3-padding w3-black">
          <h4>Popular Posts</h4>
        </div>
        <ul class="w3-ul w3-hoverable w3-white">
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="Image" class="w3-left -right" style="width:50px">
            <span class="w3-large">Denim</span>
            <br>
            <span>Sed mattis nunc</span>
          </li>
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Image" class="w3-left -right" style="width:50px">
            <span class="w3-large">Sweaters</span>
            <br>
            <span>Praes tinci sed</span>
          </li>
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image" class="w3-left -right" style="width:50px">
            <span class="w3-large">Workshop</span>
            <br>
            <span>Ultricies congue</span>
          </li>
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="Image" class="w3-left -right w3-sepia" style="width:50px">
            <span class="w3-large">Trends</span>
            <br>
            <span>Lorem ipsum dipsum</span>
          </li>
        </ul>
      </div>
      <hr>

      <!-- Advertising -->
      <div class="w3-white ">
        <div class="w3-container w3-padding w3-black">
          <h4>Advertise</h4>
        </div>
        <div class="w3-container w3-white">
          <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
            <span class="w3-display-middle">AD</span>
          </div>
        </div>
      </div>
      <hr>

      <!-- Tags -->
      <div class="w3-white ">
        <div class="w3-container w3-padding w3-black">
          <h4>Tags</h4>
        </div>
        <div class="w3-container w3-white"><br>
          <p>
            <span class="w3-tag w3-black -bottom">Fashion</span><span class="w3-tag w3-light-grey w3-small -bottom">New York</span><span class="w3-tag w3-light-grey w3-small -bottom">London</span>
            <span class="w3-tag w3-light-grey w3-small -bottom">Hats</span><span class="w3-tag w3-light-grey w3-small -bottom">Norway</span><span class="w3-tag w3-light-grey w3-small -bottom">Sweaters</span>
            <span class="w3-tag w3-light-grey w3-small -bottom">Ideas</span><span class="w3-tag w3-light-grey w3-small -bottom">Deals</span><span class="w3-tag w3-light-grey w3-small -bottom">Accessories</span>
            <span class="w3-tag w3-light-grey w3-small -bottom">News</span><span class="w3-tag w3-light-grey w3-small -bottom">Clothing</span><span class="w3-tag w3-light-grey w3-small -bottom">Shopping</span>
            <span class="w3-tag w3-light-grey w3-small -bottom">Jeans</span><span class="w3-tag w3-light-grey w3-small -bottom">Trends</span>
          </p>
        </div>
      </div>
      <hr>

      <!-- Inspiration -->
      <div class="w3-white ">
        <div class="w3-container w3-padding w3-black">
          <h4>Inspiration</h4>
        </div>
        <div class="w3-row-padding w3-white"><br>
          <div class="w3-col s6">
            <p><img src="https://www.w3schools.com/w3images/jeans.jpg" alt="Jeans" style="width:100%"></p><br>
            <p><img src="https://www.w3schools.com/w3images/jeans.jpg" alt="Jeans" style="width:100%"></p>
          </div>
          <div class="w3-col s6">
            <p><img src="https://www.w3schools.com/w3images/jeans.jpg" alt="Men in Hats" style="width:100%" class="w3-grayscale"></p><br>
            <p><img src="https://www.w3schools.com/w3images/jeans.jpg" alt="Jeans" style="width:100%"></p>
         </div>
       </div><br>
      </div>
      <hr>

      <div class="w3-white ">
        <div class="w3-container w3-padding w3-black">
          <h4>Follow Me</h4>
        </div>
        <div class="w3-container w3-xlarge w3-padding">
          <i class="fa fa-facebook-official w3-hover-opacity"></i>
          <i class="fa fa-instagram w3-hover-opacity"></i>
          <i class="fa fa-snapchat w3-hover-opacity"></i>
          <i class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i class="fa fa-twitter w3-hover-opacity"></i>
          <i class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
      </div>
      <hr>

      <!-- Subscribe -->
      <div class="w3-white ">
        <div class="w3-container w3-padding w3-black">
          <h4>Subscribe</h4>
        </div>
        <div class="w3-container w3-white"><br>
          <p>Enter your e-mail below and get notified on the latest blog posts.</p><br>
          <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail" style="width:100%"></p><br>
          <p><button type="button" class="w3-button w3-block w3-red">Subscribe</button></p><br>
        </div>
      </div>

    <!-- END About/Intro Menu -->
    </div>

  <!-- END GRID -->
  </div>
  <hr>
<!-- END w3-content -->
</div>

<!-- Subscribe Modal -->
<div id="subscribe" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('subscribe').style.display='none'" class="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
      <h2 class="w3-wide">SUBSCRIBE</h2>
      <p>Join my mailing list to receive updates on the latest blog posts and other things.</p>
      <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail"></p>
      <button type="button" class="w3-button w3-block w3-padding-large w3-red -bottom" onclick="document.getElementById('subscribe').style.display='none'">Subscribe</button>
    </div>
  </div>
</div>

<!-- Footer -->

<footer-app />
  </div>

</template>
<script>
import footer from '../components/footer.vue'

export default {
  name: 'Home',
  components: { 'footer-app': footer },
  data () {
    return {
          notes: [],
        step: 1,
        totalsteps: 5,
        size: '',
        purpose: '',
        price: '',
        os: '',
        twoinone: '',
        isclose: false
      }
    },
      methods: {
        nextstep()
        {
            this.step++;
        },
        previousstep()
        {
            this.step--;
        },
        sendquery()
        {
        },
        deleteNote(id){
          let notes = this.notes.filter(note => note._id != id)
          this.notes = notes;
        },
        updateNote(note){
          this.deleteNote(note._id);
          this.createNote(note);
        },
        createNote(note){
            this.notes = [note, ...this.notes];
        },
        toggle: function(){
    this.isOpen = !this.open
  },
  smalltoggle: function(){
      this.isclose = !this.close
  }
        },

      }
</script>
<style>
h1,h2,h3,h4,h5,h6 {font-family: "Oswald"}
body {font-family: "Open Sans"}
.nav-link.router-link-exact-active {
  border-bottom: 3px solid #06c4d1;
}
</style>
