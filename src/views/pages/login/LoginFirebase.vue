<template>
  <div>
    <vs-input
        v-validate="'required|email|min:3'"
        data-vv-validate-on="blur"
        name="email"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Email"
        v-model="email"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('email') }}</span>
    <br>
    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:6|max:10'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="Enter Your Password"
        v-model="password"
        class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <div class="flex flex-wrap justify-between my-5">
        <span @click="openPopup=true" style="color:blue;cursor:pointer;">Forgot Password?</span>
    </div>
    <vs-button class="float-right" :disabled="!validateForm" @click="login">Login</vs-button>
    <vs-popup title="" :active.sync="openPopup">
      <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
    </vs-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'demo@demo.com',
      password: 'demodemo',
      checkbox_remember_me: false,
      openPopup:false
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.email !== '' && this.password !== ''
    }
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },
    login () {
      // Loading
      this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password
        },
        notify: this.$vs.notify,
        closeAnimation: this.$vs.loading.close
      }
      this.$store.dispatch('auth/loginAttempt', payload)
    },

    // Google login
    loginWithGoogle () {
      this.$store.dispatch('auth/loginWithGoogle', { notify: this.$vs.notify })
    },

    // Facebook login
    loginWithFacebook () {
      this.$store.dispatch('auth/loginWithFacebook', { notify: this.$vs.notify })
    },

    // Twitter login
    loginWithTwitter () {
      this.$store.dispatch('auth/loginWithTwitter', { notify: this.$vs.notify })
    },

    // Github login
    loginWithGithub () {
      this.$store.dispatch('auth/loginWithGithub', { notify: this.$vs.notify })
    },
    registerUser () {
      if (!this.checkLogin()) return
      this.$router.push('/pages/register').catch(() => {})
    }
  }
}

</script>


<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook { background-color: #1551b1 }
    .bg-twitter { background-color: #00aaff }
    .bg-google { background-color: #4285F4 }
    .bg-github { background-color: #333 }
  }
}
</style>
