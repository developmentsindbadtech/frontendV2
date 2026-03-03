<script setup lang="ts">
import { ChevronDown, Activity, RefreshCw, Grid, Cloud, Coins, ChevronRight } from 'lucide-vue-next'

const leftFeatures = [
    { title: 'Signal Bot', description: 'Designed for TradingView users', icon: Activity },
    { title: 'DCA Bot', description: 'Purchase at opportune moments', icon: RefreshCw },
    { title: 'GRID Bot', description: 'Trade in sideways markets', icon: Grid }
]

const exchangeBots = ['Binance Bot', 'OKX Bot', 'Coinbase Bot', 'Kraken Bot', 'Bybit Bot']
const coinBots = ['Ethereum Bot', 'Tether Bot', 'Dogecoin Bot', 'Solana Bot', 'BNB Bot']
</script>

<template>
    <DropdownMenu :modal="false">
        <DropdownMenuTrigger as-child>
            <Button variant="default" size="sm"
                class="hover:bg-transparent hover:text-secondary bg-transparent border-0 text-primary focus:ring-0 focus:ring-offset-0 data-[state=open]:bg-transparent data-[state=open]:text-secondary cursor-pointer">
                <span class="text-lg">Feature</span>
                <ChevronDown class="ml-2 h-4 w-4" />
            </Button>
        </DropdownMenuTrigger>

        <!-- Added offset 20 to align drop down menu to the border -->
        <DropdownMenuContent align="start" :side-offset="20"
            class="w-[750px] p-0 flex rounded-xl border border-border bg-card shadow-xl z-50 overflow-hidden">

            <div class="w-1/3 bg-muted/20 p-4 border-r border-border flex flex-col gap-2">
                <DropdownMenuItem v-for="item in leftFeatures" :key="item.title"
                    class="flex flex-col items-start p-3 cursor-pointer transition-colors rounded-lg hover:bg-background outline-none border border-transparent hover:border-border/50">
                    <div class="flex items-center gap-2 w-full">
                        <component :is="item.icon" class="w-5 h-5 text-blue" />
                        <span class="font-semibold text-sm text-primary">{{ item.title }}</span>
                    </div>
                    <span class="text-xs text-muted-foreground mt-1 ml-7">{{ item.description }}</span>
                </DropdownMenuItem>
            </div>

            <div class="w-2/3 bg-card p-6 flex flex-col">
                <div class="mb-8">
                    <div class="flex items-center gap-2 mb-4 px-2 opacity-70">
                        <Cloud class="w-4 h-4" />
                        <span class="text-xs font-bold uppercase tracking-wider">Exchange BOT</span>
                    </div>
                    <div class="grid grid-cols-3 gap-y-4 gap-x-2">
                        <DropdownMenuItem v-for="bot in exchangeBots" :key="bot"
                            class="flex items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors p-2 text-sm outline-none">
                            <div class="w-2 h-2 rounded-full bg-blue/40"></div>
                            {{ bot }}
                        </DropdownMenuItem>
                    </div>
                </div>

                <div class="relative">
                    <div class="flex items-center gap-2 mb-4 px-2 opacity-70">
                        <Coins class="w-4 h-4" />
                        <span class="text-xs font-bold uppercase tracking-wider">Coin BOT</span>
                    </div>
                    <div class="grid grid-cols-3 gap-y-4 gap-x-2">
                        <DropdownMenuItem v-for="bot in coinBots" :key="bot"
                            class="flex items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors p-2 text-sm outline-none">
                            <div class="w-2 h-2 rounded-full bg-natural/40"></div>
                            {{ bot }}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            class="flex items-center justify-end text-xs font-medium text-blue cursor-pointer p-2 outline-none">
                            More
                            <ChevronRight class="w-3 h-3 ml-1" />
                        </DropdownMenuItem>
                    </div>
                </div>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
</template>