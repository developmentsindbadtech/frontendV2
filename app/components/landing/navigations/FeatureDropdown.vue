<script setup lang="ts">
import {
    ChevronDown,
    Zap,
    Bot,
    Clock,
    BarChart3,
    ShieldCheck,
    Lock,
    Cloud,
    Coins,
    ChevronRight
} from 'lucide-vue-next'

const features = [
    { title: 'Automated Trade', description: 'Execute trades based on preset rules.', icon: Zap },
    { title: 'Trading Bots', description: 'Deploy algorithmic trading strategies.', icon: Bot },
    { title: '24/7 Automation', description: 'Continuous market monitoring and execution.', icon: Clock },
    { title: 'Backtest', description: 'Test strategies against historical data.', icon: BarChart3 },
    { title: 'Safeguard Signal', description: 'Advanced risk management signals.', icon: ShieldCheck },
    { title: 'Security', description: 'Institutional-grade asset protection.', icon: Lock }
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

        <DropdownMenuContent align="start" :side-offset="20"
            class="w-[800px] p-0 flex rounded-xl border border-border bg-card shadow-xl z-50 overflow-hidden">

            <div class="w-2/5 bg-muted/20 p-4 border-r border-border flex flex-col gap-1">
                <DropdownMenuItem v-for="item in features" :key="item.title"
                    class="flex flex-col items-start p-2.5 cursor-pointer transition-colors rounded-lg hover:bg-background outline-none border border-transparent hover:border-border/50">
                    <div class="flex items-center gap-2 w-full">
                        <component :is="item.icon" class="w-4 h-4 text-blue" />
                        <span class="font-semibold text-sm text-primary">{{ item.title }}</span>
                    </div>
                    <span class="text-[11px] text-muted-foreground mt-0.5 ml-6">{{ item.description }}</span>
                </DropdownMenuItem>
            </div>

            <div class="w-3/5 bg-card p-6 flex flex-col justify-center">
                <div class="mb-8">
                    <div class="flex items-center gap-2 mb-4 px-2 opacity-70">
                        <Cloud class="w-4 h-4" />
                        <span class="text-xs font-bold uppercase tracking-wider">Exchange BOT</span>
                    </div>
                    <div class="grid grid-cols-2 gap-y-4 gap-x-2">
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
                    <div class="grid grid-cols-2 gap-y-4 gap-x-2">
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