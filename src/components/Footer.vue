<template>
  <div>
    <footer>
      <div class="container">
        <div class="left">
          <div class="col-1">
            <router-link class="header" :to="{ name: 'Home' }"
              >FireBlogs</router-link
            >
            <ul>
              <li>
                <a href="#"><i class="fab fa-facebook"></i> </a>
              </li>
              <li>
                <a href="#"><i class="fab fa-google"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
          <div class="col-2">
            <ul>
              <router-link class="link" :to="{ name: 'Home' }"
                >Home</router-link
              >
              <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
              <router-link v-if="user" class="link" to="#">Create Post</router-link>
              <router-link v-if="!user" class="link" :to="{ name: 'Login' }">Login In / Register</router-link>
            </ul>
          </div>
        </div>
        <div class="right">
          <p>Copyright 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
footer {
  background: #303030;
  margin-top: auto;
  padding: 100px 25px;
}

footer .container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

footer .container > div {
  display: flex;
  flex: 1;
}

footer .container .left {
  gap: 32px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer .container .left .header {
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 16px;
  text-decoration: none;
  font-weight: 600;
}

footer .container .left ul {
  gap: 16px;
  list-style: none;
  display: flex;
}

footer .container .left .col-1,
footer .container .left .col-2 {
  gap: 32px;
  display: flex;
  flex: 1;
}

footer .container .left .col-1 {
  flex-direction: column;
}

footer .container .left .col-1 h2 {
  text-align: center;
}

footer .container .left .col-1 ul {
  margin-top: auto;
}

footer .container .left .col-1 ul li {
  display: flex;
  align-items: center;
}

footer .container .left .col-1 ul li i {
  color: #fff;
}

footer .container .left .col-2 ul {
  height: 100%;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

footer .container .left .col-2 ul .link {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
}

footer .container .right {
  gap: 32px;
  color: #fff;
  align-items: center;
  flex-direction: column;
}

footer .container p {
  margin-top: auto;
}

@media (min-width: 800px) {
  footer .container {
    flex-direction: row;
    gap: 0;
  }

  footer .container .left {
    flex-direction: row;
    align-items: initial;
    gap: 0;
  }

  footer .container .left .header {
    text-align: initial;
  }

  footer .container .left .col-1,
  footer .container .left .col-2 {
    gap: 0;
  }

  footer .container .left .col-1 h2 {
    text-align: initial;
  }

  footer .container .left .col-2 ul {
    flex-direction: column;
  }

  footer .container .right {
    align-items: flex-end;
    gap: 0;
  }
}
</style>