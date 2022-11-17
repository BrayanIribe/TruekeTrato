<template>
  <IContainer>
    <h1 class="text-center mb-4 mt-4">Trueke-tratos</h1>
    <form class="row">
      <b-form-group label="Usuario o email" class="col-12 mb-3">
        <b-form-input required></b-form-input>
      </b-form-group>
      <b-form-group label="Contraseña" class="col-12 mb-5">
        <b-form-input type="password" required></b-form-input>
      </b-form-group>
      <div class="col-12 mb-3">
        <b-button variant="dark" class="i-login-btn" to="/"
          >Iniciar sesión</b-button
        >
      </div>
      <router-link class="i-register-link col-12" to="/register"
        >¿Usuario nuevo? Regístrate</router-link
      >
      <div class="col-12 i-border-bottom pb-4"></div>
      <div class="col-12 text-center mt-4">
        <ISocialLoginBtn type="facebook" />
        <ISocialLoginBtn type="twitter" />
        <ISocialLoginBtn type="google" />
      </div>
    </form>
  </IContainer>
</template>

<script>
import IContainer from "@/components/IContainer.vue";
import ISocialLoginBtn from "@/components/ISocialLoginButton";

export default {
  components: { IContainer, ISocialLoginBtn },
};
</script>

<style>
.i-login-btn {
  display: block;
  width: 100%;
}

.i-register-link {
  display: block;
  text-decoration: none;
  text-align: center;
}
</style>