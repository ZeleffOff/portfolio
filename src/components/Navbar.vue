<template>
  <nav>
    <div class="nav-logo">
      <h2>Raphaël</h2>
    </div>

    <ul class="nav_links">
      <li class="nav-links__item active"><a href="#header-section">Home</a></li>
      <li class="nav-links__item"><a href="#about-section">About me</a></li>
      <li class="nav-links__item"><a href="#projects-section">Projects</a></li>
      <li class="nav-links__item"><a href="#contact-section">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
* {
  list-style: none;
  text-decoration: none;
}
a {
  color: inherit;
  transition: color 0.3s ease;

  &:hover {
    color: #4056d7;
  }
}

nav {
  padding: 15px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-logo h2 {
  font-size: 1.7rem;
  font-weight: bold;
}

.nav_links {
  display: flex;
  gap: 20px;
}
.nav-links__item {
  font-size: 1.1rem;
}
.nav-links__item.active {
  text-decoration: underline;
}
</style>
