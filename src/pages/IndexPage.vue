<template>
  <q-page class="flex flex-center q-pa-md bg-dark text-white">
    <div class="q-pa-md" style="max-width: 400px; width: 100%">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <!-- ช่องกรอกชื่อ -->
        <q-input
          filled
          dark
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- ช่องกรอกอายุ -->
        <q-input
          filled
          dark
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />

        <!-- Toggle ยอมรับเงื่อนไข -->
        <q-toggle
          dark
          v-model="accept"
          label="I accept the license and terms"
        />

        <!-- ปุ่ม Submit และ Reset -->
        <div>
          <q-btn label="SUBMIT" type="submit" color="primary" />
          <q-btn label="RESET" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// เปิดใช้งาน Dark Mode
$q.dark.set(true)

const name = ref(null)
const age = ref(null)
const accept = ref(false)

const onSubmit = () => {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first'
    })
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted'
    })
  }
}

const onReset = () => {
  name.value = null
  age.value = null
  accept.value = false
}
</script>
