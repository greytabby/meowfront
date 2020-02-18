<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Signup</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                id="username"
                label="Username"
                name="username"
                type="text"
                v-model="username"
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                v-model="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="handleSubmit">Signup</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    ...mapState('auth', ['state'])
  },
  created() {
    this.logout()
  },
  methods: {
    ...mapActions('auth', ['signup', 'logout']),
    handleSubmit() {
      const username = this
      const password = this
      if (username && password) {
        this.signup(username, password)
      }
    }
  }
}
</script>
