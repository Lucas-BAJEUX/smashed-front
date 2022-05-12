<template>
  <div class="navigation">
    <div class="navigation__recherche">
      <img src="../assets/navigation/recherche.svg" alt="Recherche" />
    </div>
    <div class="navigation__accueil">
      <img src="../assets/navigation/accueil.svg" alt="Accueil" />
    </div>
    <div class="navigation__compte">
      <img src="../assets/navigation/compte.svg" alt="Compte" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  height: 70px;
  background-color: #304c66;
}
</style>
