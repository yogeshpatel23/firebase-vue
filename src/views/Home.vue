<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blog</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if="!user " class="updates">
      <div class="container">
        <h2>Never miss a post. Register for your free account</h2>
        <router-link class="router-button" to="#"
          >Register for Fireblog</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Weekly blog articles with all things programnning including html css jswvsscripit and more. Register today to never miss as poss",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is filler title",
          blogHtml: "thsi is filler blog post title",
          blogCoverPhodo: "beautiful-stories",
        },
        {
          title: "This is filler title2",
          blogHtml: "thsi is filler blog post title2",
          blogCoverPhodo: "designed-for-everyone",
        },
      ],      
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    },
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
.blog-card-wrap h3 {
  font-weight: 300;
  font-size: 28px;
  margin-bottom: 32px;
}

.updates .container {
  padding: 100px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.updates .container .router-button {
  display: flex;
  font-size: 14px;
  text-decoration: none;
}

.updates .container h2 {
  font-weight: 300;
  font-size: 32px;
  max-width: 425px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
}

@media (min-width: 800px) {
  .updates .container {
    padding: 125px 25px;
    flex-direction: row;
  }

  .updates .container .router-button {
    margin-left: auto;
  }

  .updates .container h2 {
    text-align: initial;
    tab-size: 40px;
  }
}
</style>