<template>
  <div>
    <hr />
    <h1>Array iteration in vue</h1>
    <ul>
      <li v-for="item in cityArray" :key="item">
        {{ item }}
      </li>
    </ul>

    <h1>Array of Object Iteration</h1>
    <ul>
      <li v-for="user in users" :key="user.email">
        my name is {{ user.name }} and my email is {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LoopList",
  data() {
    return {
      cityArray: ["lahore", "Islamabad", "Kolo", "Hafizabad"],
      users: [
        {
          name: "Mujtaba",
          email: "mujtabatarar@gmail.com",
        },
        {
          name: "Ahsan",
          email: "ahsan@test.com",
        },
        {
          name: "danial",
          email: "ahsan@test.com",
        },
      ],
    };
  },
};
</script>
