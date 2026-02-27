<script setup lang="ts">
import { ref, computed } from 'vue'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '~/components/ui/card'
import { Slider } from '~/components/ui/slider'
import { Label } from '~/components/ui/label'

// Shadcn sliders require arrays for v-model
const monthlyInvestment = ref([1000])
const expectedReturn = ref([19])
const investmentPeriod = ref([5])

// Standard compound interest formula
const calculateFutureValue = (pmt: number, ratePercent: number, months: number) => {
    const r = ratePercent / 100 / 12
    if (r === 0) return pmt * months
    return pmt * ((Math.pow(1 + r, months) - 1) / r)
}

// Injects organic crests and troughs to make the curve look like a real market cycle
const getMarketCycleMultiplier = (months: number) => {
    const years = months / 12
    const primaryWave = Math.sin(years * 0.9) * 0.18
    const secondaryWave = (Math.cos(years * 1.5) - 1) * 0.06
    return 1 + primaryWave + secondaryWave
}

const formatCompactCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(value)
}

const projectedTotal = computed(() => {
    // Using ?? provides a fallback to satisfy TypeScript's strict array checks
    const pmt = monthlyInvestment.value[0] ?? 1000
    const rate = expectedReturn.value[0] ?? 19
    const years = investmentPeriod.value[0] ?? 5

    const futureValue = calculateFutureValue(pmt, rate, years * 12)

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(futureValue)
})

const chartData = computed(() => {
    const pmt = monthlyInvestment.value[0] ?? 1000
    const rate = expectedReturn.value[0] ?? 19
    const selectedMonths = (investmentPeriod.value[0] ?? 5) * 12

    const maxYears = 30
    const maxMonths = maxYears * 12
    const chartWidth = 500
    const chartHeight = 300
    const paddingY = 20
    const bottomY = chartHeight - 10
    const availableHeight = bottomY - paddingY

    const points = []
    let maxValue = 1

    // Calculate all 360 months to find the absolute peak for dynamic Y-axis scaling
    for (let month = 0; month <= maxMonths; month++) {
        const baseValue = calculateFutureValue(pmt, rate, month)
        const wavyValue = baseValue * getMarketCycleMultiplier(month)

        points.push({ month, value: wavyValue })
        if (wavyValue > maxValue) maxValue = wavyValue
    }

    // Generate the SVG path data
    let pathData = `M 0 ${bottomY}`
    points.forEach(point => {
        const x = (point.month / maxMonths) * chartWidth
        const y = bottomY - (point.value / maxValue) * availableHeight
        pathData += ` L ${x} ${y}`
    })

    // Calculate coordinates for the interactive indicator circle
    const currentBaseValue = calculateFutureValue(pmt, rate, selectedMonths)
    const currentWavyValue = currentBaseValue * getMarketCycleMultiplier(selectedMonths)
    const currentX = (selectedMonths / maxMonths) * chartWidth
    const currentY = bottomY - (currentWavyValue / maxValue) * availableHeight

    // Map out Y-Axis Grid labels (100%, 75%, 50%, 25%, 0%)
    const yGrid = [1, 0.75, 0.5, 0.25, 0].map(multiplier => {
        const value = maxValue * multiplier
        const yCoord = bottomY - (value / maxValue) * availableHeight
        return {
            value,
            label: formatCompactCurrency(value),
            yCoord,
            percent: (yCoord / chartHeight) * 100
        }
    })

    const xGrid = [0, 10, 20, 30].map(year => ({
        label: year === 0 ? 'Now' : `${year} Yrs`,
        percent: (year / maxYears) * 100
    }))

    return {
        linePath: pathData,
        fillPath: `${pathData} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`,
        circleX: currentX,
        circleY: currentY,
        bottomBaseline: bottomY,
        yGrid,
        xGrid
    }
})
</script>

<template>
    <section class="py-16 md:py-24 px-4 sm:px-6 flex justify-center font-sans bg-background">
        <Card class="w-full max-w-6xl rounded-[2.5rem] shadow-sm border-border">

            <CardHeader class="text-center pb-12 md:pb-16 pt-8 md:pt-12">
                <CardTitle class="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
                    Expected Returns Calculator
                </CardTitle>
                <CardDescription class="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Based on historical performance of our AI algorithm<br>
                    Performance based on 19% average annual return from Midrar's AI algorithm.
                </CardDescription>
            </CardHeader>

            <CardContent
                class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-8 md:px-12 lg:px-16 pb-12 lg:pb-16">

                <div class="flex flex-col space-y-10">
                    <div class="space-y-5">
                        <div class="flex justify-between items-center">
                            <Label class="text-primary font-medium text-base">Monthly Investment Amount ($)</Label>
                            <div
                                class="px-4 py-2 border border-border rounded-xl bg-background text-primary font-semibold min-w-[100px] text-center shadow-sm">
                                ${{ (monthlyInvestment[0] ?? 1000).toLocaleString() }}
                            </div>
                        </div>
                        <Slider v-model="monthlyInvestment" :min="100" :max="20000" :step="100"
                            class="w-full cursor-pointer" />
                    </div>

                    <div class="space-y-5">
                        <div class="flex justify-between items-center">
                            <Label class="text-primary font-medium text-base">Expected Annual Return (%)</Label>
                            <div
                                class="px-4 py-2 border border-border rounded-xl bg-background text-primary font-semibold min-w-[100px] text-center shadow-sm">
                                {{ expectedReturn[0] ?? 19 }}%
                            </div>
                        </div>
                        <Slider v-model="expectedReturn" :min="1" :max="50" :step="1" class="w-full cursor-pointer" />
                    </div>

                    <div class="space-y-5">
                        <div class="flex justify-between items-center">
                            <Label class="text-primary font-medium text-base">Investment Period (Years)</Label>
                            <div
                                class="px-4 py-2 border border-border rounded-xl bg-background text-primary font-semibold min-w-[100px] text-center shadow-sm">
                                {{ investmentPeriod[0] ?? 5 }}
                            </div>
                        </div>
                        <Slider v-model="investmentPeriod" :min="1" :max="30" :step="1" class="w-full cursor-pointer" />
                    </div>
                </div>

                <div class="relative w-full h-[350px] lg:h-[400px] flex flex-col pt-6 lg:pt-0">

                    <div class="absolute top-0 left-12 lg:left-14 z-10 pointer-events-none">
                        <span class="text-sm text-muted-foreground font-medium mb-1">Projected Portfolio Value</span>
                        <span class="text-4xl md:text-5xl font-bold text-primary block">{{ projectedTotal }}</span>
                    </div>

                    <div class="relative flex-1 mt-20 ml-12 lg:ml-14 mb-8">

                        <div v-for="(grid, index) in chartData.yGrid" :key="'y-' + index"
                            class="absolute -left-12 lg:-left-14 w-10 lg:w-12 text-right text-xs font-medium text-muted-foreground -translate-y-1/2"
                            :style="{ top: grid.percent + '%' }">
                            {{ grid.label }}
                        </div>

                        <div v-for="(grid, index) in chartData.xGrid" :key="'x-' + index"
                            class="absolute -bottom-6 text-xs font-medium text-muted-foreground -translate-x-1/2 whitespace-nowrap"
                            :style="{ left: grid.percent + '%' }">
                            {{ grid.label }}
                        </div>

                        <svg class="w-full h-full overflow-visible" viewBox="0 0 500 300" fill="none"
                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">

                            <line v-for="(grid, index) in chartData.yGrid" :key="'line-' + index" x1="0"
                                :y1="grid.yCoord" x2="500" :y2="grid.yCoord" stroke="currentColor" class="text-border"
                                stroke-dasharray="4 4" />

                            <path :d="chartData.fillPath" fill="url(#chart-gradient)" opacity="0.3"
                                class="transition-none" />
                            <path :d="chartData.linePath" stroke="var(--blue)" stroke-width="3.5"
                                stroke-linejoin="round" class="transition-none" />

                            <line :x1="chartData.circleX" :y1="chartData.circleY + 6" :x2="chartData.circleX"
                                :y2="chartData.bottomBaseline" stroke="var(--blue)" stroke-width="2" opacity="0.5" />
                            <circle :cx="chartData.circleX" :cy="chartData.circleY" r="6" fill="var(--background)"
                                stroke="var(--blue)" stroke-width="3" />

                            <defs>
                                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="var(--blue)" stop-opacity="0.8" />
                                    <stop offset="100%" stop-color="var(--blue)" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

            </CardContent>
        </Card>
    </section>
</template>