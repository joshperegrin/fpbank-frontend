<template>
  <HistoryHeader
      title="Transaction History"
      :icon_src="checkmark"
  />
  <ion-content>

  </ion-content>
</template>

<script>
import GenericHeader from "@/components/GenericHeader.vue";
import { checkmark } from "ionicons/icons";
export default {
  components: {
    HistoryHeader: GenericHeader,
  },
  data () {
    return {
      checkmark,
    };
  },
}
</script>

<style scoped>

</style>