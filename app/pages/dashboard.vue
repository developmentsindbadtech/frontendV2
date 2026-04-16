<template>
  <div class="dashboard-container">
    <div class="dashboard-card">
      <h2>Dashboard</h2>
      
      <div v-if="status === 'authenticated'" class="user-info">
        <p><strong>Email:</strong> {{ data?.user?.email }}</p>
        <p><strong>Name:</strong> {{ data?.user?.name }}</p>
      </div>

      <div v-else class="loading">
        Loading...
      </div>

      <div class="dashboard-actions">
        <button @click="handleLogout" class="btn-logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { data, status, signOut } = useAuth()

const handleLogout = async () => {
  await signOut({ redirect: false })
  await navigateTo('/login')
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.dashboard-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.dashboard-card h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #333;
}

.user-info {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.user-info p {
  margin: 0.5rem 0;
  color: #555;
}

.loading {
  text-align: center;
  color: #999;
}

.dashboard-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.btn-logout {
  padding: 0.75rem 1.5rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-logout:hover {
  background-color: #c82333;
}
</style>
