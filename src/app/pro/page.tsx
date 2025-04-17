"use client"

import Nav from '@/components/Nav/nav'
import { CardsPricingsBig, CardsPricingsEntreprise, CardsPricingsSmall } from '@/components/pricingCards/CardsPricings'
import React from 'react'

function Pro() {
    return (
        <div>
            <Nav />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Conçu pour des équipes d'affaires comme la vôtre</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Chez Rekap, nous nous concentrons sur la gestion efficace des documents administratifs et des échanges numériques pour améliorer la productivité et faciliter les processus de votre entreprise.</p>

                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                        <CardsPricingsSmall />

                        <CardsPricingsEntreprise />
                        <CardsPricingsBig />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pro