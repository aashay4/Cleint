<template>
  <div>
  <article class="message">

    <div class="message-header">
      <p>{{ note.title }}</p>
      <button v-if="isLoggedIn" @click="deleteNote" class="delete" aria-label="delete">Delete</button>
    </div>
    <div>
      <p><img :src="require('../assets/' + note.imgpath)" style="height: 200px; width: 200px;"></p>
    </div>

    <div>
    <p>
  <a :href="note.amazonlink">Buy on Amazon</a>
    </p>
  </div>
    <div class="message-body">
      {{ note.body }}
      <br>
      <br>
      <span class="has-text-grey-light">Created at: {{ note.createdAt | moment }}</span>
      <br>
      <span class="has-text-grey-light">last updated: {{ note.updatedAt | moment }}</span><br>
      <UpdateNoteModal v-if="isLoggedIn" :note="note" @updateNote="updateNote" :key="note._id"/>
    </div>
    <div>
      Operation System: <b>{{note.os}}</b><br>
      Company: <b>{{note.company}}</b><br>
      Prie: <b>{{note.price}}</b><br>
      Purpose: <b>{{note.purpose}}</b><br>
      Size: <b>{{note.size}}</b><br>
      <b>Is it two in one?</b>{{note.twoinone}}<br>
      Storage: <b>{{note.storage}}</b><br>
      Ram: <b>{{note.ram}}</b><br>
      Display: <b>{{note.display}}</b><br>
      Processor: <b>{{note.processor}}</b><br>
    </div>
    <div>

    </div>
    <div>
    </div>
    <div class="">
      RAM: <b>{{ note.ram }}</b>
    </div>

  </article>
  <!--<img src="../assets/swaara_upwork.jpg" alt="" style="height: 150px; width: 150px;">-->
  <!--<img :src="../assets/{{note.imgpath}}">-->
</div>
</template>
<script>
  import { mapGetters, mapActions } from "vuex";
  import { deleteNote } from '../repository'
  import UpdateNoteModal from './UpdateNoteModal.vue'
  import Moment from 'moment'
  export default {
    name: 'NoteItem',
    props: [ 'note' ],
    components: { UpdateNoteModal },
    data() {
      return {
      imgURL: '',
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
      deleteNote(e){
        e.preventDefault();
        deleteNote(this.note._id)
          .then(() => this.$emit('deleteNote', this.note._id))
          .catch(err => alert(err))
      },
      updateNote(note){
        this.$emit('updateNote', note)
      }
    },
    filters: {
      moment(date) {
        return Moment(date).format('MMMM Do YYYY, h:mm:ss a');
      }
    }
  }
</script>
