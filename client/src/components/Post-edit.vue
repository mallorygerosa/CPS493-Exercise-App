<template>
    <form class="card" @submit.prevent="$emit('add')">
        <div class="card-content">
                <h2 class="title is-3 has-text-centered">New Post</h2>
        <button class="delete" @click="$emit('remove')"></button>

            <div class="content">

                <div class="field">                
                     <label class="label">Picture URL</label>
                    <div class="control">
                        <input class="input" type="url" placeholder="https://Picture.com" v-model="post.src" required/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Picture alternate text</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Alternate text" v-model="post.alt" required />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Activity description" v-model="post.caption" required></textarea>
                    </div>
                </div>

                <div class="field">
                    <div class="control has-text-centered">
                        <label class="radio">
                            <input type="radio" name="question" v-model="post.isPublic" :value="true" required/>
                            Public
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" v-model="post.isPublic" :value="false" required/>
                            Private
                        </label>
                    </div>
                </div>

            </div>
        </div>
        
        <footer class="card-footer">
            <button class="button is-link card-footer-item" type="submit">Post</button>
            <button class="button is-link is-light card-footer-item" type="reset">Cancel</button>
        </footer>
    </form>
</template>

<script>
export default {
    props: {
        newPost: Object
    },
    data(){
        return {
            post: this.newPost
        }
    },
    watch: {
        newPost(){
            this.post = this.newPost;
        }
    }
}
</script>

<style>
</style>