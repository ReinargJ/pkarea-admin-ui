<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <span class="text-gray-700 font-semibold text-2xl">PK Area</span>
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-gray-700 text-sm">Login</span>
          <input
            class="mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="model.email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-gray-700 text-sm">Mot de passe</span>
          <input
            type="password"
            class="mt-1 block w-full rounded-md focus:border-indigo-600"
            v-model="model.password"
          />
        </label>

        <div class="mt-6">
          <button
            type="submit"
            class="py-2 px-4 text-center bg-indigo-600 rounded-md w-full text-white text-sm hover:bg-indigo-500"
          >
            Connecter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default defineComponent({
  setup() {
    const router = useRouter();
    const model = reactive({ email: "test", password: "test" });

    function login() {
      console.log(model)
      const http = axios.create(); // unsecured
      // const result = http
      //   .post("http://localhost:10000/authenticate", model, {})
      //   .then((result) => {
      //     console.log(result);
      //     if (result.data.success) {
      //       router.push("/dashboard");
      //     }
      //   });
      const result = http
        .post("http://localhost:10000/auth/login", {email: model.email, password: model.password})
        .then((result) => {
          console.log(result);
          if (result.status == 200) {
            router.push("/edit");
          }
        }).catch(err => {
          console.log(err);
        }); 
    }

    return {
      login,
      model,
    };
  }
});
</script>
