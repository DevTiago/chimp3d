<template>
  <div style="background-color: #d9d2e9; height: 100vh">
    <div class="container">
      <img slot="logo" :src="logo"/>
      <section class="section">
        <div class="container">
          <article class="card">
            <div class="card-content">
              <h1 class="title text-center">ADMIN</h1>
              <form id="login-form" @submit.prevent="submitLogin">

                <div class="field">
                  <label for="email" class="label">Email:</label>
                  <input
                      type="email"
                      class="input"
                      :disabled="isLoading"
                      id="email"
                      aria-describedby="login-errors"
                      v-model="login.email"
                      required
                  />
                </div>
                <div class="field mt-4">
                  <div class="label space-between">
                    <label for="password" id="password-label">Password:</label>
                    <button
                        type="button"
                        class="button show-button"
                        aria-describedby="password-label"
                        @click.prevent="passwordIsText = !passwordIsText"
                    >
                      {{ passwordIsText ? "Hide" : "Show" }}
                    </button>
                  </div>
                  <input
                      :type="passwordIsText ? 'text' : 'password'"
                      class="input"
                      :disabled="isLoading"
                      id="password"
                      aria-describedby="login-errors"
                      v-model="login.password"
                      required
                  />
                </div>
                <div class="field d-flex align-center justify-space-between">
                  <div class="error_alert">
                    {{error}}
                  </div>

                  <button
                      type="submit"
                      class="button login-button is-link"
                      :disabled="isLoading || isSuccess"
                      aria-describedby="feedback"
                  >
                    Login
                  </button>

                </div>
              </form>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "../components/header/Header";
import About from "../components/about/About";
import firebase from 'firebase/app';


export default {
  components: {
    Header,
    About,
  },
  data() {
    return {
      logo: require("../assets/images/logo/logo.png"),
      isLoading: false,
      isSuccess: false,
      passwordIsText: false,
      error: "",
      login: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    submitLogin() {
      this.isLoading = true;
      this.error = "";
      firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password)
          .then(data => {
            this.isLoading = false;
            this.$router.replace({name: "admin"});
            // this.$router.replace({name: secret})
          })
          .catch(error => {
            this.isLoading = false;
            if (error.code === 'auth/user-not-found') {
              this.error = "Dados de login inválidos"
            } else {
              console.log('error');
              this.error = error.message
            }
          })
    }
  }
};
</script>

<style scoped lang="scss">
.input,
.button {
  transition: all 150ms ease;
}

.input {
  border: 1px solid #000
}

.button:focus {
  text-decoration: underline;
  border: solid 1px grey;
}

.input {
  border-radius: 5px;
}

.show-button {
  padding: 0 10px;
  border-radius: 5px;
  font-size: 10px;
  background-color: #454545;
  color: #fff;
}

.input:focus {
  border: solid 1px grey;
}

.card {
  max-width: 26rem;
  margin: 0 auto;

  .title {
    margin-bottom: 2.25rem;
  }
}

.space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label.checkbox {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.checkbox-text {
  margin-left: 0.5rem;
}

[type="checkbox"]:focus + .checkbox-text {
  text-decoration: underline;
}

.notification {
  &.is-danger {
    background: crimson;
    margin-bottom: 1.5rem;
  }
}

.msg-loading {
  color: royalblue;
}

.msg-success {
  color: forestgreen;
  display: inline-block;
  vertical-align: middle;

  &:before {
    content: "\2714";
    font-size: 2em;
    margin-right: 0.25rem;
    margin-top: -0.25rem;
    display: inline-block;
    vertical-align: middle;
  }
}

.login-button {
  background-color: #379634;
  padding: 5px 20px;
  color: #fff;
  border-radius: 10px;
  margin-top: 10px;

  &:hover {
    background-color: #0a3200;
  }
}

.error_alert {
  color: red;
}

</style>