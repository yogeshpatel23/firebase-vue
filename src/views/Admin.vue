<template>
  <div class="admin">
    <div class="container">
      <h2>Administration</h2>
      <p>गरीबी के कारण ये सेक्शन नहीं बना है वीडियो टाइम 4:08 - 4:25 </p>
      <div class="admin-info">
        <h2>Add Admin</h2>
        <div class="input">
          <input
            type="text"
            placeholder="Enter user email to make them an admin"
            id="addAdmins"
            v-model="adminEmail"
          />
        </div>
        <span>{{ functionMsg }}</span>
        <button class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      adminEmail: '',
      functionMsg: null
    }
  }
};
</script>

<style scoped>
.admin .container {
  max-width: 1000px;
  padding: 60px 25px;
}

.admin .container h2 {
  text-align: center;
  margin-bottom: 16px;
  font-weight: 300;
  font-size: 32px;
}

.admin .container p {
  text-align: center;
  color: red;
  font-weight: bold;
}
.admin .container .admin-info {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 32px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 32px auto;
}

.admin .container .admin-info span {
  font-size: 14px;
}

.admin .container .admin-info input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 8px;
  height: 50px;
}

.admin .container .admin-info input:focus {
  outline: none;
}
</style>