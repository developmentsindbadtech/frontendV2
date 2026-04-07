<script setup lang="ts">
import { ArrowLeftRight, ChevronDown, CircleAlert } from 'lucide-vue-next'
const isOpenRisk = ref(false)
const isOpenMarket = ref(false)
const isOpenBroker = ref(false)

const selectedRisk = ref('Select a risk level')
const selectedMarket = ref('Select a market')
const selectedBroker = ref('Select a broker')

const riskoptions = ['Low Risk', 'Medium Risk', 'High Risk']
const marketoptions = ['Tadawul', 'NASDAQ']
const brokeroptions = ['Khabeer', 'MetaTrader 5']

function selectRisk(option: string) {
  selectedRisk.value = option
  isOpenRisk.value = false
}

function selectMarket(option: string) {
  selectedMarket.value = option
  isOpenMarket.value = false
}

function selectBroker(option: string) {
  selectedBroker.value = option
  isOpenBroker.value = false
}
definePageMeta({
  layout: 'app',
})
</script>
<template>
  <section class="grid w-full max-w-10xl gap-6 xl:px-0">
    <div class="flex items-center gap-2">
      <h2 class="flex items-center gap-1 leading-none font-bold">
        <ArrowLeftRight class="h-4 w-4" />
        Trading
      </h2>
    </div>
    <div class="flex flex-col md:col-span-2">
      <div class="flex flex-row gap-2 mb-2">
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <div class="item center-left font-semibold">
            <h3>Welcome!</h3>
          </div>
          <div class="item center-left font-semibold mb-2">
            <h3>Mobarak Alenezi</h3>
          </div>
          <div class="relative w-full">
            <button
              @click="isOpenRisk = !isOpenRisk"
              class="w-full border p-2 rounded-lg flex justify-between items-center hover:cursor-pointer"
            >
              {{ selectedRisk }}
              <ChevronDown class="h-4 w-4" />
            </button>
            <div v-show="isOpenRisk" class="absolute z-10 w-full rounded-lg shadow mt-1">
              <ul>
                <li
                  v-for="option in riskoptions"
                  :key="option"
                  @click="selectRisk(option)"
                  class="p-2 bg-card cursor-pointer transform"
                >
                  {{ option }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <!-- her -->
          <div class="flex flex-row gap-2 mb-2">
            <div class="flex flex-col bg-card p-4 rounded-lg flex-1 mt-2">
              <div class="item center-left font-semibold mb-2">
                <h3>Market Status</h3>
              </div>
              <div class="relative w-full">
                <button
                  @click="isOpenMarket = !isOpenMarket"
                  class="w-full border p-2 rounded-lg flex justify-between items-center hover:cursor-pointer"
                >
                  {{ selectedMarket }}
                  <ChevronDown class="h-4 w-4" />
                </button>
                <div v-show="isOpenMarket" class="absolute z-10 w-full rounded-lg shadow mt-1">
                  <ul>
                    <li
                      v-for="option in marketoptions"
                      :key="option"
                      @click="selectMarket(option)"
                      class="p-2 bg-card cursor-pointer transform"
                    >
                      {{ option }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <div class="item center-left font-semibold mb-2">
            <h3>Connect to Brokers</h3>
          </div>
          <div class="relative w-full">
            <button
              @click="isOpenBroker = !isOpenBroker"
              class="w-full border p-2 rounded-lg flex justify-between items-center hover:cursor-pointer"
            >
              {{ selectedBroker }}
              <ChevronDown class="h-4 w-4" />
            </button>
            <div v-show="isOpenBroker" class="absolute z-10 w-full rounded-lg shadow mt-1">
              <ul>
                <li
                  v-for="option in brokeroptions"
                  :key="option"
                  @click="selectBroker(option)"
                  class="p-2 bg-card cursor-pointer transform"
                >
                  {{ option }}
                </li>
              </ul>
            </div>
          </div>
          <div class="item center-right font-semibold mt-4">
            <button class="border p-2 rounded-lg hover:cursor-pointer hover:bg-secondary">
              <h3 class="text-sm text-primary font-semibold">Connect</h3>
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-2 mb-2">
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <div>
            <h2 class="font-light flex items-center gap-1 leading-none">
              Buying Power <CircleAlert class="w-3 h-3"/>
            </h2>
          </div>
          <div class="mt-4">
            <p class="font-light">SAR</p>
          </div>
        </div>
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <div>
            <h2 class="font-light flex items-center gap-1 leading-none">
              Profit/Loss <CircleAlert class="w-3 h-3"/>
            </h2>
          </div>
          <div class="mt-4">
            <p class="font-light">SAR 0</p>
          </div>
        </div>
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <div>
            <h2 class="font-light flex items-center gap-1 leading-none">
              Wallet<CircleAlert class="w-3 h-3"/>
            </h2>
          </div>
          <div class="mt-4">
            <p class="font-light">SAR</p>
          </div>
        </div>
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <div>
            <h2 class="font-light flex items-center gap-1 leading-none">
              Refferal<CircleAlert class="w-3 h-3"/>
            </h2>
          </div>
          <div class="mt-4">
            <p class="font-light">0</p>
          </div>
        </div>
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <div>
            <h2 class="font-light flex items-center gap-1 leading-none">
              Invested Capital <CircleAlert class="w-3 h-3"/>
            </h2>
          </div>
          <div class="mt-4">
            <p class="font-light">SAR</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-2 mb-2">
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <h2 class="font-semibold flex items-center gap-1 leading-none">
              Profit/Loss 
          </h2>
          <div class="flex item-center justify-center">
            <p class="font-light text-sm">
              No Bot Transactions in The Last 12 Months
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
            <h2 class="font-bold flex items-center gap-1 leading-none">
                Assets 
            </h2>
            <p class="font-light text-[10px]">
              This  month
            </p>
            <div class="flex item-center justify-center">
              <p class="font-light text-sm mt-4">
                No Deals Found.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
          <div class="flex flex-col bg-card p-4 rounded-lg flex-1">
            <h2 class="font-bold flex items-center gap-1 leading-none">
              Transactions <CircleAlert class="w-4 h-4"/>
            </h2>
            <p class="font-light text-[10px]">
              This  month
            </p>
          </div>
          <div class="flex item-center justify-center">
              <p class="font-light text-sm">
                No Recent Transactions found.
              </p>
            </div>

          
        </div>
      </div>
    </div>
  </section>
</template>
