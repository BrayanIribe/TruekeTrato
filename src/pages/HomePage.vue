<template>
  <div>
    <IHomeHeader />
    <ICreatePostButton />
    <IContainer>
      <div class="row mb-4">
        <div class="col-1 mb-3">
          <div class="d-flex align-items-center h-100">
            <font-awesome-icon icon="fa-solid fa-search" />
          </div>
        </div>
        <div class="col-11 mb-3">
          <b-form-input
            type="text"
            class="w-100"
            placeholder="Buscar publicaciones"
            required
          ></b-form-input>
        </div>
        <div class="col-4 offset-1">
          <b-button variant="primary" class="rounded-pill">Recientes</b-button>
        </div>
        <div class="col-6">
          <b-button variant="outline-primary" class="rounded-pill"
            >Mis publicaciones</b-button
          >
        </div>
      </div>

      <IPost class="mb-5" />
      <IPost />
    </IContainer>
  </div>
</template>

<script>
import IContainer from "@/components/IContainer";
import IHomeHeader from "@/components/IHomeHeader";
import IPost from "@/components/IPost";
import ICreatePostButton from "@/components/ICreatePostButton";

export default {
  components: { IHomeHeader, IContainer, IPost, ICreatePostButton },
};
</script>

<style>
</style>