<template>
  <div style="background-color: #d9d2e9; height: 100vh">
    <div class="container">
      <img slot="logo" :src="logo" />

      <section class="section">
        <div class="container">
          <article class="card">
            <div class="card-content">
              <h1 class="title text-center">ADMIN</h1>
              <form id="login-form" @submit.prevent="submitLogin">
                <div
                  v-if="hasErrors"
                  id="login-errors"
                  role="alert"
                  aria-live="assertive"
                >
                  <div class="notification is-danger">
                    It looks like the email and password entered doesn't match
                    our records. Please try again!
                  </div>
                </div>
                <div class="field">
                  <label for="email" class="label">Email:</label>
                  <input
                    type="email"
                    class="input"
                    :class="{ 'is-danger': hasErrors }"
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
                    :class="{ 'is-danger': hasErrors }"
                    :disabled="isLoading"
                    id="password"
                    aria-describedby="login-errors"
                    v-model="login.password"
                    required
                  />
                </div>
                <div class="field">
                  <div class="control space-between">
                    <div id="feedback" role="status" aria-live="polite">
                      <span class="msg-loading" v-if="isLoading"
                        >Loading...</span
                      >
                      <span class="msg-success" v-if="isSuccess"
                        >Login successful!</span
                      >
                    </div>
                    <button
                      type="submit"
                      class="button login-button is-medium is-link"
                      :disabled="isLoading || isSuccess"
                      aria-describedby="feedback"
                    >
                      Login
                    </button>
                  </div>
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

export default {
  components: {
    Header,
    About,
  },
  data() {
    return {
      logo: require("../assets/images/logo/logo.png"),
      hasErrors: false,
      passwordIsText: false,
      isLoading: false,
      isSuccess: false,
      login: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.input,
.button {
  transition: all 150ms ease;
}
.button:focus {
  text-decoration: underline;
  border: solid 1px grey;
}

.input {
  border-radius: 5px;
}

.show-button {
  padding: 0px 10px;
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
</style>
