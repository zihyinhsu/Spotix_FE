<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode'

const props = defineProps<{
  qrCodeText: string
}>()
const qrcode = useQRCode(props.qrCodeText)
</script>

<template>
  <div>
    <img
      :src="qrcode"
      alt="QR Code"
    >
  </div>
</template>
