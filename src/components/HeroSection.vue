<template>
  <section
    class="py-5 d-flex justify-content-center align-items-center text-center text-white"
    style="min-height: 100vh"
  >
    <div class="container">
      <div class="mb-5">
        <h1 class="display-4 fw-bold mb-3">
          Your own NFT Marketplace <br />
          without Coding
        </h1>
        <p class="mx-auto text-white fs-5 w-50 w-md-50">
          The fastest and easiest way to fully unlock the potential of your digital assets. Create
          and run an exclusive marketplace for your NFT business today!
        </p>
      </div>

      <div class="d-flex justify-content-center align-items-center gap-3 flex-wrap">
        <input
          type="email"
          class="form-control w-auto text-white px-4 py-2 border-0"
          placeholder="Enter your email..."
          style="min-width: 250px; color: #ccc"
        />
        <button
          class="btn px-4 py-2"
          style="background-color: rebeccapurple; color: white; border: none"
        >
          Start Free
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
input {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
}
button {
  border-radius: 15px;
}
input::placeholder {
  color: gray;
}
</style>
