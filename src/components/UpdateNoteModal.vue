<template>
  <div>

    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          Update Note
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <input v-model="title" class="input" type="text" placeholder="title">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="body" class="textarea"  placeholder="enter content"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="os" class="textarea"  placeholder="Operating system"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="company" class="textarea"  placeholder="company"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="price" class="textarea"  placeholder="price"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="purpose" class="textarea"  placeholder="purpose"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="size" class="textarea"  placeholder="size"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="twoinone" class="textarea"  placeholder="twoinone"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="amazonlink" class="textarea"  placeholder="amazonlink"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="storage" class="textarea"  placeholder="storage"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="ram" class="textarea"  placeholder="ram"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="display" class="textarea"  placeholder="display"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea v-model="processor" class="textarea"  placeholder="processor"></textarea>
            </div>
          </div>
          <button @click="update" class="button is-primary is-pulled-right">Post</button>
        </section>
      </div>
      <button @click="toggle" class="modal-close is-large" aria-label="close"></button>
    </div>
    <button @click="toggle" class="button is-small is-pulled-right">Update</button>
  </div>
</template>
<script>
import { updateNote }  from '../repository'
export default {
  name: 'UpdateNoteModal',
  data(){
    return {
      title: this.note.title,
      body: this.note.body,
      purpose: this.note.purpose,
      company: this.note.company,
      price: this.note.price,
      os: this.note.os,
      size: this.note.size,
      twoinone: this.note.twoinone,
      amazonlink: this.note.amazonlink,
      storage: this.note.storage,
      ram: this.note.ram,
      display: this.note.display,
      processor: this.note.processor,
      isActive: false
    }
  },
  props: ['note'],
  methods: {
    update(){
      let data = { title: this.title, body: this.body, purpose: this.purpose, company: this.company, price: this.price, os: this.os, size: this.size, twoinone: this.twoinone, amazonlink: this.amazonlink, storage: this.storage, ram: this.ram, display: this.display, processor: this.processor }
      updateNote(data, this.note._id)
        .then(data => {
          this.$emit('updateNote', data.note);
          this.toggle();
        })
        .catch(err => alert(err.message));
    },
    toggle(){
      this.isActive = !this.isActive;
    },
  },
}
</script>
<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css';
</style>
