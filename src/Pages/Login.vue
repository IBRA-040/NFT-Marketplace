<template>
  <section
    class="d-flex justify-content-center align-items-center"
    style="min-height: 100vh; background: linear-gradient(to bottom, #4b0082, #000000)"
  >
    <div
      class="card p-5 shadow"
      style="background-color: #322d3e; border-radius: 10px; width: 400px"
    >
      <div class="text-center">
        <h1 class="text-white mb-1" style="font-size: 24px">Welcome Back</h1>
        <p class="text-white-50 mt-0" style="font-size: 12px">
          Sign in to access your NFT marketplace.
        </p>
      </div>
      <form>
        <div class="mb-3">
          <input
            type="email"
            class="form-control rounded-top"
            id="email"
            placeholder="Enter your email..."
            style="
              background-color: #ffffff1a;
              border: 1px solid #ffffff4d;
              color: white;
              border-radius: 0 0;
            "
          />
          <input
            type="password"
            v-model="password"
            class="form-control rounded-bottom"
            id="password"
            placeholder="Password"
            style="
              background-color: #ffffff1a;
              border: 1px solid #ffffff4d;
              color: white;
              border-radius: 0 0;
            "
          />
        </div>
        <div class="d-flex justify-content-between align-items-center py-2">
          <div class="d-flex gap-2 align-items-center">
            <input
              type="checkbox"
              v-model="rememberMe"
              style="accent-color: #9b59b6; width: 16px; height: 16px"
            />
            <label class="text-white-50" style="font-size: 12px">Remember me</label>
          </div>
          <a href="#" class="text-white-50" style="font-size: 12px; text-decoration: none"
            >Forgot your password?</a
          >
        </div>
        <button
          type="submit"
          class="btn btn-purple w-100 mt-3"
          style="background-color: #5a486a; border-radius: 5px"
        >
          Sign in
        </button>
        <p class="text-center text-white-50 mt-2" style="font-size: 12px">
          Don't have an account?
          <a href="#" style="color: #9b59b6; text-decoration: none">Sign up</a>
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.text-purple {
  color: #9b59b6;
}
.btn-purple {
  background-color: #8e44ad;
  color: white;
  border: none;
  padding: 10px;
}
.btn-purple:hover {
  background-color: #7d3c98;
}
input {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
}
input::placeholder {
  color: rgba(255, 255, 255, 0.3);
  opacity: 1;
}
input:focus {
  background-color: rgba(255, 255, 255, 0.2);
  outline: none !important;
  box-shadow: none !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
}
</style>
