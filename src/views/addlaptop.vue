<template lang="html">
  <div>
  <div class="w3-container w3-padding-32" id="contact">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Add New Laptop</h3>
    <button><a to="/logout" class="nav-link" @click.prevent="logout">Log out</a></button>
    <p>Add laptop into the database.</p>
      <input class="w3-input w3-border" type="text" v-model="title" placeholder="Title" required name="Title">
      <input class="w3-input w3-section w3-border" v-model="body" type="text" placeholder="Content" required name="Content">
      <input class="w3-input w3-section w3-border" v-model="os" type="text" placeholder="os" required name="os">
      <input class="w3-input w3-section w3-border" v-model="company" type="text" placeholder="company" required name="company">
      <input class="w3-input w3-section w3-border" v-model="price" type="text" placeholder="price" required name="price">
      <input class="w3-input w3-section w3-border" v-model="purpose" type="text" placeholder="Business, student or general purpose" required name="purpose">
      <input class="w3-input w3-section w3-border" v-model="size" type="text" placeholder="size inches" required name="size">
      <input class="w3-input w3-section w3-border" v-model="twoinone" type="text" placeholder="Is it two in one" required name="two in one?">
      <input class="w3-input w3-section w3-border" v-model="amazonlink" type="text" placeholder="amazonlink" required name="amazonlink">
      <input class="w3-input w3-section w3-border" v-model="storage" type="text" placeholder="storage" required name="storage">
      <input class="w3-input w3-section w3-border" v-model="ram" type="text" placeholder="ram" required name="ram">
      <input class="w3-input w3-section w3-border" v-model="display" type="text" placeholder="display" required name="display">
      <input class="w3-input w3-section w3-border" v-model="processor" type="text" placeholder="processor" required name="processor">
      <input class="w3-input w3-section w3-border" type="file" @change="onselect" placeholder="Upload Image" required name="Upload Image">
      <div v-for="note in notes" :key="note.id">
                <a :href="note.url">{{note.url}}</a>
      </div>
      <a :href="site">Go to google</a>
      <button @click="create" class="w3-button w3-black w3-section">
        <i class="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
  </div>
  <div>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <span class="title is-size-1">NoteTaker</span>
          </a>
        </div>
      </div>
    </nav>
    <br><br>
    <div  class="container">
      <div v-if="notes">
        <br>
          <div>
          <noteItem v-for="(note, index) in notes" :note="note" :key="index" @deleteNote="deleteNote" @updateNote="updateNote"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { createNote, getNotes }  from '../repository'
import NoteItem  from '../components/NoteItem.vue'

export default {
  name: 'createlaptop',
  components: { NoteItem },
  data() {
    return {
      notes: [],
    title: '',
    body: '',
    os: '',
    company: '',
    price: '',
    purpose: '',
    size: '',
    twoinone: '',
    amazonlink: "",
    storage: '',
    ram: '',
    display: '',
    processor: '',
    site: 'https://www.google.com',
    img: null
  }
},
computed:{
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser(){
      this.logout();
    },
    onselect(event) {
      this.img = event.target.files[0];
    },
    create(){
      const formData = new FormData();
formData.append('img', this.img);
formData.append('title', this.title);
formData.append('body', this.body);
formData.append('os', this.os);
formData.append('company', this.company);
formData.append('price', this.price);
formData.append('purpose', this.purpose);
formData.append('size', this.size);
formData.append('twoinone', this.twoinone);
formData.append('amazonlink', this.amazonlink);
formData.append('storage', this.storage);
formData.append('ram', this.ram);
formData.append('display', this.display);
formData.append('processor', this.processor);
console.log(formData);
      createNote(formData)
        .then(data => {
          this.$emit('createNote', data.note);
          this.title = this.body = this.company = this.price = this.reason ='';
        })
        .catch(err => alert(err.message));
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
    }
  },
  mounted(){
    getNotes()
      .then(data => this.notes = data.notes)
      .catch((err =>alert(err)));
  }
  }
</script>

<style lang="css">
</style>
