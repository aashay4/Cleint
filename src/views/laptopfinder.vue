<template>
  <div class="w3-light-grey">
    <div class="w3-bar w3-black w3-hide-small">
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-facebook-official"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-instagram"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-snapchat"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-flickr"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-twitter"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-linkedin"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-right"><i class="fa fa-search"></i></a>
</div>

<!-- w3-content defines a container for fixed size centered content,
and is wrapped around the whole page content, except for the footer in this example -->
<div class="w3-content" style="max-width:1600px">
  <!-- Image header -->
  <div class="w3-margin">
  <div class="w3-col l9 s12">

    <!-- Blog entry -->
    <div class="w3-container w3-white w3-margin w3-justify w3-padding-large w3-margin-left">
      <div class="w3-half" style="margin-top: 1px">Please select the Options:
        <section v-if="step == 1">
          <h2><br>
            Step 1 - Select a Size
          </h2>
          <input type="radio" id="10" value="10" v-model="size">
    <label for="10">10</label><br>
    <input type="radio" id="12" value="12" v-model="size">
    <label for="12">12</label><br>
    <input type="radio" id="14" value="14" v-model="size">
    <label for="14">14</label><br>
    <input type="radio" id="16" value="16" v-model="size">
    <label for="16">16</label><br>
    <input type="radio" id="all" value="all" v-model="size">
    <label for="all">All</label><br>
    <br>
        </section>
        <section v-if="step == 2">
          <h2><br>
            Step 2 - Select Price
          </h2>
          <input type="radio" id="700" value="400" v-model="price">
        <label for="500">Below $400</label><br>
        <input type="radio" id="700" value="700" v-model="price">
        <label for="1000">Upto $700</label><br>
        <input type="radio" id="1000" value="999.999999" v-model="price">
        <label for="1000">Upto $1000</label><br>
        <input type="radio" id="1500" value="5000" v-model="price">
        <label for="1500">no limit</label><br>
        <br>
        </section>
        <section v-if="step == 3">
          <h2><br>
            Step 3 - What's Your Purpose?
          </h2>
          <input type="radio" id="business" value="Business" v-model="purpose">
    <label for="radio">Business</label><br>
    <input type="radio" id="gaming" value="gaming" v-model="purpose">
    <label for="radio">gaming</label><br>
    <input type="radio" id="designing" value="designing" v-model="purpose">
    <label for="radio">Designing And Editing</label><br>
    <input type="radio" id="Student" value="Student" v-model="purpose">
    <label for="radio">Student</label>
    <br>
        </section>
        <section v-if="step == 4">
          <h2><br>
            Step 4 - Which OS you prefer?
          </h2>
          <input type="radio" id="windows" value="Windows" v-model="os">
    <label for="windows">Windows</label><br>
    <input type="radio" id="MAC" value="MAC" v-model="os">
    <label for="MAC">MAC</label><br>
    <input type="radio" id="all" value="all" v-model="os">
    <label for="all">All</label><br>
    <br>
        </section>
        <section v-if="step == 5">
          <h2><br>
            Step 5 - Do you prefer two in one Laptops?
          </h2>
          <input type="radio" id="" value="Yes" v-model="twoinone">
    <label for="radio">Yes</label><br>
    <input type="radio" id="" value="No" v-model="twoinone">
    <label for="radio">No</label><br>
    <input type="radio" id="all" value="all" v-model="twoinone">
    <label for="all">All</label><br>
    <br>
        </section><br>
        <button v-if="step != totalsteps" @click.prevent="nextstep" class="w3-button w3-border w3-red w3-padding-large w3-hover-gray">Next Step</button>
        <button v-if="step != 1" @click.prevent="previousstep" class="w3-button w3-border w3-red w3-padding-large w3-hover-gray">Previous Step</button>
        <button v-if="step == 5" @click.prevent="findit" class="w3-button w3-border w3-red w3-padding-large w3-hover-gray">Send Query</button>
      </div>
        <div class="w3-onethird w3-right" style="margin-top: 8%;">
          <h4>Laptop Size You Chose: {{ size }}</h4>
          <h4>Laptop Price You Chose: {{ price }}</h4>
          <h4>Your Purpose: {{ purpose }}</h4>
          <h4>OS you prefer: {{ os }}</h4>
          <h4>Prefer two in one? {{ twoinone }}</h4>
        </div>
        <div class="">

        </div>
      </div>
      <div class="container">
        <div v-if="notes">
          <div>
            <noteItem v-for="(note, index) in notes" :note="note" :key="index" @deleteNote="deleteNote" @updateNote="updateNote"/>
          </div>
        </div>
      </div>
</div>
  <!-- About/Information menu -->
  <div class="w3-col l3">


    <!-- Advertising -->
    <div class="w3-white w3-margin">
      <div class="w3-container w3-black">
        <h4>Advertise</h4>
      </div>
      <div class="w3-container w3-white">
        <div class="w3-container w3-display-container w3-light-grey w3-section" style="height:200px">
          <span class="w3-display-middle">AD</span>
        </div>
      </div>
    </div>
    <hr>
  </div>
</div>
<!-- About/Information menu -->
  <!-- Grid -->
  <div class="w3-row w3-padding w3-border">
  <div class="w3-row-padding">
    <div class="w3-row-padding">

     </div>
  </div>

  <div class="w3-row-padding">
  <div class="w3-row-padding">
      </div>
  </div>

  <div class="w3-row-padding">
      </div>
    <!-- Blog entries -->
    <div class="w3-col l8 s12">

      <!-- Blog entry -->

      <!-- Blog entry -->

      <!-- Blog entry -->
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div><img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style="width:33%; float:left" class="w3-padding-16"></div>

        <div style="width:63%; float:right" class="w3-justify">
          <h3>TITLE HEADING</h3>
          <h5>Title description, <span class="w3-opacity">May 2, 2016</span></h5>
          <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at.</p><br>

        <p class="w3-left"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> Like</b></button></p>
        <p class="w3-right"><button class="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies</b><span class="w3-tag w3-white">1</span></button></p>
        <p class="w3-clear"></p></div></div>

    <!-- END BLOG ENTRIES -->
    </div>

    <!-- About/Information menu -->
    <div class="w3-col l4">
      <!-- About Card -->
      <div class="w3-white w3-margin">
        <img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Jane" style="width:100%" class="">
        <div class="w3-container w3-black">
          <h4>Adam Johnson</h4>
          <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
        </div>
      </div>
      <hr>

      <!-- Posts -->
      <div class="w3-white w3-margin">
        <div class="w3-container w3-padding w3-black">
          <h4>Popular Posts</h4>
        </div>
        <ul class="w3-ul w3-hoverable w3-white">
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
            <span class="w3-large">Denim</span>
            <br>
            <span>Sed mattis nunc</span>
          </li>
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
            <span class="w3-large">Sweaters</span>
            <br>
            <span>Praes tinci sed</span>
          </li>
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
            <span class="w3-large">Workshop</span>
            <br>
            <span>Ultricies congue</span>
          </li>
          <li class="w3-padding-16">
            <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="Image" class="w3-left w3-margin-right w3-sepia" style="width:50px">
            <span class="w3-large">Trends</span>
            <br>
            <span>Lorem ipsum dipsum</span>
          </li>
        </ul>
      </div>
      <hr>

      <!-- Advertising -->
      <div class="w3-white w3-margin">
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
      <div class="w3-white w3-margin">
        <div class="w3-container w3-padding w3-black">
          <h4>Tags</h4>
        </div>
        <div class="w3-container w3-white"><br>
          <p>
            <span class="w3-tag w3-black w3-margin-bottom">Fashion</span><span class="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span><span class="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Hats</span><span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Norway</span><span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Sweaters</span>
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span><span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Deals</span><span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Accessories</span>
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span><span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span><span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
            <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Jeans</span><span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Trends</span>
          </p>
        </div>
      </div>
      <hr>

      <!-- Inspiration -->
      <div class="w3-white w3-margin">
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

      <div class="w3-white w3-margin">
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
      <div class="w3-white w3-margin">
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
      <button type="button" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('subscribe').style.display='none'">Subscribe</button>
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
  name: 'laptopfinder',
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
        twoinone: ''
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

        },
      mounted(){
        this.findit();
      }
      }
</script>
<style>
h1,h2,h3,h4,h5,h6 {font-family: "Oswald"}
body {font-family: "Open Sans"}
</style>
